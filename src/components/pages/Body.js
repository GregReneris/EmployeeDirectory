
import React from "react";
// import "../styles/body.css";
import Wrapper from "./Wrapper/index";
// import PeopleCard from "./Card";
// import People from "DA JSONNNNN";
import API from "../utils/API";
import Row from "./Row";
// import Col from "./Col";
import Container from "./Container"
import FriendCard from "./FriendCard"
import Header from "./Header"
// import CardBtn from "./CardBtn";
import SortBtn from "./SortBtn";
import FilterForm from "./Filter";


class Body extends React.Component {

  state = {
    results: [],
    peoples: [],
    filter: "",
    sorted: false,
  };





  componentDidMount() {
    API.search()
      .then(res => { this.setState({results: res.data.results});} /* this.setState({ peoples: res.data.results })*/ )
      .catch(err => console.log(err));
  };

  results2People = () => {
    let peoples = [...this.state.results];
    
    console.log("Sprt " + this.state.filter);
    if(this.state.filter > ""){
      let filter = this.state.filter;
      peoples = peoples.filter(person => {
        let name = person.name.first.toLowerCase();
        return name.startsWith(filter);
      })
    }
    

    if (this.state.sorted){
      peoples.sort( (a,b) => {
        a = a.name.first.toLowerCase()+" "+ a.name.last.toLowerCase();
        b = b.name.first.toLowerCase()+" "+ b.name.last.toLowerCase();
        return (a > b ? 1 : (b > a ? -1 : 0));
      })
    }

   // this.setState({peoples: peoples})
   return peoples;
  } 

  handleInputChange = event => {
    event.preventDefault()
    // console.log ("input is changing "+ event.target.value);
      this.setState({ filter: event.target.value.toLowerCase() });

    
  };


  handleFormSubmit = event => {
    event.preventDefault();
    console.log("formSubmit Works!");

    // API.getDogsOfBreed(this.state.search)
    //   .then(res => {
    //     if (res.data.status === "error") {
    //       throw new Error(res.data.message);
    //     }
    //     this.setState({ results: res.data.message, error: "" });
    //   })
    //   .catch(err => this.setState({ error: err.message }));
  };


  handleOnClick = event => {
    event.preventDefault();
    console.log("I'm running ths button");
    this.setState({sorted : true})
  
  };



    // API.getDogsOfBreed(this.state.search)
    //   .then(res => {
    //     if (res.data.status === "error") {
    //       throw new Error(res.data.message);
    //     }
    //     this.setState({ results: res.data.message, error: "" });
    //   })
    //   .catch(err => this.setState({ error: err.message }));
  







  render() {
    console.log(this.state.peoples);

   let peoples = this.results2People();
    return (


      <div>
        <Header>
        </Header>






        <Wrapper>
          <Container>
        <div>
          <Row>
            <SortBtn
              onClick={this.handleOnClick}

            >
            </SortBtn>



          </Row>
        </div>

        <div>
          <Row>
            <FilterForm 
              onChange={this.handleInputChange}  
              onSubmit={this.handleFormSubmit}
            
            
            />
            

          </Row>
        </div>

            <Row>

              <h1 className="title">Peoples List</h1>
              {peoples.map((peoples, index) => (
                <FriendCard
                  key={peoples.login.uuid}
                  firstname={peoples.name.first}
                  lastname={peoples.name.last}
                  email={peoples.email}
                  picture={peoples.picture.large}
                  location={peoples.location.city}
                  cell={peoples.cell}
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

