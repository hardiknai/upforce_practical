import React, { memo } from "react";

function UserInput(props) {
  const columnNames = [
    "id",
    "name",
    "mode",
    "type",
    "destination",
    "origin",
    "total",
    "status",
    "userId",
  ];
  return (
    <div>
      <select onChange={props.handleColumnNameChange}>
        {columnNames &&
          columnNames.map((columnName, index) => (
            <option key={index}>{columnName}</option>
          ))}
      </select>
      <input
        className="form-control mb-2"
        placeholder="Search Shipments..."
        onChange={props.handleChange}
      />
    </div>
  );
}

export default memo(UserInput);
