import Suscripcion from '../models/suscripcion'

const suscripcionCtrl = {};

suscripcionCtrl.getPrueba = (req,res)=>{
    res.send('Hola')
}

suscripcionCtrl.nuevaSuscripcion = async (req, res) =>{
    console.log(req.body)
    //res.send('prueba de POST 2')
    try{
        //validar

        const suscripcionNueva = new Suscripcion({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            localidad: req.body.localidad,
            direccion: req.body.direccion,
            email: req.body.email,
            telefono: req.body.telefono,
            postal: req.body.postal,
        })

        await suscripcionNueva.save();

        res.status(201).json({
            mensaje: "Suscripcion agregada correctamente"
        })

    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "Error al agregar la nueva suscripcion"
        })
    }
}

export default suscripcionCtrl;