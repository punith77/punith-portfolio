import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout/layout'


// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {

//   return (
//     <>
//     <Layout>
//       <h1>Portfolio website</h1>
//     </Layout>
//     </>
//   )
// }

import Home from "./home";

const MainRoot = () => {
  return <Home />;
};

export default MainRoot;