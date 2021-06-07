import Suscripcion from "../models/suscripcion";
import bcryptjs from "bcryptjs";
const loginCtrl = {};

loginCtrl.nuevaLogin = (req, res) => {
  console.log(req.body);

  try {
    
    let email= req.body.email;
    let password= req.body.password;



    Suscripcion.findOne({email})
        .then(user => {
            if(!user) return res.status(404).send({mensaje: 'El usuario no existe'});
            
            bcryptjs.compare(password,user.password)
                .then(match => {
                        if(match) return res.status(200).send({mensaje: 'Acceso'});
                        return res.status(201).send({mensaje: 'Password incorrecta'});
                }).catch(error =>{
                    console.log(error);
                    res.status(500).send({error})
                });
        }).catch(error =>{
            console.log(error);
            res.status(500).send({error})
        });

  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo obtener el arreglo de login",
    });
  }
};

export default loginCtrl;
