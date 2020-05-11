import { isEmail } from 'utils/validator';
export const LoginValidator = values => {
    const errors = {};
    const {
        email,
        password
    } = values;
    if (!email){
        errors.email = 'Required'
    } else if (!isEmail(email)){
        errors.email = 'Email is invalid'
    }
    if (!password){
        errors.password = 'Required'
    }
    return errors;
}