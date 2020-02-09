import React from "react";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import Container from "./Container"

function Footer () { 
  return (
    <div>
    <Container>
    <Row>
      <Col size="md-8">
      </Col>
    </Row>
  </Container>
    
    <div>
      <div className="alert alert-success fade in">Yay! That Pup Liked You Too!!!</div>
    </div>
    </div>
  );
 }


export default Footer;