import EducationData from "../../../jsonData/edu.json";

interface InfoBoxImageProp {
  ImageSrc: string;
  ImageAlt: string;
}

function InfoBoxImage({ ImageSrc, ImageAlt }: InfoBoxImageProp) {
  return (
    <>
      <div className="flex-shrink-0">
        <div className="m-3">
          <img
            src={ImageSrc}
            alt={`${ImageAlt} Logo`}
            className="img-fluid"
            style={{ maxWidth: "100px" }}
          />
        </div>
      </div>
    </>
  );
}

interface EducationData {
  degree: string;
  institution: string;
  date: string;
  gpa: string;
  honors?: string | null;
  description?: string | null;
  logo: string;
  certificate?: string | null;
  certificateLabel?: string | null;
}

function InfoBoxTextEdu({ json_data }: { json_data: EducationData }) {
  return (
    <>
      <div className="flex-grow-1 ms-3">
        <div className="d-inline-flex align-items-center mb-2">
          <h5 className="mb-0 text-primary">{json_data.degree}</h5>
          {json_data.certificate && (
            <a
              href={json_data.certificate}
              target="_blank"
              className="ms-2 text-decoration-none text-secondary fw-normal small"
              rel="noopener noreferrer"
            >
              (View Certificate <i className="bi bi-box-arrow-up-right"></i>)
            </a>
          )}
        </div>

        <p className="mb-1 text-muted fst-italic">{json_data.institution}</p>
        <p className="mb-1 text-secondary">{json_data.date}</p>
        <p className="mb-0">
          <strong>GPA:</strong> {json_data.gpa} {json_data.honors}
        </p>
        {json_data.description && 
            <ul className="ul-list">
                <li className="list-item">
                    {json_data.description}    
                </li>
            </ul>
        }
        
      </div>
    </>
  );
}

function ResumeListingsEducation() {
  return (
    <>
      <div className="container mt-4">
        {EducationData.map((item, idx) => (
          <div
            className="d-flex mb-4 align-items-center justify-items-center"
            key={idx}
          >
            {/* Left: Logo */}
            <InfoBoxImage ImageSrc={item.logo} ImageAlt={item.institution} />
            {/*Right: Text*/}
            <InfoBoxTextEdu json_data={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ResumeListingsEducation;
