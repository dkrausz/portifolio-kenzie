import WhastAppLogo from "../../assets/whatsapp-icon.png"
import LinkedinLogo from "../../assets/linkedin-icon.png"
import GitHubLogo from "../../assets/github-icon.png"
import {user} from "../../data/user.js"

const Footer = () => {
  return (
    <footer>
      <h2>Contato</h2>
      <div>
        <img src={WhastAppLogo} alt="WhatsApp" />
        <img src={LinkedinLogo} alt="Linkedin" />
        <img src={GitHubLogo} alt="GitHub" />
      </div>
      <p>Todos os direitos reservados - {user}</p>
    </footer>
  );
};

export default Footer;
