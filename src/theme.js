import { createMuiTheme } from '@material-ui/core/styles';
import '@fontsource/roboto';
import "@fontsource/work-sans"

const theme = createMuiTheme({
  palette: {
    common: {
      green: '#6bd258',
      gray: '#8c9099',
      white: '#ffffff',
      darkBlue: '#053c77',
      checkbox: '#3B4256',
    },
    primary: {
      lighter: '#E7F4FF',
      light: '#A0D4FF',
      main: '#27C7FE',
      dark: '#0060AB',
      darker: '#004377',
    },
    secondary: {
      lighter: '#333333',
      light: '#DFDFDF',
      main: '#F5F5F5',
      dark: '#646464',
      darker: '#212121',
    },
    red: {
      lighter: '#F79C94',
      main: '#EB3323',
      darker: '#B92316',
    },
    green: {
      lighter: '#C6EBCC',
      main: '#79D288',
      darker: '#4C9958',
    },
    text: {
      primary: '#333333',
      secondary: '#FFFFFF',
    },
    background: {
      default: '#F5F5F5',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Work Sans',
    ].join(','),
    fontSize: 16,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        body: {
          fontFamily: [
            'Work Sans',
          ].join(','),
        },
        '*::-webkit-scrollbar': {
          width: '8px'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#9E9E9E',
          borderRadius: 9,
          outline: 'none'
        }
      },
    },
    MuiTypography: {
      h1: {
        fontSize: 36,
        fontWeight: 600,
        '@media (max-width: 1024px)': {
          fontSize:28
        },
      },
      h2: {
        fontSize:30,
        '@media (max-width: 1024px)': {
          fontSize:22
        },
      },
      h3: {
        fontSize:24,
        '@media (max-width: 1024px)': {
          fontSize:20
        },
      },
      h4: {
        fontSize:18,
      },
      h5: {
        fontSize:15,
      },
      h6: {
        fontSize: 14,
        fontWeight:400
      },
      subtitle1: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: '25px',
      },
      subtitle2: {
        fontFamily:'Roboto',
        fontWeight: 'normal',
        fontSize: '12',
        color: '#333333'
      },
      caption: {
        fontSize: 16,
        lineHeight: '20px',
        color: '#9E9E9E',
        marginBottom: 8,
        display: 'inline-block',
      },
      body1: {
        fontFamily:'Roboto',
        fontSize:14,
        fontWeight: 400,
        color:'#FFFFFF'
      },
      body2: {
        fontSize: 15,
        fontWeight: 500,
        textDecoration:'underline',
        color:'#333333',
      }
    },
    MuiFormControl: {
      root: {
        marginBottom: 24,
      }
    },
    MuiInputLabel: {
      root: {
        fontSize: 18,
        color: '#212121',
        fontWeight: 600,
        lineHeight: '22px',
        marginBottom: 8,
      },
      formControl: {
        position: 'relative',
        transform: 'inherit',
      },
      outlined: {
        transform: 'inherit',
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: '2px solid #dfe4e6',
        },
      },
      formControl: {
        marginTop: '0px !important', // needs to be solved without !important
      },
    },
    MuiFilledInput: {
      root: {
        borderRadius: '0px !important',
      },
      underline: {
        '&:before': {
          borderBottom: 'none',
        },
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: '0px 2px 3px rgba(158, 158, 158, 0.11)',
      },
    },
    MuiTableContainer: {
      root: {
        borderRadius: 2,
        boxShadow: '0px 2px 3px rgba(158, 158, 158, 0.11)',
      },
    },
    MuiTableRow: {
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: '#F5F5F5',
        },
        '&:nth-of-type(even)': {
          backgroundColor: '#FFFFFF',
        },
      },
      head: {
        backgroundColor: '#FFFFFF !important',
      }
    },
    MuiTableCell: {
      root: {
        fontSize: 14,
        lineHeight: '16px',
        borderBottom: 'none',
        cursor: 'pointer',
        paddingTop: 0,
        paddingBottom: 0,
        height: 60,
      },
      head: {
        fontWeight: 600,
        lineHeight: '16px',
      }
    },
    MuiFormHelperText: {
      root: {
        '&.Mui-error': {
          color: '#EB3323',
          fontFamily: 'IBM Plex Sans',
          fontSize: 12,
          lineHeight: '16px',
          marginTop: 8,
        },
      },
      contained: {
        marginLeft: 0,
      },
    },
    MuiFormLabel: {
      root: {
        '&.Mui-error, &.Mui-focused': {
          color: '#212121',
        },
      }
    },
    MuiButton: {
      root: {
        '&.Mui-disabled': {
          color: '#FFFFFF',
        },
      }
    }
  },
});

export default theme;
