import ResumeSectionHeader from "./ResumeSectionHeader.tsx";
import ResumeSectionListings from "./ResumeSectionListings.tsx";

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