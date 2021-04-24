import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "components/Header";
import Diapositiva from "components/Diapositiva";

export default function Home() {
  return (
    <>
      <Header />

      <div className="container">
        <Diapositiva />
      </div>
    </>
  );
}
