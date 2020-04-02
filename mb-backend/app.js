const express = require('express');
const bodyParser = require('body-parser');


const app = express();


//Middleware 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//User Router
var User=require('./router/User');

//User Router Used
app.use('/',User);


//PORT 
const PORT=4500|| process.env.PORT;

app.listen(PORT, ()=>{
  console.log(`listening on port 4500`);
});

