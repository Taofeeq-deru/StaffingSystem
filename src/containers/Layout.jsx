import React, { Component } from "react";
import Staff from "../components/Staff";

class MainLayout extends Component {
  state = {
    staffList: JSON.parse(localStorage.getItem("staffList")) || []
  };

  deleteStaff = (id) => {
    let newList = this.state.staffList;

    const del = newList.find((list) => list.id === id);

    const index = newList.indexOf(del);

    newList.splice(index, 1);

    localStorage.removeItem("staffList", newList);
    localStorage.setItem("staffList", JSON.stringify(newList));

    this.setState({ newList });
  };

  editStaff = (id) => {
    let newList = this.state.staffList;

    const edit = newList.find((list) => list.id === id);

    console.log(edit.firstName);

    const index = newList.indexOf(edit);

    newList.splice(index, 1);

    document.querySelector("#firstName").value = `${edit.firstName}`;
    document.querySelector("#lastName").value = `${edit.lastName}`;
    document.querySelector("#email").value = `${edit.email}`;
    document.querySelector("#position").value = `${edit.position}`;
    document.querySelector("#salary").value = `${edit.salary}`;

    document.querySelector("#firstName").focus();

    localStorage.removeItem("staffList", newList);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const email = e.target.elements.email.value;
    const position = e.target.elements.position.value;
    const salary = e.target.elements.salary.value;
    //console.log(firstName, lastName, email, position, salary);

    const list = {
      id: firstName,
      firstName: firstName,
      lastName: lastName,
      email: email,
      position: position,
      salary: salary
    };

    let newList = this.state.staffList;

    newList.push(list);

    localStorage.setItem("staffList", JSON.stringify(newList));

    this.setState({ newList });

    console.log(this.state.staffList);
  };

  render() {
    return (
      <>
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6">
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
            </div>
            <div className="col-md-6" style={{ borderLeft: "1px solid black" }}>
              <Staff
                listOfStaff={this.state.staffList}
                delete={this.deleteStaff}
                edit={this.editStaff}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainLayout;
