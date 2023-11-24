import bannerImg from "../../assets/portfolio.png"

const Header = ()=>{
return (
<header>
    <img src={bannerImg} alt="Portifolio" />
    <nav>
        <ul>
            <li>Sobre</li>
            <li>Stack</li>
            <li>Projetos</li>
        </ul>

        <button>Contato</button>
    </nav>
</header>
);
};

export default Header;