const person={name:"SHANMUGAM",age:27,address:"Chennai", isStudent:true};
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
console.log(`Address: ${person.address}`);
console.log(`Is Student: ${person.isStudent}`);
const personData=document.getElementById("root");
personData.innerHTML=`<div style="text-align: center">
<h1>Person Details</h1></br>
<p><b>Name:</b> ${person.name}</br>
<b>Age:</b> ${person.age}</br>
<b>Is Student:</b> ${person.isStudent}</br>
<b>Address:</b> ${person.address}</p>
</div>`