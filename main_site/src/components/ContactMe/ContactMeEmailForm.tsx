import React from "react";

interface FormInfoFieldProp {
  text: string;
  field_id: string;
  field_type?: string;
  field_required?: boolean;
}

// Fixed width for JSON keys to align inputs
const KEY_WIDTH = "21ch";
const FIELD_WIDTH = "35ch";

export function FormInfoField({
  text,
  field_id,
  field_type = "text",
  field_required = true,
}: FormInfoFieldProp) {
  return (
    <div
      className="mb-3 d-flex align-items-center"
      style={{ fontFamily: "'Fira Code', monospace" }}
    >
      <div
        className="align-items-center me-1"
        style={{ width: KEY_WIDTH, whiteSpace: "nowrap" }}
      >
        <span className="text-primary">"</span>
        <label htmlFor={field_id} className="form-label mb-0 mx-1 text-primary">
          {text}
        </label>
        <span className="text-primary">"</span>
        <span className="text-dark">:</span>
      </div>

      <span style={{ color: "blue" }}>"</span>
      <input
        type={field_type}
        id={field_id}
        className="form-control me-1"
        required={field_required}
        style={{ color: "blue", width: FIELD_WIDTH}}
      />
      <span className="text-success">"</span>

      {!field_required && <span className="text-muted"> | null</span>}
      <span>,</span>
    </div>
  );
}

export function EmailForm() {
  return (
    <form>
      <FormInfoField text="Name" field_id="ContactMeEmailFormName" />
      <FormInfoField
        text="Email"
        field_id="ContactMeEmailFormEmail"
        field_type="email"
      />
      <FormInfoField
        text="Phone Number"
        field_id="ContactMeEmailFormPhone"
        field_required={false}
      />
      <FormInfoField
        text="Linkedin Profile"
        field_id="ContactMeEmailFormLinkedin"
        field_required={false}
      />
      <FormInfoField text="Header" field_id="ContactMeEmailFormHeader" />

      {/* Message Box */}
      <div className="mb-3 d-flex align-items-start" style={{ fontFamily: "'Fira Code', monospace" }}>
        {/* Key container */}
        <div
          className="d-flex align-items-center me-1"
          style={{ width: KEY_WIDTH, whiteSpace: "nowrap" }}
        >
          <span>"</span>
          <label
            htmlFor="ContactMeEmailFormMessage"
            className="form-label mb-0 mx-1"
          >
            Message
          </label>
          <span>"</span>
          <span>:</span>
        </div>

        <div className="d-flex align-items-center">
          <span style={{color: "blue"}}>"</span>
          <textarea
            id="ContactMeEmailFormMessage"
            required={true}
            className="form-control me-1" 
            style={{color: "blue", width: FIELD_WIDTH}}
          />
          <span style={{color: "blue"}}>"</span>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default function ContactMeEmailForm() {
  return (
    <section className="p-4">
      <header className="mb-4">
        <h1>Email Form</h1>
        <div className="p-1 bg-info d-inline">This is not yet functional!</div>
        <p>
          Fill out the below fields with a short message! I will reply as soon
          as I can.
        </p>
        
      </header>
      <EmailForm />
    </section>
  );
}
