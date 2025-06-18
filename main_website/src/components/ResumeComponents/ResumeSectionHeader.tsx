interface ResumeSectionHeaderProp {
  section_name: string;
}
function ResumeSectionHeader({ section_name }: ResumeSectionHeaderProp) {
  return (
    <>
      <section className="bg-light border-start border-4 border-primary p-3 mb-5 ms-2">
        <h2 className="text-primary fw-bold mb-0">{section_name}</h2>
      </section>
    </>
  );
}

export default ResumeSectionHeader;
