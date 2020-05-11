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
  breakpoints: {
    values: {
        xs: 400,
        sm: 600,
        md: 900,
        lg: 1080,
        xl: 1280, 
    }
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
      light: '#E2E2E2',
      link: '#323C47'
    },
    error: {
      main: '#FF0000',
      light: '#FCDDDD'
    },
    background: {
      default: '#E5E5E5'
    }
  },
  customShadows:[
    '0px 4px 20px rgba(0, 0, 0, 0.05)',
    '0px 6px 18px rgba(0, 0, 0, 0.06)'
  ],
  customColors: {
    white: '#fff',
    black: '#000000',
    lightBlue: 'rgba(16, 156, 241, 0.12)'
  }
})

const Theme = ({children}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)
export default Theme