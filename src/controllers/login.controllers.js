import Usuario from "../models/suscripcion";
const loginCtrl = {};

loginCtrl.compararUsuario = async (req, res) => {
    try{
        
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'No coinciden las cuentas'
        })
    }
}

export default loginCtrl;