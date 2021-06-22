import jwt from 'jsonwebtoken';
import CONFIG from './config';

module.exports = function(req,res,next){
    //CAMBIAR RUTAS UNA VEZ TERMINADA LA PAGINA
    if(req.path != '/api/login' && req.path != '/api/login/'){
        if(req.headers.authorization){
            console.log("Se recibe token?");
            let token = req.headers.authorization.split(' ')[1]
            console.log(token);
            jwt.verify(token,CONFIG.SECRET_TOKEN, function(error, decoded){
                if(error) return res.status(403).send({mensaje: 'No tiene los permisos para acceder',error});
                console.log("llego aqui?");
                if(req.method != 'GET'){
                    console.log("verifico que sea admin");
                    if(decoded.role == 'admin') next();
                    else res.status(403).send({mensaje: 'No tiene los permisos para acceder',error});
                }else{
                    next();
                }
            })
        }else res.status(403).send({mensaje: 'No tiene los permisos para acceder.'})
    }else next();
}