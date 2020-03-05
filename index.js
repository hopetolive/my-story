let express=require("express")
require("./mongoose/mongoose")

let app  = express()
app.use(express.json())
let port = process.env.PORT||8080

app.post("/users",(req,res)=>{

    console.log(req.body)
    res.send("im post routing")

})




app.listen(port,()=>{
    console.log("server is running on the port number " + port)
})

//app.post("")






