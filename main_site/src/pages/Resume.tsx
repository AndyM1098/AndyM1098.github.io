import ResumeSections from "../components/Resume/ResumeSections";
import ResumeHeadBanner from "../components/Resume/ResumeHeadBanner";

function Resume() {
  return (
    <>
      <div className="container">
        {/* Change banner to something else! To what tho? */}
        <ResumeHeadBanner/>

        <ResumeSections/>
      </div>
      

      {/* <ResumeFooter/> */}

    </>
  );
}

export default Resume;
