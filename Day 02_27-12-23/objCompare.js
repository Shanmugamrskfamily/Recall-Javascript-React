let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

const compare = () => {
  // Check if the number of keys is the same
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // Check if all keys and values match
  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

const resultElement = document.getElementById('root');
resultElement.innerHTML = `<p><b>Object 1:</b> ${JSON.stringify(obj1)}<br>
<b>Object 2:</b> ${JSON.stringify(obj2)}</p><br>
<h2>Result: <b>${compare()}</b></h2>
`;