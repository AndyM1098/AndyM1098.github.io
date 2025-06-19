// import "../components/ResumeComponents/ResumeHeadBanner.tsx";

import ResumeSections from "../components/ResumeComponents/ResumeSections";
import ResumeHeadBanner from "../components/ResumeComponents/ResumeHeadBanner";

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
