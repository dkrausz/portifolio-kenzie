import gitImg from "../../assets/git-icon.png";
import style from "./style.module.css"

const ProjectsList = ({ props }) => {
  return (
    <div className={style.project__container} >
      <h2 className={style.project__title}>Projetos</h2>
      
        <ul className={style.project__list}>
          {props.map((project, index) => {
            return (
              <li key={index} className={style.project__item}>
                <div className={style.item__contains}>
                <h3 className={style.item__title}>{project.name}</h3>
                <p>{project.description}</p>
                <a href="#">Saiba mais</a>
                </div>
                <img src={gitImg} alt="github logo" />
              </li>
            );
          })}
        </ul>
      
    </div>
  );
};

export default ProjectsList;
