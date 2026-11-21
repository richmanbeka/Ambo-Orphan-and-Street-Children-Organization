const MAX_BODY_BYTES = 16_000;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getTextField(
  body: Record<string, unknown>,
  field: string,
  maxLength: number,
): string | null {
  const value = body[field];

  if (typeof value !== "string") {
    return null;
  }

  const trimmedValue = value.trim();
  return trimmedValue.length > 0 && trimmedValue.length <= maxLength
    ? trimmedValue
    : null;
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type");
  if (!contentType?.toLowerCase().includes("application/json")) {
    return Response.json({ error: "Send the form as JSON." }, { status: 415 });
  }

  const bodyText = await request.text();
  if (new TextEncoder().encode(bodyText).byteLength > MAX_BODY_BYTES) {
    return Response.json({ error: "The message is too long." }, { status: 413 });
  }

  let parsedBody: unknown;
  try {
    parsedBody = JSON.parse(bodyText);
  } catch {
    return Response.json({ error: "The submitted form is invalid." }, { status: 400 });
  }

  if (!isRecord(parsedBody)) {
    return Response.json({ error: "The submitted form is invalid." }, { status: 400 });
  }

  const name = getTextField(parsedBody, "name", 120);
  const email = getTextField(parsedBody, "email", 254);
  const subject = getTextField(parsedBody, "subject", 180);
  const message = getTextField(parsedBody, "message", 5000);

  if (!name || !email || !subject || !message) {
    return Response.json(
      { error: "Please complete all fields within the allowed length." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient =
    process.env.CONTACT_EMAIL?.trim() || "lilbeka33@gmail.com";
  const sender = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    return Response.json(
      {
        error:
          "Message delivery is not configured yet. Please contact us by phone.",
      },
      { status: 503 },
    );
  }

  let resendResponse: Response;
  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `Contact form: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });
  } catch (error) {
    console.error("Could not reach the email delivery service.", error);
    return Response.json(
      { error: "We could not send your message right now. Please try again later." },
      { status: 502 },
    );
  }

  if (!resendResponse.ok) {
    console.error("Email delivery service rejected the message.", {
      status: resendResponse.status,
    });
    return Response.json(
      { error: "We could not send your message right now. Please try again later." },
      { status: 502 },
    );
  }

  try {
    const confirmationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [email],
        subject: "We received your message",
        text: `Hello ${name},\n\nThank you for contacting Ambo Orphan and Street Children Organization (AOSCO). We received your message and will get back to you soon.\n\nSubject: ${subject}\n\nYour message:\n${message}\n\nAOSCO`,
      }),
    });

    if (!confirmationResponse.ok) {
      console.error("Could not send the sender confirmation email.", {
        status: confirmationResponse.status,
      });
    }
  } catch (error) {
    console.error("Could not reach the email service for sender confirmation.", error);
  }

  return Response.json({ message: "Your message has been sent. Thank you." });
}
