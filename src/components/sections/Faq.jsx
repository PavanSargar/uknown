import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Accordion } from "react-bootstrap";
import styles from "./Faq.module.css";

function Faq() {
  const [faqs, setFaqs] = useState([]);

  useEffect(async () => {
    await Axios.get("https://crud-solana.herokuapp.com/faqs")
      .then((response) => setFaqs(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container id="faqs" className={styles.container}>
      <h2>FAQ</h2>

      <Container className={styles["accordion-container"]}>
        <Accordion>
          {faqs.map((data) => (
            <Accordion.Item className={styles.accordion} key={data._id} eventKey={data._id}>
              <Accordion.Header className={styles["accordion-title"]}>
                <h4>{data.question}</h4>
              </Accordion.Header>
              <Accordion.Body className={styles["accordion-text"]}>
                <p>{data.answer}</p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </Container>
  );
}

export default Faq;
