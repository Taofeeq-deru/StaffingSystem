import React, { Component } from "react";

class Form extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.firstRef = React.createRef();
    this.lastRef = React.createRef();
    this.mailRef = React.createRef();
    this.positionRef = React.createRef();
    this.salaryRef = React.createRef();
  }

  submitForm = (e) => {
    e.preventDefault();
    const theFirstName = e.target.elements.firstName.value;
    const theLastName = e.target.elements.lastName.value;
    const theEmail = e.target.elements.email.value;
    const thePosition = e.target.elements.position.value;
    const theSalary = e.target.elements.salary.value;
    this.props.addStaff(
      theFirstName,
      theLastName,
      theEmail,
      thePosition,
      theSalary
    );

    this.firstRef.current.value = "";
    this.lastRef.current.value = "";
    this.mailRef.current.value = "";
    this.positionRef.current.value = "";
    this.salaryRef.current.value = "";
  };

  render() {
    return (
      <>
        <form action="" className="form" onSubmit={this.submitForm}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              ref={this.firstRef}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              ref={this.lastRef}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              ref={this.mailRef}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="position"
              id="position"
              placeholder="Position"
              ref={this.positionRef}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="number"
              name="salary"
              id="salary"
              placeholder="Salary"
              ref={this.salaryRef}
              required
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
