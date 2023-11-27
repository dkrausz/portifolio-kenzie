import BannerImg from "../../assets/banner-img.png"
import {username} from "../../data/user.js"

const Banner = () => {
  return (
    <div>
      <h2>{username}</h2>
      <h1>Bem vindo ao meu porifólio</h1>
      <p>Nove pessoas não podem fazer um bebê em um mês.</p>
      <img src={BannerImg} alt="" />
      <button>Saiba mais</button>
    </div>
  );
};

export default Banner;