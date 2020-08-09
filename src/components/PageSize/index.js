import React, { memo } from "react";

function PageSize(props) {
  const pageSize = [5, 10, 20, 50, 100];

  return (
    <div>
      Page size
      <select onChange={props.handleChange}>
        {pageSize &&
          pageSize.map(
            (size, index) =>
              props.totalSize >= size && <option key={index}>{size}</option>
          )}
      </select>
    </div>
  );
}

export default memo(PageSize);
