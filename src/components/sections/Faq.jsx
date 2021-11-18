import React from "react";
import { Container, Accordion } from "react-bootstrap";
import styles from "./Faq.module.css";

// dummy faqs
import { faq } from "../../data";

function Faq() {
  return (
    <Container id="faqs" className={styles.container}>
      <h2>FAQ</h2>

      <Container className={styles["accordion-container"]}>
        <Accordion>
          {faq.map((data) => (
            <Accordion.Item className={styles.accordion} key={data.key} eventKey={data.key}>
              <Accordion.Header className={styles["accordion-title"]}>
                <h4>{data.title}</h4>
              </Accordion.Header>
              <Accordion.Body className={styles["accordion-text"]}>
                <p>{data.text}</p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </Container>
  );
}

export default Faq;
