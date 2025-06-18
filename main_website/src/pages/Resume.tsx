import "../App.css";

import "../components/ResumeComponents/ResumeHeadBanner.tsx";

import ResumeSections from "../components/ResumeComponents/ResumeSections.tsx";
import ResumeHeadBanner from "../components/ResumeComponents/ResumeHeadBanner.tsx";

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
