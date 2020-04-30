import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

export const theme = createMuiTheme({
  fonts: {
    bold: `Poppins-Bold, Roboto , Helvetica Neue, Arial`,
    regular: `Poppins-Regular, Roboto, Helvetica Neue, Arial`,
    medium: `Poppins-Medium, Roboto,  Helvetica Neue, Arial`,
    light: `Poppins-Light, Roboto, Helvetica Neue, Arial`,
    semiBold: `Poppins-SemiBold, Roboto, Helvetica Neue, Arial`,
  },
  typography: {
    fontFamily: 'Poppins-Regular, Roboto, Helvetica Neue, Arial',
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600
  },
  palette:{
    primary:{
      light: '#4495EC',
      main: '#0D6BCF',
      dark: '#004085',
      contrastText: '#fff'
    },
    secondary: {
      light: '#60DFC8',
      main: '#28B89E',
      dark: '#08806A'
    },
    text: {
      primary: '#8E8E8E',
      secondary: '#F5F6F8',
      link: '#323C47'
    }
  },
  customShadows:[
    '0px 4px 20px rgba(0, 0, 0, 0.05)'
  ] 
})

const Theme = ({children}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)
export default Theme