const getWizardData = () => {
  return fetch("https://hp-api.herokuapp.com/api/characters/")
    .then((response) => response.json())
    .then((data) => {
      return data.map((wizard, index) => {
        return {
          image: wizard.image,
          name: wizard.name,
          species: wizard.species,
          otherName: wizard.alternate_names,
          status: wizard.alive,
          gender: wizard.gender,
          house: wizard.house,
          id: wizard.name.replace(/\s+/g, "-") + index,
          ancestry: wizard.ancestry,
          student: wizard.hogwartsStudent,
        };
      });
    });
};
export default getWizardData;
