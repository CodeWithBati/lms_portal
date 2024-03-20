import { app } from "./app";
require("dotenv").config()


//Creating Server
app.listen(process.env.PORT, () =>{
    console.log(`Server is connected on ${process.env.PORT}`)
})