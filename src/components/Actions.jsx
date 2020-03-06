import React, { Component } from "react";

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
        <span className="ml-5 pl-5 actions" theId={this.props.itemID}>
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
