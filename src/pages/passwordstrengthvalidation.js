const passwordStrength= {
    upper : new RegExp('^(?=.*[A-Z])'),
    lower : new RegExp('^(?=.*[a-z])'),
    number : new RegExp('^(?=.*\\d)'),
    character : new RegExp('^(?=.*[_!@#$%&*.~?])'), 
    minlength : new RegExp('^.{8,}'),
    // email : /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    email : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|("."))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}

export default passwordStrength
