const express = require('express')

const app = express()
app.use(myMiddleWare)
app.use(express.json())

function myMiddleWare(req,res,next){
    console.log('inside middleware i created ');
    next()

}

require("./routes/idea.routes")(app)


app.listen(8080,()=>{
    console.log("server started at port 8080");
})

