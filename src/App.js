import React, { useReducer, useEffect, memo } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import Table from "./components/Table";
import Axios from "axios";
import PageSize from "./components/PageSize";
import Pagination from "./components/Pagination";

const initialState = {
  error: "",
  shipments: [],
  selShipments: [],
  size: 5,
  columnName: "id",
};

function reducer(state, action) {
  switch (action.type) {
    case "LOAD_DATA":
      return {
        ...state,
        shipments: action.payload,
        selShipments: action.payload.slice(1, state.size),
      };
    case "LOAD_DATA_ERROR":
      return {
        ...state,
        error: "Data not Loaded",
      };
    case "SEARCH_KEYWORD":
      return {
        ...state,
        selShipment: state.shipments.filter((e) =>
          e[state.columnName].toLowerCase().match(action.payload)
        ),
      };

    case "CHANGE_PAGE_SIZE":
      return {
        ...state,
        selShipment: state.shipments.slice(1, action.payload),
        size: action.payload,
      };

    case "CHANGE_COLUMN_NAME":
      return {
        ...state,
        selShipment: state.shipments,
        columnName: action.payload,
      };

    case "CHANGE_PAGE_NUMBER":
      return {
        ...state,
        selShipment: action.payload,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    Axios.get("http://localhost:3000/shipments")
      .then((res) => {
        dispatch({ type: "LOAD_DATA", payload: res.data });
      })
      .catch((err) => dispatch({ type: "LOAD_DATA_ERROR" }));
  }, []);
  function handleChange(event) {
    let searchString = event.target.value.trim().toLowerCase();
    if (searchString.length > 0) {
      dispatch({ type: "SEARCH_KEYWORD", payload: searchString });
    }
  }

  function handleSetSize(event) {
    dispatch({ type: "CHANGE_PAGE_SIZE", payload: event.target.value });
  }

  function handleSetColumnName(event) {
    dispatch({ type: "CHANGE_COLUMN_NAME", payload: event.target.value });
  }

  function handlePageChange(pageOfItems) {
    dispatch({ type: "CHANGE_PAGE_NUMBER", payload: pageOfItems });
  }

  return (
    <div>
      {state.error && <span>{state.error}</span>}
      <PageSize
        totalSize={state.shipments.length}
        handleChange={handleSetSize}
      />
      <UserInput
        handleChange={handleChange}
        handleColumnNameChange={handleSetColumnName}
      />
      <Pagination
        initialPage={1}
        items={state.shipments}
        pageSize={state.size}
        onChangePage={handlePageChange}
      />
      {<Table data={state.selShipment} />}
    </div>
  );
}

export default memo(App);
