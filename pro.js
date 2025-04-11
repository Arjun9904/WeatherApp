function savetoDb(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random()*10) + 1;
        if(internetSpeed > 4){
            resolve("success : data was saved");
        }else{
            reject("failure :weak connection");
        }
    
    });
}

savetoDb("apna college")
    .then( (result) =>{
     console.log("data saved");
     console.log("result of promise:",result);
     return savetoDb("helloworld");
    })
    .then( (result) =>{
        console.log("data saved");
        console.log("result of promise:",result);
        return savetoDb("helloworld");
       })
    .then( (result) =>{
        console.log("data saved");
        console.log("result of promise:",result);
        return savetoDb("helloworld");
       })  
    .catch( (error) =>{
        console.log("data saved");
        console.log("error of promise:",error);
        return savetoDb("helloworld");
       })
           