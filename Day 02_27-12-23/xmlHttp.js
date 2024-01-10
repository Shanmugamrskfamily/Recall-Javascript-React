const prog = new XMLHttpRequest();
const method = "GET";
const url = "https://restcountries.com/v3.1/all";
const result = document.getElementById('root');
prog.open(method, url, true);

prog.onload = () => {
  try {
    if (prog.status === 200) {
      const obj = JSON.parse(prog.response);
      let htmlResult = '';
      let populasCountries = [];
      let maxPopulationCountry = null;

      for (let i = 0; i < obj.length; i++) {
        const countryName = obj[i].name.official;
        const populationHigh=obj[i].population;
        if (obj[i].population > 10000000) {
          populasCountries.push(countryName);
        }
        
        if (!maxPopulationCountry || obj[i].population > maxPopulationCountry.population) {
          maxPopulationCountry = obj[i];
        }
        const poulationHasHight= populationHigh>=10000000;
        const isSpecialCountry = countryName === 'Republic of India' || countryName === 'Islamic Republic of Pakistan';
        htmlResult += `
        <div style="border: 1px solid #ddd; padding: 10px; margin: 10px; width: 300px; background: ${isSpecialCountry ? 'yellow' : 'gray'}; color: ${isSpecialCountry ? 'red' : 'black'};">
          <b>Country Name:</b> ${countryName}</br>
          <b>Region:</b> ${obj[i].region}</br>
          <b>Sub-Region:</b> ${obj[i].subregion}</br>
          <span style="background: ${poulationHasHight ? 'red' : 'gray'}; color: ${poulationHasHight ? 'white' : 'black'};"><b>Population:</b> ${obj[i].population}</span></br>
          <b>Flag:</b><br>
          <div style="text-align: center;">
            <img src="${obj[i].flags.png}" alt="Flag" style="width: 200px; height: 100px; object-fit: contain;">
          </div>
        </div>`;
      }
      
      let populationResult = `<div><b>Population Greater than 1 Crore(1,00,00,000):</b> ${populasCountries.join(', ')}</div>`;

      if (maxPopulationCountry) {
        populationResult += `<div style="background: yellow; padding: 5px; margin-top: 10px;"><b>Most Populous Country:</b> ${maxPopulationCountry.name.official} (Population: ${maxPopulationCountry.population})</div>`;
      }

      result.innerHTML = `<h1 style="text-decoration: underline; text-align: center;">All Country Details</h1>
      ${populationResult}<div style="display: flex; flex-wrap: wrap; justify-content: space-around;">${htmlResult}</div>`;
    } else {
      throw new Error(`Request failed with status: ${prog.status}`);
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

prog.send();
