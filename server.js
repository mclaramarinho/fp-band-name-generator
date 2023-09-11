import express from 'express';
import bodyParser from 'body-parser';
import wordsDB from './names.js';


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.get('/', (req, res) => {
    res.render('index.ejs');
})
app.post("/submit", (req, res) => {
    res.render('index.ejs', {bandName: randomName()})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})

function randomName (){
    let name = "";
    for(let i = 0; i < 2; i++){
        const random = Math.floor(Math.random() * 1000)

        if(i===0){
            name = wordsDB[random];
        }else{
            name = name + " " + wordsDB[random];
        }
    }
    return name;
}