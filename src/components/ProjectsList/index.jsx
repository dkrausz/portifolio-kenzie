import gitImg from "../../assets/git-icon.png";

const ProjectsList = ({ props }) => {
  return (
    <div>
      <h2>Projetos</h2>
      <div>
        <ul>
          {props.map((project, index) => {
            return (
              <li key={index}>
                <h3>{project.name}</h3>
                <img src={gitImg} alt="github logo" />
                <p>{project.description}</p>
                <a href="#">Saiba mais</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsList;
