import { createTheme } from "@mui/system";
import {colorPalette} from './colors'
import { PaletteMode, ThemeOptions } from "@mui/material";

// const theme  = createTheme({
//     palette: {
//         primary: {

//         },
//         secondary: {

//         },
//         error: {

//         },
//         warning: {

//         },
//         info: {

//         },
//         success: {

//         }

//     }
// })



export const getThemePalette = (mode: PaletteMode, colorTheme: string = 'Slate'): ThemeOptions => {
    return ({
        palette: {
            mode,
            ...(mode === 'light' ? {

           
                primary: {
                    light: colorPalette[colorTheme][100],
                    main: colorPalette[colorTheme][100],
                    dark: colorPalette[colorTheme][900],
                    contrastText: colorPalette[colorTheme][500],
                },
                divider: colorPalette[colorTheme][200],
                text: {
                  primary: colorPalette[colorTheme][900],
                  secondary: colorPalette[colorTheme][700],
                },
                background: {
                    default: colorPalette[colorTheme][100],
                      paper: colorPalette[colorTheme][900],
                }
            } : {
                primary: {
                    light: colorPalette[colorTheme][900],
                    main: colorPalette[colorTheme][900],
                    dark: colorPalette[colorTheme][50],
                    contrastText: colorPalette[colorTheme][300],
                },
                divider: colorPalette[colorTheme][700],
                background: {
                  default: colorPalette[colorTheme][900],
                  paper: colorPalette[colorTheme][900],
                },
                text: {
                  primary: colorPalette[colorTheme][400],
                  secondary: colorPalette[colorTheme][500],
                },
            })
        },
        // typography: {
        //         fontFamily: 'nunito',
        //         fontSize: 16,
        //         fontWeightBold: 700,
        //         fontWeightLight: 200,
        //         fontWeightMedium: 400,
        //         fontWeightRegular: 300,
        // }
    })

}