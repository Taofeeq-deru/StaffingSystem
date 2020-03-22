import React, { Component } from "react";
//import ModalClass from "./Modal";

class Actions extends Component {
  state = {};
  handleDelete = (e) => {
    this.props.deleteItem(this.props.itemID);
  };

  handleEdit = (e) => {
    this.props.editItem(this.props.itemID);
  };
  render() {
    return (
      <>
        <span className="actions d-flex" theid={this.props.itemID}>
          <i
            className="fa fa-edit text-info fa-xs mr-2 edit"
            onClick={this.handleEdit}
          ></i>
          <i
            className="fa fa-trash text-danger fa-xs delete"
            onClick={this.handleDelete}
          ></i>
        </span>
      </>
    );
  }
}

export default Actions;
