import React from "react";
import Row from "./Row";
import Container from "./Container"
// import CardBtn from "./CardBtn";
// import SortBtn from "./CardBtn";

function Header () {
  

  // handleOnClick = event => {
  //   event.preventDefault();
  //   API.getDogsOfBreed(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };









  


  return (
    <div>
    <Container>
    <Row>
   
{/*     
    <div>
      <div className="alert alert-success fade in">I am the header</div>
    </div> */}

    </Row>
  </Container>
    </div>
  );
 }


export default Header;