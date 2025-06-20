const fs = require('fs');
const path = require('path');

// fs.readFile('./files/starter.txt' ,'utf8',(err,data)=>{
  fs.readFile(path.join(__dirname,'starter.txt') ,'utf8',(err,data)=>{
  if(err) throw err;
  // console.log(data.toString());
    console.log(data);

})

console.log("hello...");

// fs.readFile('./files/starter.txt' ,'utf8',(err,data)=>{
  fs.writeFile(path.join(__dirname,'reply.txt'),'Nice to meet you.' ,(err)=>{
  if(err) throw err;
  // console.log(data.toString());
    console.log('Write Complete');

})

 fs.appendFile(path.join(__dirname,'test.txt'),'Testing text.' ,(err)=>{
  if(err) throw err;
  // console.log(data.toString());
    console.log('Append Complete');

})


//  fs.writeFile(path.join(__dirname,'data.txt'),'Nice to meet you.' ,(err)=>{
//   if(err) throw err;
//     console.log('Write Complete');

//     fs.appendFile(path.join(__dirname,'data.txt'),'\n\nYes it is.' ,(err)=>{
//     if(err) throw err;
//     console.log('Append Complete');
    
//     fs.rename(path.join(__dirname,'data.txt'),path.join(__dirname,'newdata.txt') ,(err)=>{
//     if(err) throw err;
//     console.log('Rename Complete');
//     })
// })

// })

 

//exit on uncaught errors
process.on('uncaughtException',err => {
  console.error(`There was an uncaught error:${err}`);
  process.exit(1);

})


