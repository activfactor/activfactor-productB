import React, {useCallback, useState} from "react";
import {
  ContentWrapper,
  CheckboxWrapper,
  HText,
  PText,
  PTextWrapper,
  ButtonWrapper,
  useStyles
} from "../style";
import {
  PasswordField,
  Input,
  Link,
  Checkbox,
  Button,
  Alert
} from "components/MaterialUIs";
import LoginImage from "assets/Images/login.png";
import PropTypes from "prop-types";
import { AuthScreen } from "components/Layout";
import { Field, reduxForm } from 'redux-form';
import { LoginValidator } from '../utils/validator';
import { useDispatch } from 'react-redux';
import { signin } from 'store/actions/auth';
import ErrorBoundary from 'components/hoc/ErrorBoundary';

const Login = ({handleSubmit, reset, rootError, rootErrorInfo}) => {
  const { formContainer } = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmitHandler = useCallback((values) => {
    setIsLoading(true);
    try{
      dispatch(signin(values));
      reset();
    } catch(error){
      console.log(error);
    }
    
  }, [reset, dispatch]);

  const renderField = useCallback((props) => {
    const {input,label, meta: {error, touched}} = props;
    const isError = touched && error;
      switch(input.name){
        case 'email':
          return (
            <Input
              id="login-email"
              errorId="login-email-error"
              label={label}
              fullWidth={true}
              error={isError}
              errorMsg={error}
              {...input}
            />
          )
        case 'password':
          return (
            <PasswordField
              id="login-password"
              errorId="login-password-error"
              label={label}
              fullWidth={true}
              error={isError}
              errorMsg={error}
              {...input}
            />
          )
        default:
          break;
      }
  }, []);

  return (
    <AuthScreen imageSrc={LoginImage}>
      {rootError && <Alert message={rootError} title="Error"/>}
      <ContentWrapper>
        <HText component="h1">Login</HText>
        <form className={formContainer} onSubmit={handleSubmit(onSubmitHandler)}>
          <Field component={renderField} name="email" label="Email address" />
          <Field component={renderField} name="password" label="Password" />
        <CheckboxWrapper>
          <Checkbox label="Remember me" checked={false} />
          <Link label="Forget password?" to="/reset" />
        </CheckboxWrapper>
        <ButtonWrapper>
        <Button label="Login" fullWidth={true} type="submit" isLoading={isLoading}/>
        </ButtonWrapper>
        </form>
        <PTextWrapper>
          <PText component="p">
            Don't have an account? <Link label="Signup" to="/signup" />
          </PText>
        </PTextWrapper>
      </ContentWrapper>
    </AuthScreen>
  );
};

AuthScreen.propTypers = {
  imageSrc: PropTypes.any.isRequired,
  children: PropTypes.node,
};

export default ErrorBoundary(reduxForm({
  form: 'login',
  validate: LoginValidator
})(Login));
