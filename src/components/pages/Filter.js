import React from "react";


// function Filter(props) {
//   return (
//     <div>
//       <input onChange={props.onChanges}>
//         Filter By Name
//       </input>
//     </div>
//   );
// }


function FilterForm(props) {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="name">Filter by First Name: </label>
          <input
            value={props.search}
            onChange={props.onChange}
            name="name"
            list="names"
            type="text"
            className="form-control"
            placeholder="Type in a name to begin"
            id="name"
          />
          {/* <datalist id="results">
            {props.peoples.map(firstName => (
              <option value={firstName} key={firstName} />
            ))}
          </datalist> */}
          {/* <button type="submit" onClick={props.onSubmit} className="btn btn-success">
            Search
          </button> */}
        </div>
      </form>
    );
  }

export default FilterForm;