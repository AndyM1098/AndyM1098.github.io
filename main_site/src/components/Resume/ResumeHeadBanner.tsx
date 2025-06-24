import LinkElement from "../Links/LinkElement";

interface ResumeHeadBannerContactInfo {
  name: string;
  link_name: string;
  link_href: string;
}

const contactInfo: ResumeHeadBannerContactInfo[] = [
  {
    name: "Email",
    link_name: "Email Me!",
    link_href: "mailto:andym.1098@gmail.com",
  },
  { name: "Github", link_name: "Visit!", link_href: "https://github.com" },
  {
    name: "LinkedIn",
    link_name: "Visit!",
    link_href: "https://www.linkedin.com/in/andrew-mueller-0a35b2180/",
  },
];

function ResumeHeadBanner() {
  return (
    <>
      <div className="container mt-5 mb-4">
        <div className="row align-items-center">
          <div className="col-md-2 text-center mb-3 mb-md-0">
            <img
              src="your-headshot.jpg"
              alt="Head"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "120px" }}
            />
          </div>
          <div className="col-md-10">
            <h2 className="mb-1 text-primary">Andrew Mueller</h2>
            <p>Location: Knoxville, TN</p>
            {contactInfo.map((item, idx) => (
              <LinkElement
                key={idx}
                name={item.name}
                link_name={item.link_name}
                link_href={item.link_href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeHeadBanner;
