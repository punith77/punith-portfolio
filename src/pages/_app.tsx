// import { GlobalStyles } from '../sharedStyles/styles'


// import { ThemeProvider } from "next-themes";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import "../styles/globals.css";
// import "../styles/custom.css";
// import { ToastContainer } from "react-toastify";

// interface AppProps {
//   Component: React.FunctionComponent
//   pageProps: Record<any, any>
// }
// export default function App({ Component, pageProps }: AppProps) {
//   useEffect(() => {
//     AOS.init({ duration: 1200 });
//     AOS.refresh();
//   }, []);
//   return (
//     <>
//      <GlobalStyles />
//       <ToastContainer
//         position="top-right"
//         autoClose={2000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />

//       <ThemeProvider attribute="class">
//         <Component {...pageProps} />
//       </ThemeProvider>
//     </>
//   );
// }


import { ThemeProvider } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/custom.css";
import { ToastContainer } from "react-toastify";

interface AppProps {
  Component: React.FunctionComponent
  pageProps: Record<any, any>
}
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}