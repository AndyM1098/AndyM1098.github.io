import ContactMeBanner from "./ContactMeBanner";
import ContactMeLinkList from "./ContactMeLinkList";
import ContactMeEmailForm from "./ContactMeEmailForm";

function ContactMeLayout(){
    return(
        <>
            <ContactMeBanner />

            <ContactMeLinkList/>

            <ContactMeEmailForm/>
        </>
    );
}

export default ContactMeLayout;