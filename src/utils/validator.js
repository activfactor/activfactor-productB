export const isObjectEmpty = (object) => typeof(object)==='undefined' || !Object.keys(object).length;

export const isAmountCorrect = (value) => {
    const numberReg = /^[+-]?\d+(\.\d+)?$/;
    if (value.match(numberReg)){
        return true;
    }
    return false;
}

// export const isFloat = (value) => {
//     const baseValidation = "1234567890.";
//     return baseValidation.includes(value[value.length-1]) || value==="";
// }

export const isEmail = (email) => {
    return regEx.email.test(email);
}

export const isFloat = (float) => {
    return regEx.float.test(float)
}

export const isNumber = (number) => {
    return regEx.number.test(number);
}

export const isPassword = (value) => {
    if (!value || !regEx.password.test(value)){
        return "Password must contain at least 10 characters, including upper/lowercase and numbers"
      }
      else if (value && value.length>=10){
        return undefined
      }
      return "Password must contain at least 10 characters";
}

export const regEx = {
    float: /^(\d+(\.\d+)?)$/,
    text: /^[A-Za-z0-9\s]*$/,
    number: /^(\d+)$/,
    note: /(\w+)$/,
    email: /^[A-Za-z0-9]+?([A-Za-z0-9_\-.]+)[A-Za-z0-9-_]+[@]+[A-Za-z0-9]+?([A-Za-z0-9.]+)[.]([a-z]+)$/,
    password: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])([a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+)$/
}