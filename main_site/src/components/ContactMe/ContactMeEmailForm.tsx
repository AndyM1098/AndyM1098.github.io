
interface FormInfoFieldProp{
    text : string,
    field_id : string,
    field_type?: string // Defaults to "text"
}

function FormInfoField({text, field_id, field_type = "text"}: FormInfoFieldProp){
    return(
        <>
            <div className="mb-3">
                <label className="form-label">{text}</label>
                <input type={field_type} className="form-control" id={field_id}/>
            </div>
        </>
    )

}

function EmailForm() {
  return (
    <>
        <form>
            {/* Misc Fields */}
            <FormInfoField text="Name" field_id="ContactMeEmailFormName" />
            <FormInfoField text="Email" field_id="ContactMeEmailFormEmail" field_type="email" />
            <FormInfoField text="Phone Number (Optional)" field_id="ContactMeEmailFormPhone"/>
            <FormInfoField text="Linkedin Profile" field_id="ContactMeEmailFormLinkedin" />
            <FormInfoField text="Header" field_id="ContactMeEmailFormHeader" />

            {/* Message Box */}
            <div>
                <label className="form-label">Message</label>
                <div className="input-group">
                    <textarea className="form-control" aria-label="With textarea" id="ContactMeEmailFormMessage" required></textarea>
                </div>
            </div>
            
            <button type="submit" className="mt-3 btn btn-primary">Submit</button>
        
        </form>


    </>
  );
}

function ContactMeEmailForm() {
  return (
    <>
      <div>
        <div>
          <h1>Email Form</h1>
          <p>
            Fill out the below fields, with a short message! I will reply as
            soon as I can!
          </p>
        </div>

        <div>
            <EmailForm />
        </div>

      </div>
    </>
  );
}

export default ContactMeEmailForm;
