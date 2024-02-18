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
    } catch (error) {
        console.error(error);
    }
}

userNames();