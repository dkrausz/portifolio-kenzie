import bannerImg from "../../assets/portfolio.png";
import style from "./style.module.css";

const Header = ()=>{
return (
<header className={style.header__container}>
    <img src={bannerImg} alt="Portifolio" />
    <nav>
        <ul className={style.header__list} >
            <li>Sobre</li>
            <li>Stack</li>
            <li>Projetos</li>
        </ul>

    </nav>
    <button >Contato</button>
</header>
);
};

export default Header;