import React from "react";


// key={peopleData.id} firstname={People.results.name.first} lastname={People.results.name.last} email={People.results.email} picture={People.results.picture.medium}/>)}

function PeopleCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.firstname} src={props.picture} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.firstname}
          </li>
          <li>
            <strong>Occupation:</strong> {props.email}
          </li>
          <li>
            <strong>Address:</strong> {props.lastname}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PeopleCard;