import ProjectCard from "./ProjectsCard";

function ProjectsCardGrid() {
  return (
    <>
      <ProjectCard />
      <div className="container text-center">
        <div className="row row-cols-3">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </>
  );
}

export default ProjectsCardGrid;
