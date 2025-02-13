let express = require('express');
let app = express();

require('dotenv').config()

app.use((req, res, next) => {
    console.log(req.method +" "+ req.path + " - " + req.ip);
    next();
});

app.get('/:word/echo', (req, res) => {
    res.json({"echo" : req.params.word })
})

app.get('/now',(req, res, next) => {
    req.time = new Date().toString(); 
    next();
}, (req, res) => {
    res.json({"time": req.time});
}
)

app.get('/', (req, res)=> {
    res.sendFile(__dirname + "/views/index.html");
    // res.send('Hello Express');
})

// app.get('/json', (req,res)=> {
//     res.json({"message":"Hello json"});
// })

app.get('/json', (req, res) => {
    if(process.env.MESSAGE_STYLE == 'uppercase') {
        res.json({"message" : "HELLO JSON"})
    } else {
        res.json({"message" : "Hello json"})
    }
})


































 module.exports = app;
