import React, { Component } from "react";
import "./Layout.css";
import Staff from "../components/Staff";
import Form from "../components/Form";
import { v4 as uuidv4 } from "uuid";

class MainLayout extends Component {
  state = {
    staffList: JSON.parse(localStorage.getItem("staffList")) || [],
    btnOption: "Add Staff",
    staffIndex: "",
    editted: ""
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

    this.setState({ editted: "yes" });

    const index = newList.indexOf(edit);

    this.setState({ staffIndex: index });

    document.querySelector("#firstName").value = `${edit.firstName}`;
    document.querySelector("#lastName").value = `${edit.lastName}`;
    document.querySelector("#email").value = `${edit.email}`;
    document.querySelector("#position").value = `${edit.position}`;
    document.querySelector("#salary").value = `${edit.salary}`;

    document.querySelector("#firstName").focus();

    this.setState({ btnOption: "Update Details" });
  };

  addStaff = (theFirstName, theLastName, theEmail, thePosition, theSalary) => {
    const firstName = theFirstName;
    const lastName = theLastName;
    const email = theEmail;
    const position = thePosition;
    const salary = theSalary;

    const list = {
      id: uuidv4(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      position: position,
      salary: salary
    };

    let newList = this.state.staffList;

    if (this.state.editted === "yes") {
      newList[this.state.staffIndex] = list;

      localStorage.removeItem("staffList", newList);

      this.setState({ editted: "", staffIndex: "", btnOption: "Add Staff" });
    } else {
      newList.push(list);
    }

    localStorage.setItem("staffList", JSON.stringify(newList));

    this.setState({ newList });
  };

  render() {
    return (
      <>
        <div className="container p-4">
          <div className="row">
            <div className="col-12 mb-3">
              <h3 className="text-center text-dark text-capitalize">
                staff management system
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5">
              <h4 className="text-center text-dark text-capitalize mb-4">
                enter staff details
              </h4>
              <Form
                addStaff={this.addStaff}
                buttonOptn={this.state.btnOption}
              />
            </div>
            <div className="col-md-6" id="staffSide">
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
