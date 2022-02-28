const express = require('express');
const res = require('express/lib/response');
const app = express()
const port = 2000
app.listen(port,()=>{
    console.log('listening on port: ', port);
})

app.get('/', function(req,res){
    res.sendFile(`${__dirname}/index.html`);
});
