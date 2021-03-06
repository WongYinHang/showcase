import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";
//app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: '1071614',
    key: '0b51f434e660bbfd7fab',
    secret: 'da160abfcb3ca6fbb342',
    cluster: 'ap1',
    encrypted: true,
});


//middleware
app.use(express.json());
app.use(cors());

//db config
const connection_url = "mongodb+srv://admin:jLOohZgVlhQEKmfl@cluster0.efubf.mongodb.net/chatappdb?retryWrites=true&w=majority";



mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.once('open',()=>{
    console.log("DB connected");

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on('change',(change)=>{
        console.log("A change occured", change);

        if(change.operationType === 'insert'){
            const messageDetail = change.fullDocument;
            pusher.trigger('messages', 'inserted',
                {
                    id: messageDetail._id,
                    name: messageDetail.name,
                    message: messageDetail.message,
                    timestamp: messageDetail.timestamp,
                    received: messageDetail.received,
                }
            );
        }else{
            console.log("Error triggering Pusher")
        }
    });
});
// api routes
app.get('/', (req, res) => res.status(200).send('hello world'));

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body
    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.listen(port, () => console.log(`Listening on localhost:${port}`));

