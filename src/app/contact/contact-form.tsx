"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [notice, setNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("");
    setIsSuccess(false);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const responseBody: unknown = await response.json();
      const responseMessage =
        typeof responseBody === "object" &&
        responseBody !== null &&
        "message" in responseBody &&
        typeof responseBody.message === "string"
          ? responseBody.message
          : typeof responseBody === "object" &&
              responseBody !== null &&
              "error" in responseBody &&
              typeof responseBody.error === "string"
            ? responseBody.error
            : "We could not send your message. Please try again.";

      setNotice(responseMessage);
      setIsSuccess(response.ok);
      if (response.ok) {
        form.reset();
      }
    } catch {
      setNotice("We could not send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className="contact-form-panel"
      id="message"
      aria-labelledby="message-title"
    >
      <div className="contact-panel-heading">
        <p className="about-eyebrow">Send us a message</p>
        <h2 id="message-title">We’d love to hear from you</h2>
        <p>
          Have a question or want to support our work? Fill out the form below
          and we’ll get back to you.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-fields">
          <label>
            Your name
            <input
              autoComplete="name"
              name="name"
              placeholder="Your full name"
              required
            />
          </label>
          <label>
            Email address
            <input
              autoComplete="email"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </label>
          <label className="contact-form-wide">
            Subject
            <input name="subject" placeholder="How can we help?" required />
          </label>
          <label className="contact-form-wide">
            Message
            <textarea
              name="message"
              placeholder="Write your message here..."
              required
              rows={6}
            />
          </label>
        </div>
        <div className="contact-form-submit">
          <button className="donate-button" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
          <p>
            Your message will be sent securely to our organization.
          </p>
        </div>
        <p
          className={`contact-form-notice${isSuccess ? " is-success" : ""}`}
          role="status"
          aria-live="polite"
        >
          {notice}
        </p>
      </form>
    </section>
  );
}
