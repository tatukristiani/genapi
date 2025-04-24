import React from "react";
import PropertyTable from "./PropertyTable";
import CSS from "csstype";

interface ResourceProp {
  id: number; // The `id` is a number.
  onRemove: () => void; // `onRemove` is a function that takes no arguments and returns nothing.
}

const Resource: React.FC<ResourceProp> = ({ id, onRemove }) => {
  const inputDivStyles: CSS.Properties = {
    width: "400px",
  };

  return (
    <div className="mb-5" id={`resource-${id}`}>
      <div className="d-flex justify-content-center flex-wrap align-items-center justify-content-between">
        <div className="m-2">
          <label htmlFor="resourceName" className="form-label">
            Resource Name
          </label>
          <input
            style={inputDivStyles}
            type="text"
            className="form-control"
            id="resourceName"
            name={`resources[${id}].name`}
          />
        </div>

        <div className="m-2 align-self-end">
          <button
            type="button"
            className="btn btn-outline-danger"
            id={`rmResourceButton-${id}`}
            onClick={onRemove}
          >
            Remove Resource
          </button>
        </div>
      </div>
      <PropertyTable parentName={"resources"} parentId={id} />
    </div>
  );
};

export default Resource;
