import gitImg from "../../assets/git-icon.png"

const Projects = ()=>{
    return(
        <div>
            <h2>Projetos</h2>
            <div>
                <h3>Projeto 1</h3>
                <img src={gitImg} alt="github logo" />
                <p>Descrição do projeto</p>
                <a href="#">Saiba mais</a>
            </div>

        </div>

    );

};

export default Projects;