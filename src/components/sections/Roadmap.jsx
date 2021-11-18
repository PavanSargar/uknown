import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Roadmap.module.css";

function Roadmap() {
  return (
    <Container id="roadmap" className={styles.container}>
      <h2>ROADMAP</h2>
      <Row>
        <Col xs={8} sm={6} md={4}>
          <h3>CACTU-PHASE 1</h3>
          <ul>
            <li>Build a community</li>
            <li>Website development</li>
            <li>launch discord & twitter</li>
            <li>Constant giveaways & contests</li>
          </ul>
        </Col>
        <Col xs={8} sm={6} md={4} >
          <h3>CACTU-PHASE 2</h3>
          <ul>
            <li>Add Rarity</li>
            <li>Minting of 1400 unknown cactus NFT</li>
            <li>Listing on Popular Marketplaces</li>
            <li>Community Polls to Decide Charity Donations</li>
            <li>100% royalties from secondary sales will go to charities</li>
          </ul>
        </Col>
        <Col xs={8} sm={6} md={4}>
          <h3>CACTU-PHASE 3</h3>
          <ul>
            <li>
              Launching an NFT marketplace based on charity focused projects
            </li>
            <li>Continue to innovate based on community requests</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Roadmap;
