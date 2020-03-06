import React, { Component } from "react";
import { List } from "antd";
import "./Staff.css";
import Actions from "./Actions";

class Staff extends Component {
  state = {};

  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.listOfStaff}
        renderItem={(item) => (
          <List.Item actions={[]} id={item.firstName}>
            <List.Item.Meta
              title={
                <span>
                  {item.firstName} {item.lastName}
                  <Actions
                    itemID={item.id}
                    deleteItem={this.props.delete}
                    editItem={this.props.edit}
                  />
                </span>
              }
              description={<a href={`mailto:${item.email}`}>{item.email}</a>}
            />
            <p>Position: {item.position}</p>
            <p>Salary: #{item.salary}</p>
          </List.Item>
        )}
      />
    );
  }
}

export default Staff;
