import JobData from "../../../jsonData/jobs.json"

function Jobs() {
  return (
    <>
      <div className="container mt-4">
        {JobData.map((item, idx) => (
          <div className="d-flex mb-4 align-items-center justify-items-center" key={idx}>
            
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <div className="m-3">
                <img
                  src={item.logo_path}
                  alt="Company Logo"
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </div>
            </div>

            {/* Right: Text content */}
            <div className="d-flex flex-column m-1">
              <h5 className="text-primary">{item.job_title}</h5>
              <p className="mb-0 text-secondary">{item.company}</p>
              <div className="d-inline-flex align-items-center mb-2">
                <p className="mb-0 text-secondary">{item.location}</p>
                <span className="mx-2" style={{ color: "black" }}>•</span>
                <p className="mb-0 text-secondary">{item.dates}</p>
              </div>
              <ul className="mb-0 ps-3">
                {item.bullet_points.map((bullet_point, bidx) => (
                  <li key={bidx} className="mb-1">
                    {bullet_point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Jobs;