import React, {useCallback, useState, useMemo} from "react";
import {
  ContentWrapper,
  CheckboxWrapper,
  HText,
  PText,
  PTextWrapper,
  ButtonWrapper,
  useStyles,
  NotificationWrapper
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
import { useDispatch, useSelector } from 'react-redux';
import { signin } from 'store/actions/auth.actions';
import ForceNavigation from 'components/hoc/ForceNavigation';

const Login = ({handleSubmit, reset}) => {
  const { formContainer } = useStyles();
  const [formError, setFormError] = useState();
  const {SIGN_IN} = useSelector(state => state.api)
  const dispatch = useDispatch();

  const {isLoading, error} = useMemo(() => {
    if (SIGN_IN){
        return SIGN_IN
    }
    return {isLoading: false, error: null}
}, [SIGN_IN]);

  const onSubmitHandler = useCallback((values) => {
    const {email, password} = values;
    if (email === 'fouad@wealthface.com' && password === 'Wealthface1505'){
      dispatch(signin());
    } else {
      setFormError("Invalid Credentials")
    }
    
  }, [dispatch]);

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
      {(formError || error) && <NotificationWrapper><Alert message={formError || error} title="Error" severity="error"/></NotificationWrapper>}
      <ContentWrapper>
        <HText component="h1">Login</HText>
        <form className={formContainer} onSubmit={handleSubmit(onSubmitHandler)}>
          <Field component={renderField} name="email" label="Email address" />
          <Field component={renderField} name="password" label="Password" />
        <CheckboxWrapper>
          <Checkbox label="Remember me" />
          <Link label="Forget password?" to="/reset" />
        </CheckboxWrapper>
        <ButtonWrapper>
        <Button label="Login" fullWidth={true} type="submit" isLoading={isLoading} />
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

export default ForceNavigation(reduxForm({
  form: 'login',
  validate: LoginValidator
})(Login));
