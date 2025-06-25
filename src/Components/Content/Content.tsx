"use client";
import styles from "./content.module.scss";
import Image from "next/image";
import MyForm from "../MyForm/MyForm";
const Content = () => {
  return (
    <div className={styles.mainContainer}>
      <Image
        src="/img/topImg.jpg"
        alt="topImg.jpg"
        width={518}
        height={778}
      ></Image>
      <MyForm />
    </div>
  );
};

export default Content;
