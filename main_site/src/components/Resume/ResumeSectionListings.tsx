import ResumeListingsEducation from "./ResumeListings/ResumeListingsEducation";
import Jobs from "./ResumeListings/ResumeListingsJobs";

const LISTING_TYPE_EDUCATION = "education";
const LISTING_TYPE_JOBS = "jobs";

interface ResumeSectionListingsProp {
  listing_type: string;
}

function ResumeSectionListings({ listing_type }: ResumeSectionListingsProp) {
  
  
  //Figure out how to throw an error here
  if (listing_type === null) {
    console.log("NULL?????");
    return null;
  } else if (listing_type === "Education") {
    return <ResumeListingsEducation />;
  } else if (listing_type === "Jobs") {
    return <Jobs />;
  } else {
    console.error("ERROR: ResumeSectionListings input parameter is not a valid option");
    return null;
  }
  
}

export default ResumeSectionListings;
