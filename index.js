const express = require('express');
const auth = require('./auth/login_auth');

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({'sucess':false});
});

app.use('/api/v1',auth);

app.listen(9000,()=>console.log('http://localhost:8000'));