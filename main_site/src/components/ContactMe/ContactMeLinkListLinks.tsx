import linkData from "../../jsonData/links.json";

function ContactMeLinkListlinks() {
  return (
    <>
      {linkData.map((links, idx) => (
        <a
            key={idx}
          className="link-stretched"
          href={links.url}
          target="_blank"
          rel="noopener noreferrer external"
        >
          <div
            
            className="d-flex align-items-center bg-primary-subtle my-3 rounded-pill border border-5 border-primary justify-content-left"
          >
            <div className="h1 ms-5">{links.name_text}</div>
            <div className="ms-5">
              <img
                src={links.logo_path}
                className="img-fluid"
                alt="Description"
              ></img>
            </div>
          </div>
        </a>
      ))}
    </>
  );
}

export default ContactMeLinkListlinks;
