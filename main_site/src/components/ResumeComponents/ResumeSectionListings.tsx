import JobData from "../../jsonData/jobs.json";
import ResumeListingsEducation from "./ResumeListings/ResumeListingsEducation";

const LISTING_TYPE_EDUCATION = "education";
const LISTING_TYPE_JOBS = "jobs";

interface ResumeSectionListingsProp {
  listing_type: string;
}

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
                  alt={`${item.location} Logo`}
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



function ResumeSectionListings({ listing_type }: ResumeSectionListingsProp) {
  console.log({ listing_type });
  //Figure out how to throw an error here
  if (listing_type === null) {
    console.log("NULL?????");
    return null;
  } else if (listing_type === "Education") {
    return <ResumeListingsEducation />;
  } else if (listing_type === "Jobs") {
    return Jobs();
  }
  return null;
}

export default ResumeSectionListings;
