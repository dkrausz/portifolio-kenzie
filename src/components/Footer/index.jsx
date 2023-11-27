import WhastAppLogo from "../../assets/whatsapp-icon.png";
import LinkedinLogo from "../../assets/linkedin-icon.png";
import GitHubLogo from "../../assets/github-icon.png";
import { user } from "../../data/user.js";
import style from "./style.module.css";

const Footer = () => {
  return (
    <footer className={style.footer__container}>
      <div className={style.footer__contact}>
        <h2 className={style.footer__title}>Contato</h2>
        <div className={style.footer__social}>
          <img src={WhastAppLogo} alt="WhatsApp" />
          <img src={LinkedinLogo} alt="Linkedin" />
          <img src={GitHubLogo} alt="GitHub" />
        </div>
      </div>
      <p>Todos os direitos reservados - {user}</p>
    </footer>
  );
};

export default Footer;
