import validator from "validator"

export const validar_body = (name, email)=>{
    //reguistrar los errores que comete el usuario al ingresar los datos
    let error=[]

    //validar si los datos ingresadosson correctos
    if(!validator.isEmail(email)){
        error.push({
            id: 'email',
            mensage: 'Email incorrecto'
        })
    }
    if(!validator.isLength(name, 4)){
        error.push({
            id: 'name',
            message: 'Ingrese el nombre correctamente'
        })
    }
    return error;
  
}