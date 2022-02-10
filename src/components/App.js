import "../styles/App.scss";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getWizardData from "../services/getWizardData";
import ls from "../services/ls";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Footer from "./Footer";
function App() {
  const [wizards, setWizards] = useState(ls.get("wizards", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterHouse, setFilterHouse] = useState(
    ls.get("filterHouse", "Gryffindor")
  );
  const [filterAncestry, setFilterAncestry] = useState(
    ls.get("filterAncestry", "")
  );
  const [filterStudent, setFilterStudent] = useState(
    ls.get("filterStudent", false)
  );

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
    ls.set("filterStudent", filterStudent);
  }, [wizards, filterName, filterHouse, filterAncestry, filterStudent]);
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "house") {
      setFilterHouse(data.value);
    } else if (data.key === "ancestry") {
      setFilterAncestry(data.value);
    } else if (data.key === "student") {
      setFilterStudent(data.value);
    }
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const filteredWizards = wizards
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((wizard) => {
      return wizard.name
        .toLocaleLowerCase()
        .includes(filterName.toLocaleLowerCase());
    })
    .filter((wizard) => wizard.house === filterHouse)
    .filter((wizard) => {
      if (filterAncestry === "") {
        return true;
      } else {
        return wizard.ancestry === filterAncestry;
      }
    })
    .filter((wizard) => wizard.student? filterStudent : wizards);



  const renderDetail = (props) => {
    const routeId = props.match.params.wizardId;
    const foundCharacter = wizards.find((wizard) => wizard.id === routeId);
    return <CharacterDetail wizard={foundCharacter} />;
  };
  const searchResults = () => {
    if (filterName !== "" && filteredWizards.length === 0) {
      return <p className="error-message">No conocemos a {filterName} 😅</p>;
    } else {
      return <CharacterList wizards={filteredWizards} />;
    }
  };
  const resetInputs = () => {
    setFilterName("");
    setFilterHouse("Gryffindor");
    setFilterAncestry("");
  };
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Switch>
          <Route path="/" exact>
            <Filters
              handleSubmit={handleSubmit}
              handleFilter={handleFilter}
              filterName={filterName}
              filterHouse={filterHouse}
              filterAncestry={filterAncestry}
              filterStudent={filterStudent}
              resetInputs={resetInputs}
            />
            {searchResults()}
          </Route>
          <Route path="/character/:wizardId" render={renderDetail} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
export default App;
