import React, { memo } from "react";

function TableRow({ row }) {
  return (
    <tr>
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>{row.mode}</td>
      <td>{row.type}</td>
      <td>{row.destination}</td>
      <td>{row.origin}</td>
      <td>{row.total}</td>
      <td>{row.status}</td>
      <td>{row.userId}</td>
    </tr>
  );
}

export default memo(TableRow);
