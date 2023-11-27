import style from "./style.module.css";

const AboutMe = () => {
  return (
    <div className={style.aboutMe__container}>
      <h2 className={style.aboutMe__title}>Sobre Mim</h2>
      <p className={style.aboutMe__text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        maiores, distinctio a mollitia vero natus saepe doloremque asperiores
        est numquam ullam voluptate blanditiis consequuntur,eius ea velit
        corrupti sed id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        maiores, distinctio a mollitia vero natus saepe doloremque asperiores
        est numquam ullam voluptate blanditiis consequuntur,eius ea velit
        corrupti sed id!
      </p>
    </div>
  );
};

export default AboutMe;
