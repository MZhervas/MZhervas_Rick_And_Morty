const validation = (userData) => {

    const errors = {};

    if (!/\S+@\S+\.\S+/.test(userData.email) || (!userData.email)) {
        errors.email = 'El email ingresado no es válido, intente nuevamente';
    }
    if (userData.email.length > 35){
        errors.email = 'El email no debe superar los 35 caracteres';
    }
    if(!userData.email){ 
        errors.email = 'Debe ingresar un email';
    }

    if (!/\d+/.test(userData.password)) {
        errors.password = 'La contraseña debe contener al menos un número ';
    }
    if (userData.password.length > 10 || userData.password.length < 6) {
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres ';
    }

    return errors;
}

export default validation;