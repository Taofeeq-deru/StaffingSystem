import React, { Component } from "react";
import { List } from "antd";
import "./Staff.css";
import Actions from "./Actions";

class Staff extends Component {
  state = {};

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.listOfStaff}
        renderItem={(item) => (
          <List.Item actions={[]} id={item.firstName}>
            <List.Item.Meta
              title={
                <span className="d-flex">
                  <span className="w-50 text-capitalize">
                    {item.firstName} {item.lastName}
                  </span>
                  <Actions
                    itemID={item.id}
                    deleteItem={this.props.delete}
                    editItem={this.props.edit}
                    className="ml-auto"
                    item={item}
                  />
                </span>
              }
              description={<a href={`mailto:${item.email}`}>{item.email}</a>}
            />
            <p className="text-capitalize">Position: {item.position}</p>
            <p>
              Salary: <i className="fa fa-naira"></i>
              {this.numberWithCommas(`${item.salary}`)}
            </p>
          </List.Item>
        )}
      />
    );
  }
}

export default Staff;
