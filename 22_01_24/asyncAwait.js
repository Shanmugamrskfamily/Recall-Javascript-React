// async function statusCheck() {
//     try {
//       console.log('Program Started');
//       console.log(`Getting Data from API...`);
  
//       await new Promise((resolve, reject) => {
//         setTimeout(async () => {
//           try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//             if (!response.ok) {
//               throw new Error(`HTTP Error! on Status: ${response.status} - ${response.statusText}`);
//             }
//             const data = await response.json();
//             console.log(`The Response From Server: ${JSON.stringify(data)}`);
//             resolve(); 
//           } catch (error) {
//             reject(error);
//           }
//         }, 2000);
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   statusCheck().then(() => console.log('Program Done')).catch((err) => console.error(err));  


// const api='https://jsonplaceholder.typicode.com/todos/1';
// const timeDuration=2000;
// async function fetchTimeout(url,timeout){
// const controller=new AbortController();
// const timeoutId=setTimeout(()=>controller.abort(),timeout);
// try {
//     const response=await fetch(url,{signal:controller.signal});
//     if(!response.ok){
//         throw new Error(`HTTP Request Problem, The Status: ${response.status}`);
//     }
//     const data= await response.json();
//     console.log(`Data Fetched Successfully!`);
//     return data;
// } catch (error) {
//     if(error.name==='AbortError'){
//         console.log(`Request Timeout!`);
//     }
//     else{
//         console.log(`Error On Fetching Data! Status: ${error}`);
//     }
// }
// finally{
//     clearTimeout(timeoutId);
// }
// }
// fetchTimeout(api,timeDuration).then((d)=>console.log(`Data Received From Server: ${JSON.stringify(d)}`)).catch((e)=>console.log(`The Error on Process: ${e}`));


