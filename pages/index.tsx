import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import MainPage from "./MainPage";
import Services from "./services";
import Destination from "./destination";
import Notify from "../components/Notify";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Travel Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <MainPage />
      <Services />
      <Destination />
      <Notify />
      <Footer />
    </>
  );
};

export default Home;
