const number1=42;
const str1=String(number1);
console.log(`Convert Number->String`);
console.log(`Type of Data: ${typeof(str1)}
Value: ${str1}`);

const str2="325";
const number2=Number(str2);
console.log(`\nConvert String->Number`);
console.log(`Type of Data: ${typeof(number2)}
Value: ${number2}`);

const bool=true;
const str3=String(bool);
console.log(`\nConvert Boolean->String`);
console.log(`Type of Data: ${typeof(str3)}
Value: ${str3}`);

const number3=Number(bool);
console.log(`\nConvert Boolean->Number`);
console.log(`Type of Data: ${typeof(number3)}
Value: ${number3}`);

const person = {
    name: "SHANMUGAM",
    age: 27,
    city: "Chennai"
  };
  let jsonString = JSON.stringify(person);
  console.log(`\n\nConvert Object-> String`)
  console.log(`Person Data: ${person}
Type of Person: ${typeof(person)}
Converted Data: ${jsonString}
Type of Data: ${typeof(jsonString)}`);

const object1=JSON.parse(jsonString);
console.log(`\n\nString to Object Conversion`);
console.log(`Before Conversion Data: ${jsonString}
Type of Data: ${typeof(jsonString)}
Data after Conversion: ${object1}
Type of Data: ${typeof(object1)}`);

const product={
    name:"Redmi 12 Pro",
    price:"18999"
}
const convertedData=Number(product.price);
console.log(`\n\nObject to Number Conversion
Before Conversion Data: ${product.price}
Type of Data: ${typeof(product.price)}
Data after Conversion: ${convertedData}
Type of Data: ${typeof(convertedData)}`);

