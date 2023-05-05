// import { Head } from "next/document"

import Head from "next/head"
// import Navbar from "../Navbar/navbar"
import { ThemeProvider, createTheme } from "@mui/material"
import { green, purple } from '@mui/material/colors';
import { getThemePalette } from "@/themes/themeMain";
// import Home from '../Home/home'

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({children}: LayoutProps){
  const themePalette = getThemePalette('light', 'Slate')
  const theme = createTheme(themePalette);

return (
    <div>

<Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        {/* <meta name="og:title" content={siteTitle} /> */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ThemeProvider theme={theme}>
      {/* <Navbar /> */}
       {children}
      </ThemeProvider>
   
    </div>
)
}