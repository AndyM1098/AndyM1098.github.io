interface ResumeInfoBoxTextEduProp {
  degree: string;
  institution: string;
  dates: string;
  gpa: string;
  honors?: string | null;
  description?: string | null;
  logo_path: string;
  certificate_path?: string | null;
}

function ResumeInfoBoxTextEdu({
  json_data,
}: {
  json_data: ResumeInfoBoxTextEduProp;
}) {
  return (
    <>
      <div className="flex-grow-1 ms-3">
        <div className="d-inline-flex align-items-center mb-2">
          <h5 className="mb-0 text-primary">{json_data.degree}</h5>
          {json_data.certificate_path && (
            <a
              href={json_data.certificate_path}
              target="_blank"
              className="ms-2 text-decoration-none text-secondary fw-normal small"
              rel="noopener noreferrer"
            >
              (View Certificate)
            </a>
          )}
        </div>

        <p className="mb-1 text-muted fst-italic">{json_data.institution}</p>
        <p className="mb-1 text-secondary">{json_data.dates}</p>
        <p className="mb-0">
          <strong>GPA:</strong> {json_data.gpa} {json_data.honors}
        </p>
        {json_data.description && (
          <ul className="ul-list">
            <li className="list-item">{json_data.description}</li>
          </ul>
        )}
      </div>
    </>
  );
}

export default ResumeInfoBoxTextEdu;
