import React, { Component } from "react";

class Form extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const email = e.target.elements.email.value;
    const position = e.target.elements.position.value;
    const salary = e.target.elements.salary.value;
  };

  render() {
    return (
      <>
        <form action="" className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="position"
              id="position"
              placeholder="Position"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="number"
              name="salary"
              id="salary"
              placeholder="Salary"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Form;
