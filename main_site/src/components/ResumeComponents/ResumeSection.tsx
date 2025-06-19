import ResumeSectionHeader from "./ResumeSectionHeader";
import ResumeSectionListings from "./ResumeSectionListings";

interface ResumeSectionProp{
    section_label : string;
}


function ResumeSection({section_label}: ResumeSectionProp){
    return(
        <>  
            <div className="pt-2">
                <ResumeSectionHeader section_name={section_label}/>
                <ResumeSectionListings listing_type={section_label}/>
            </div>

        </>
    );
}

export default ResumeSection;