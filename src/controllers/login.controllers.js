import Suscripcion from "../models/suscripcion";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
import CONFIG from "../config"

const loginCtrl = {};

loginCtrl.nuevaLogin = (req, res) => {

  try {
    let email= req.body.email;
    let password= req.body.password;


    Suscripcion.findOne({email})
        .then(user => {
            if(!user) return res.status(404).send({mensaje: 'El usuario no existe'});
            bcryptjs.compare(password,user.password)
                .then(match => {
                        if(match){
                            const payload = {
                                email: user.email,
                                nombre: user.nombre,
                                token: user.token,
                                role: user.role
                            }
                            //Acceso
                            jwt.sign(payload,CONFIG.SECRET_TOKEN,function(error,token){
                                if(error){
                                    res.status(500).send({error});
                                }else{
                                    if(payload.role == 'admin'){
                                        res.status(200).send({mensaje: 'Acceso administrador', token})
                                    }else{
                                        res.status(201).send({mensaje: 'Acceso usuario', token})
                                    }
                                }
                            })
                        }else{
                            //Acceso denegado
                            res.status(301).send({mensaje: 'Password incorrecta'});
                        } 
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
