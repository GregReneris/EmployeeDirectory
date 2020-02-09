
import React from "react";
// import "../styles/body.css";
import Wrapper from "./Wrapper/index";
import PeopleCard from "./Card";
// import People from "DA JSONNNNN";
import API from "../utils/API";
import Row from "./Row";
// import Col from "./Col";
import Container from "./Container"


class Body extends React.Component {

  state = {
    peoples: [],
    search: ""
  };

  componentDidMount () {
    API.search()
    .then(res => this.setState({ peoples: res.data.results }))
    .catch(err => console.log(err));
  }; 

  
  
render() {
  console.log(this.state.peoples);
    
  
  return (


    <div>
      <Wrapper>
      <Container>
      <Row>

        <h1 className="title">Peoples List</h1>
        {this.state.peoples.map((peoples, index) => (
          <PeopleCard
          key={index}
          firstname={peoples.name.first}
          lastname={peoples.name.last}
          email={peoples.email}
          picture={peoples.picture.medium}
          />
          ))}
      
      </Row>
      </Container>
      
      
      
      
      </Wrapper>
          
        </div>
        

  )
  }
}
export default Body;

