import React, {useState} from "react";
import {
  ContentWrapper,
  HText,
  PText,
  PTextWrapper,
  FreeText,
  ButtonWrapper
} from "../style";
import {
  PasswordField,
  Input,
  Link,
  Button,
  Select
} from "components/MaterialUIs";
import SignupImage from "assets/Images/signup.png";
import PropTypes from "prop-types";
import { AuthScreen } from "components/Layout";
import { SUPPORTED_COINTRIES, INITIAL_COUNTRY } from 'config/appConfig';

const Signup = () => {
  const [country, setCountry] = useState(INITIAL_COUNTRY);
  const onChangeHandler = (e) => {
    setCountry(e.target.value);
  }
  return (
    <AuthScreen imageSrc={SignupImage}>
      <ContentWrapper>
        <HText component="h1">Sign up for <FreeText component="span">Free</FreeText></HText>
        <Input
          id="login-email"
          errorId="login-email-error"
          label="Email Address"
          fullWidth={true}
          error={false}
        />
        <PasswordField
          id="login-password"
          errorId="login-password-error"
          label="Password"
          fullWidth={true}
        />
        <Select onChange={onChangeHandler} label="Select your country" id="signup-select" errorId="signup-select-error" options={SUPPORTED_COINTRIES} value={country} error={false} theme="primary"/>
        <ButtonWrapper>
        <Button label="Sign up" fullWidth={true} />
        </ButtonWrapper>
        <PTextWrapper>
          <PText component="p">
            Already have an account <Link label="Login" to="/login" />
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

export default Signup;
