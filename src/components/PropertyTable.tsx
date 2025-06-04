import React, { useState } from "react";
import PropertyTableRow from "./PropertyTableRow";
import { Tooltip } from "react-tooltip";

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
            <th
              scope="col"
              data-tooltip-id="pkTooltip"
              data-tooltip-content="Primary Key"
              data-tooltip-place="top"
            >
              PK
              <Tooltip id="pkTooltip" />
            </th>

            <th
              scope="col"
              data-tooltip-id="fkTooltip"
              data-tooltip-content="Foreign Key"
              data-tooltip-place="top"
            >
              PK
              <Tooltip id="fkTooltip" />
            </th>
            <th
              scope="col"
              data-tooltip-id="fkRefTooltip"
              data-tooltip-content="Resource name, which this property belongs to"
              data-tooltip-place="top"
            >
              FK ref
              <Tooltip id="fkRefTooltip" />
            </th>
            <th scope="col">Max Length</th>
            <th
              scope="col"
              data-tooltip-id="dipTooltip"
              data-tooltip-content="Decimal Integer Part. Count of numbers before decimal pointer."
              data-tooltip-place="top"
            >
              DIP
              <Tooltip id="dipTooltip" />
            </th>
            <th
              scope="col"
              data-tooltip-id="dfpTooltip"
              data-tooltip-content="Decimal Fraction Part. Count of numbers after decimal pointer."
              data-tooltip-place="top"
            >
              DFP
              <Tooltip id="dfpTooltip" />
            </th>
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
