const closure=()=>{
    let dataOut='Hai';
    const inner=()=>{
        let dataIn='Hello';
        console.log('Inner Function')
        console.log(`Inner Data: ${dataIn}`);
        console.log(`Outer Data: ${dataOut}`);
    }
    inner();
}

closure();