import Header from "../Header"
import Footer from "../Footer"
import Banner from "../Banner"
import AboutMe from "../AboutMe"
import ProjectsList from "../ProjectsList";
import { projects } from "../../data/projects";
import { technologies } from "../../data/technologies";
import TechnologiesList from "../TechnologiesList";


const Portifolio = () => {
 
  return (
    <>
    <main>
      <Header />
      <Banner />
      <AboutMe />
      <TechnologiesList tec={technologies}/>
      <ProjectsList props={projects} />
      <Footer />
    </main>
    </>
  );
};

export default Portifolio;