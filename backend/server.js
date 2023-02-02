import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Videos from './dbModel.js'

//app config
const app = express();
const port = 3003;

//middleware
app.use(express.json())
app.use(cors({
    origin: '*'
}));

//DB config

const connection_url = "mongodb+srv://admin:P123456789@cluster0.ahdju3b.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
   // useCreateIndex: true,
}).then(con =>{
    console.log(`Mongodb database connected to ${port}`)
});

//API endpoints
app.get('/', (req,res)=>res.status(200).send("Hello world"));

app.get('/v1/posts', (req,res)=>{
    Videos.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})

app.post('/v2/posts', (req,res) => {
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data)=>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
});

//Listener 
app.listen(port, ()=> console.log(`listening on localhost:${port}`));