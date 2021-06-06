const express = require('express');
const app = express();
const bcryptjs = require('bcryptjs');


app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.post('/login', async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    if(email == 'admin@admin.com' && password == '12345'){
        let passwordHash = await bcryptjs.hash(password,8);
        res.json({
            message:'Correcto',
            passwordHash: passwordHash
        })
    }
    else{
        res.json({
            message:'Incorrecto'
        })
    }

    
});


app.listen(3000, ()=>{
    console.log("SERVER UP!!")
});