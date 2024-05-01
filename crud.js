const fs=require('fs');
const path =require('path');
const dirpath=path.join(__dirname,'crud');
const filePath =`${dirpath}/apple.txt`;
//fs.writeFileSync(filePath,'this is the file which describe about apple');
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })
// fs.appendFile(filePath,"and i go to jim and i am a body builder",(err)=>{
//     if(!err)
//         console.log(" file updated successfully ");
//          else
//         console.log("file updated unsuccesssful ");
        
//     })
fs.unlinkSync(filePath);