const http = require('http');
const express = require('express')
const app = express();


const check = (req,res,next)=>{
    const startus =true;
    if(startus){
          console.log("Chào sếp")
          next();
    } else {
        console.log("Anh không có quyền truy cập")
    }
}
app.get('/api/products',check,(req,res)=>{
    const procts= [
        {id:1,name:"Prodcuts A"},
        {id:2,name:"Prodcuts B"}
    ];
    res.json(procts);
})
// const server= http.createServer((req,res)=>{
    
//      if(req.url==="/"){
//         res.setHeader('Content-Type','text/html');
//         res.write("<h1>Home page</h1>")
//         res.end()
//      }else if(req.url==='/api/products'){
//           const produts= [
//               {id:1,name:"products A"},
//               {id:2,name:"products B"}
// ,
//           ];
//           res.end(JSON.stringify(produts));
//      }else{
//          console.log('Chịu không biết');
//      }
// });
const PORT = 3001;
server.listen(PORT,()=>{
    console.log("server is running port",PORT);
})