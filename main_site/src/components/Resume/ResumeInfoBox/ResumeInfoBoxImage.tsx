

interface InfoBoxImageProp {
  ImageSrc: string;
}

function ResumeInfoBoxImage({ ImageSrc}: InfoBoxImageProp){


    return (
    <>
        <div className="m-3">
          <img
            src={ImageSrc}
            alt="Company Logo"
            className="img-fluid"
            style={{ maxWidth: "100px" }}
          />
        </div>
    </>
  );
}

export default ResumeInfoBoxImage;