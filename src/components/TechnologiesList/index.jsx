import style from "./style.module.css";

const TechnologiesList = ({ tec }) => {
  return (
    <div className={style.technology__container}>
      <h2 className={style.technology__title}>Tecnologias</h2>
      <ul className={style.technology__list}>
        {tec.map((tecHnologie, index) => {
          return (
            <li key={index} className={style.technology__item}>
              <img src={tecHnologie.img} alt="" />
              <h3>{tecHnologie.name}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechnologiesList;
