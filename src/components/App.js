import "../styles/App.scss";
import { useEffect, useState } from "react";
import getWizardData from "../services/getWizardData";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
//import ls from '../services/ls';
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

  



function App() {

  //VARIABLES
  const [wizards, setWizards] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  //SERVICES
  useEffect(() => {
    getWizardData().then((data) => setWizards(data));
  }, []);

  //HANDLE
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "house") {
      setFilterHouse(data.value);
    }
  };

  //FILTERS
  const filteredWizards = wizards
    .filter((wizard) => {
      return wizard.name
        .toLocaleLowerCase()
        .includes(filterName.toLocaleLowerCase());
    })
    .filter((wizard) => wizard.house === filterHouse);


  const renderDetail = (props) => {
    const routeId = props.match.params.wizardId;
    const foundCharacter = wizards.find((wizard) => wizard.id === routeId)
    return <CharacterDetail wizard={foundCharacter} />
  }
  return (
    <div className="app">
      <header>
        <h1>Bienvenida a Hogwarts</h1>
      </header>
      <main>
        <Switch>
        <Route path="/" exact>
        <Filters
          handleFilter={handleFilter}
          filterName={filterName}
          filterHouse={filterHouse}
        />
        <CharacterList wizards={filteredWizards} />
        </Route>
        <Route path="/character/:wizardId" render={renderDetail} />
        <CharacterDetail/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
