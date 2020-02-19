import React from 'react'
import { ThemeProvider } from 'styled-components';
import media from './media';

export const theme = {
  fontSizes: {
    min: '12px',
    sm: '14px',
    xsm: '16px',
    md: '18px',
    xmd: '20px',
    lg: '22px',
    xlg: '24px',
    hg: '34px',
    xhg: '36px',
  },
  spacing: {
    min: '12px',
    sm: '16px',
    xsm: '18px',
    md: '20px',
    xmd: '22px',
    lg: '24px',
    xlg: '26px',
    hg: '36px',
    xhg: '40px',
    mass: '50px',
  },
  colors: {
    primary: '#109CF1',
    primaryLight: '#61c3ff',
    danger: '#FF0000',
    secondary: '#858585',
    primaryOpacity: 'rgb(16, 155, 241, 0.1)',
    grayLight: '#EBEFF2',
    grayDark: '#989898',
    grayMedium: '#D7D7D7',
    white: '#fff'
  },
  fonts: {
    bold: `Poppins-Bold, Roboto , Helvetica Neue, Arial`,
    regular: `Poppins-Regular, Roboto, Helvetica Neue, Arial`,
    medium: `Poppins-Medium, Roboto,  Helvetica Neue, Arial`,
    light: `Poppins-Light, Roboto, Helvetica Neue, Arial`,
    semiBold: `Poppins-SemiBold, Roboto, Helvetica Neue, Arial`,
  }
  
}

const Theme = ({children}) => (
  <ThemeProvider theme={{...theme, ...media}}>
    {children}
  </ThemeProvider>
)
export default Theme