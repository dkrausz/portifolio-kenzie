import BannerImg from "../../assets/banner-img.png";
import { username } from "../../data/user.js";
import style from "./style.module.css";

const Banner = () => {
  return (
    <div className={style.banner__container}>
      <div className={style.banner__contains}>
        <div>
          <h2 className={style.banner__user}>{username}</h2>
          <h1 className={style.banner__title}>Bem vindo ao meu porifólio</h1>
        </div>
        <p>Nove pessoas não podem fazer um bebê em um mês.</p>
        <button>Saiba mais</button>
      </div>
      <img src={BannerImg} alt="" />
    </div>
  );
};

export default Banner;
