import React, { useState } from "react";
import PropertyTableRow from "./PropertyTableRow";

interface PropertyTableProp {
  parentName: string;
  parentId: number;
}
const PropertyTable: React.FC<PropertyTableProp> = ({
  parentName,
  parentId,
}) => {
  const [rows, setRows] = useState([0]);

  function addPropertyRow() {
    setRows((rs) => [...rs, rs.length > 0 ? Math.max(...rs) + 1 : 0]);
  }

  function removePropertyRow(idToRemove: number) {
    const filtered = rows.filter((id) => id !== idToRemove);
    const reIndexed = filtered.map((_, i) => i);
    setRows(reIndexed);
  }

  return (
    <div className="border-bottom border-black border-opacity-50">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Property Name</th>
            <th scope="col">Type</th>
            <th scope="col">Nullable</th>
            <th scope="col">PK</th>
            <th scope="col">FK</th>
            <th scope="col">FK Ref</th>
            <th scope="col">Max Length</th>
            <th scope="col">DIP</th>
            <th scope="col">DFP</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((id) => (
            <PropertyTableRow
              key={id}
              id={id}
              parentName={parentName}
              parentId={parentId}
              onRemove={() => removePropertyRow(id)}
            />
          ))}
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-outline-success mb-5"
        onClick={addPropertyRow}
      >
        +
      </button>
    </div>
  );
};

export default PropertyTable;
