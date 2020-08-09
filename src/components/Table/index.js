import React, { useState, useEffect, memo } from "react";
import TableRow from "../TableRow";
import "./index.css";
function Table(props) {
  const [data, setData] = useState(props.data);
  const [columnSort, setColumnSort] = useState({ column: "", orderBy: false });

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  function compareBy(key, orderBy) {
    return function (a, b) {
      if (a[key] < b[key]) return orderBy ? 1 : -1;
      if (a[key] > b[key]) return orderBy ? -1 : 1;
      return 0;
    };
  }

  function sortBy(key) {
    let orderBy = columnSort.column === key ? !columnSort.orderBy : false;
    setColumnSort({ column: key, orderBy: orderBy });
    let arrayCopy = [...data];
    arrayCopy.sort(compareBy(key, orderBy));
    setData(arrayCopy);
  }
  return (
    <div>
      <h1 id="title">Shippments</h1>
      <table className="table" id="shippments">
        <tbody>
          <tr>
            <th onClick={() => sortBy("id")}>Id</th>
            <th onClick={() => sortBy("name")}>Name</th>
            <th onClick={() => sortBy("mode")}>Mode</th>
            <th onClick={() => sortBy("type")}>Type</th>
            <th onClick={() => sortBy("destination")}>Destination</th>
            <th onClick={() => sortBy("origin")}>Origin</th>
            <th onClick={() => sortBy("total")}>Total</th>
            <th onClick={() => sortBy("status")}>Status</th>
            <th onClick={() => sortBy("userId")}>User Id</th>
          </tr>
          {data &&
            data.map(function (d, i) {
              return <TableRow key={i} row={d} />;
            })}
        </tbody>
      </table>
    </div>
  );
}

export default memo(Table);
