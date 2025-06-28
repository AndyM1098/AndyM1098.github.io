import linkData from "../../jsonData/links.json";

function ContactMeLinkListlinks(){

    return(
        <>
            {  
                linkData.map((links, idx) =>
                    <div key={idx}>
                            <div className="d-flex justify-content-center mb-2">
                                <p className="mb-0">{links.name_text}</p>
                                <p className="mb-0">:</p>
                                <a className="mb-0" href={links.url} target="_blank" rel="noopener noreferrer external">
                                    {links.link_text}
                                </a>
                            </div>
                    </div>
                )
            }
        </>
    );
}

export default ContactMeLinkListlinks;

