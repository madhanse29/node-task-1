const fs = require("fs"); //inbuild package - file system



  const quote =  "12.07pm"

fs.writeFile("./new/04-01-2022.txt",quote,err =>{
    console.log("completed")
})