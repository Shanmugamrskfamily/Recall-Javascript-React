// const mainFunction=(callback)=>{
// console.log('Task Started');
// setTimeout(()=>{
//     console.log('Task in Progress...');
//     setTimeout(()=>{
//         console.log('Task Completed!'); 
//             callBackfun();
//     },2000);
// },2000);
// }
// const callBackfun=()=>console.log('Callback function Executed!');
// mainFunction(callBackfun);


// const bookTicket = new Promise((resolve, reject) => {
//     let booking = false;
//     setTimeout(()=>{
//         if (booking) {
//             resolve('Booking Success!');
//           } else {
//             reject('Booking Failure!!');
//           }
//     },2000) 
//   });

//   bookTicket
//     .then((d) => {
//       console.log(`${d} Thanks Buddy!`);
//     })
//     .catch((d) => {
//       console.log(`${d} Try Again!`);
//     });  


// const eligibleForVote = new Promise((res, rej) => {
//     let age = 12;
//     console.log('Checking Your Age... Please Wait!');
//     setTimeout(() => {
//       if (age >= 18) {
//         res(`Your Age: ${age}. So, You're Eligible To Vote!`);
//       } else {
//         rej(`Your Age: ${age}. So, You're Not Eligible To Vote!`);
//       }
//     }, 3000);
//   });
  
//   const callBackFun = () => console.log('Promise Successfully Executed!');
  
//   setInterval(() => {
//     eligibleForVote
//       .then((message) => {
//         console.log(message);
//         return new Promise((resolve) => setTimeout(resolve, 1000));
//       })
//       .then(() => callBackFun())
//       .catch((message) => {
//         console.log(message);
//         return new Promise((resolve) => setTimeout(resolve, 1000));
//       })
//       .then(() => callBackFun());
//   }, 5000);
  

// (()=>{console.log(`Function Executed!`)})();


// const getData=(url)=>{
//     return new Promise((resolve, reject) => {
//         console.log(`Getting Data From... ${api}`)
//         setTimeout(()=>{
//             fetch(url).then(res=>{
//                 if (res.ok){
//                     return res.json();
//                 }
//                 else{
//                     reject(`HTTP Error! on Status: ${res.status} and ${res.statusText}`);
//                 }
//             }).then(data=>{
//                 console.log('Data Fetched Successfully!!!');
//                 resolve(data);
//             }).catch((err)=>reject(err));
//         },4000)
        
//     })
// }
// const api='https://jsonplaceholder.typicode.com/todos/1';

// getData(api).then((res)=>console.log(`Responce From API: ${JSON.stringify(res)}`)).catch((rej)=>console.log(`Rejected Due to: ${rej}`));


