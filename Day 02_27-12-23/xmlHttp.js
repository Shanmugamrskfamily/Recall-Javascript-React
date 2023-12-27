const prog = new XMLHttpRequest();
const method = "GET";
const url = "https://restcountries.com/v3.1/all";

const result=document.getElementById('root');
prog.open(method, url, true);

prog.onload = () => {
  try {
    if (prog.status === 200) {
      const obj = JSON.parse(prog.response);

      let htmlResult = '';

      for (let i = 0; i < obj.length; i++) {
        htmlResult += `<p><b>Country Name:</b> ${obj[i].name.official}<br><b>Flag: </b><br><img src="${obj[i].flags.png}" alt="Flag"/></p><br><br>`;
      }
      console.log(htmlResult);
      result.innerHTML = htmlResult;
    
    } else {
      throw new Error(`Request failed with status: ${prog.status}`);
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

prog.send();
