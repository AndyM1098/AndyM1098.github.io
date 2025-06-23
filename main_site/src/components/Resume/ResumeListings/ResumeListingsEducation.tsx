import EducationData from "../../../jsonData/edu.json";
import ResumeInfoBoxImage from "../ResumeInfoBox/ResumeInfoBoxImage";
import ResumeInfoBoxTextEdu from "../ResumeInfoBox/ResumeInfoBoxTextEdu";

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
            <div className="flex-shrink-0">
              <ResumeInfoBoxImage ImageSrc={item.logo_path} />
            </div>
            {/*Right: Text*/}
            <ResumeInfoBoxTextEdu json_data={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ResumeListingsEducation;
