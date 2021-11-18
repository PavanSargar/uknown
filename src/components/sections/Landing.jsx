import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Landing.module.css";

function Landing() {
  return (
    <Container className={styles.container}>
      <h2 className={styles.heading}>UNKNOWN CACTUS OF SOLANA</h2>
      <p classname={styles["heading-text"]}>
        Unknown Cactus of solana is an NFT collection of 1500 uniquely generated
        cactus on solana network{" "}
      </p>
    </Container>
  );
}

export default Landing;
