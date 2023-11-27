const TechnologiesList = ({ tec }) => {
  return (
    <ul>
       <h2>Tecnologias</h2>
      {tec.map((tecHnologie, index) => {
        return (
          <li key={index}>
           
            <div>
              <img src={tecHnologie.img} alt="" />
              <h3>{tecHnologie.name}</h3>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TechnologiesList;
