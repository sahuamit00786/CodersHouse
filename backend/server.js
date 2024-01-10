require('dotenv').config();
const express = require('express')
const router = require('./routes');
const db = require('./database')
const cors = require('cors')
const app = express();
const corsOption = {
    credentials:true,
    origin:['http://localhost:5173'],
}
 
app.use(cors(corsOption))

db()

const PORT = process.env.PORT||3000
app.use(express.json())
app.use(router);

app.get('/',(req,res)=>{
    res.send('hello from express')
})


app.listen(PORT,()=> {
    console.log(`Listening on PORT ${PORT}`)
})