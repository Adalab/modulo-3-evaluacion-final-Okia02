import "../styles/App.scss";
import { useEffect, useState } from "react";
import getWizardData from "../services/getWizardData";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import ls from "../services/ls";
import { Route, Switch } from "react-router-dom";

function App() {
  //VARIABLES
  const [wizards, setWizards] = useState(ls.get("wizards", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterHouse, setFilterHouse] = useState(
    ls.get("filterHouse", "Gryffindor")
  );
  const [filterAncestry, setFilterAncestry] = useState(ls.get('filterAncestry', ''));

  //SERVICES

  useEffect(() => {
    if (wizards.length === 0) {
      getWizardData().then((data) => {
        setWizards(data);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("wizards", wizards);
    ls.set("filterName", filterName);
    ls.set("filterHouse", filterHouse);
    ls.set("filterAncestry", filterAncestry);
  }, [wizards, filterName, filterHouse, filterAncestry]);

  //HANDLE
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "house") {
      setFilterHouse(data.value);
    } else if (data.key === "ancestry") {
      setFilterAncestry(data.value);
    }
  };


  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  //FILTERS
  const filteredWizards = wizards
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((wizard) => {
      return wizard.name
        .toLocaleLowerCase()
        .includes(filterName.toLocaleLowerCase());
    })
    .filter((wizard) => wizard.house === filterHouse)
    .filter((wizard) => {if (filterAncestry === '') {
      return true;
    } else {
      return wizard.ancestry === filterAncestry;
    }})

  const renderDetail = (props) => {
    const routeId = props.match.params.wizardId;
    const foundCharacter = wizards.find((wizard) => wizard.id === routeId);
    return <CharacterDetail wizard={foundCharacter} />;
  };

  const searchResults = () => {
    if (filterName !== "" && filteredWizards.length === 0) {
      return <p>No hay coincidencias para {filterName}</p>;
    } else {
      return <CharacterList wizards={filteredWizards} />;
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Bienvenida a Hogwarts</h1>
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Filters
              handleSubmit={handleSubmit}
              handleFilter={handleFilter}
              filterName={filterName}
              filterHouse={filterHouse}
              filterAncestry={filterAncestry}
            />
            {searchResults()}
          </Route>
          <Route path="/character/:wizardId" render={renderDetail} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
