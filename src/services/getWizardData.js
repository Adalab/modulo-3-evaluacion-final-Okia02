const getWizardData = () => {
  return fetch('https://hp-api.herokuapp.com/api/characters/')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return data.map(wizard => {      
      return {
        image: wizard.image,
        name: wizard.name,
        species: wizard.species,
        otherName: wizard.alternate_names,
        status: wizard.alive,
        //alive devuelve true o false
        gender: wizard.gender,
        house: wizard.house
      };
    });
  });
};

export default getWizardData;
