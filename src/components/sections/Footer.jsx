import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { Container } from "react-bootstrap";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <Container id="contact" className={styles.container}>
      <h2>Follow Us</h2>
      <Container className={styles["icons-container"]}>
        <span>
          {" "}
          <a href="https://twitter.com/cactusofsolana"><FaTwitter /></a>
        </span>
        <span>
          {" "}
          <a href="https://discord.gg/RKaUYRE6"><FaDiscord /></a>
        </span>
      </Container>

      <span className={styles.copyright}>
        <p>copyright © Solana 2021</p>
      </span>
    </Container>
  );
}

export default Footer;
