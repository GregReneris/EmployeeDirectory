import React from "react";
import "./style.css";

          function FriendCard(props) {

            function deleteMe(){
              props.handleDelete(props.id)
            }

            return (
              <div className="card">
                <div className="img-container">
                  <img alt={props.firstname} src={props.picture.medium} />
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <strong>Name:</strong> {props.firstname}{props.lastname}
                    </li>
                    <li>
                      <strong>Email:</strong> {props.email}
                    </li>
                    <li>
                      <strong>Location:</strong> {props.location.city}
                    </li>
                    <li>
                      <strong>Phone:</strong> {props.cell}
                    </li>
                  </ul>
                </div>
                <span className="remove" onClick={deleteMe}>𝘅</span>  
              </div>
            );
          }
        


export default FriendCard;
