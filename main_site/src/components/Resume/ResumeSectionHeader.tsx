interface ResumeSectionHeaderProp {
  section_name: string;
}
/**
 * Renders a section header with a Bootstrap-styled container.
 *
 * @param section_name - The name of the section to be displayed as a heading.
 * @returns A styled <section> element containing the section title.
 */
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
