const url = `https://jsonplaceholder.typicode.com/users`;

const fetchFromServer = async () => {
    try {
        const data = await fetch(url); 
        const response = await data.json();
        return response; 
    } catch (error) {
        console.error(error);
        return null; 
    }
}

const userNames=async()=>{
    try {
        const data=await fetchFromServer();
        if(data){

            for(let i=0;i<data.length;i++){
                console.log(`ID: ${data[i].id}`);
                console.log(`Name: ${data[i].name}`);
                console.log(`Email: ${data[i].email}\n--------------------------------------------`);
            }
        }
        else{
            console.log(`Nodata Found: ${data}`);
            return;
        }

        const userDataContainer = document.getElementById('userData');

        data.forEach(user=>{
            const row=document.createElement(`tr`);
            row.innerHTML=`<td>${user.id}</td><td>${user.name}</td><td>${user.email}</td>`;
            userDataContainer.appendChild(row);
        });


    } catch (error) {
        console.error(error);
    }
}

userNames();