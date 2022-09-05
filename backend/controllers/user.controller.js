import User from '../models/User.js'
import {validar_body} from '../library/data_validator.js';

const create = async (req, res)=>{
    const {name, email}= req.body;
   
    //verifica si existe errores de usuario
    const dataError = validar_body(name, email);
    if(dataError.length!=0){
        //si existe errores de usuario 
        return res.status(400).json({
            error: dataError,
            message: 'Ingrese todos los campos del formulario'
        })
    }
    //los datos son correctos
    //pasa los datos al modelo de la tabla de mongodb
    const user = new User({
        name,
        email: email.toLowerCase()
    })

    //se guarda los datos a mongodb si son correctos
    try {
        await user.save()
        return res.status(200).json({
            error:{
                id:'',
                message:''
            },
            message: 'Se guardo correctamente!'
        })
    } catch (error) {
        console.log('Error al guardar db')
        return res.status(500).json({
            error:{
                id:'',
                message: ''
            },
            message: 'Asegurese que los datos pertenescan a usted.'
        })
    }
  
}
const getUsers = async (req, res)=>{
    const result= await User.find()
    return res.status(200).json({result})
}

const update = async (req, res)=>{
  
    const {name, email}=req.body;
    const {id} = req.params;
    const dataError = validar_body(name, email);
    if(dataError.length !=0){
        //si existe errores de usuario 
        return res.status(400).json({
            error: dataError,
            message: 'Ingrese todos los campos del formulario'
        })
    }

    try {

        await User.findByIdAndUpdate(id, { name,email })

        return res.status(200).json({
            error: null,
            message: 'actualizado los datos'
        })
        
    } catch (error) {
        
        return res.status(404).json({
            error: 'No se encontro usuario',
            mensage: null
        })
    }

  
}
const delete_ =  async(req,res)=>{
    const {id}=req.params;
    try {
        await User.findByIdAndRemove(id);
        return res.json({
            message: 'se elimnio'
        })
    } catch (error) {
        return res.json({
            error: "Error el eliminar",
            message: 'error al eliminar'
        })
        
    }
   
  
   
}
export {
    create,
    getUsers,
    update,
    delete_
}