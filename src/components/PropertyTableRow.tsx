import React from "react";

interface PropertyTableRowProps {
  id: number; // The `id` is a number.
  parentName: string;
  parentId: number;
  onRemove: () => void; // `onRemove` is a function that takes no arguments and returns nothing.
}

const PropertyTableRow: React.FC<PropertyTableRowProps> = ({
  id,
  parentName,
  parentId,
  onRemove,
}) => {
  return (
    <tr id={`prop-${id}`}>
      <td>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id={`propName-${id}`}
            name={`${parentName}[${parentId}].properties[${id}].name`}
          />
        </div>
      </td>
      <td>
        <div className="mb-3">
          <select
            className="form-select"
            id={`propType-${id}`}
            defaultValue={"string"}
            name={`${parentName}[${parentId}].properties[${id}].type`}
          >
            <option value="string">String</option>
            <option value="int">Int</option>
            <option value="decimal">Decimal</option>
            <option value="bool">Boolean</option>
          </select>
        </div>
      </td>
      <td>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id={`propNullable-${id}`}
            name={`${parentName}[${parentId}].properties[${id}].nullable`}
          />
        </div>
      </td>
      <td>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id={`propPk-${id}`}
            name={`${parentName}[${parentId}].properties[${id}].primaryKey`}
          />
        </div>
      </td>
      <td>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id={`propFk-${id}`}
            name={`${parentName}[${parentId}].properties[${id}].foreignKey`}
          />
        </div>
      </td>
      <td>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id={`propFkReference-${id}`}
            name={`${parentName}[${parentId}].properties[${id}].foreignKeyReference`}
          />
        </div>
      </td>
      <td>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id={`maxLength-${id}`}
            inputMode="numeric"
            min={0}
            max={2147483647}
            name={`${parentName}[${parentId}].properties[${id}].maxLength`}
          />
        </div>
      </td>
      <td>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id={`propDecimalIntegerPart-${id}`}
            name={`${parentName}[${parentId}].properties[${id}].decimalIntegerPart`}
            inputMode="numeric"
            min={0}
            max={79228162514264337593543950334}
          />
        </div>
      </td>
      <td>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id={`propDecimalFractionPart-${id}`}
            name={`${parentName}[${parentId}].properties[${id}].decimalFractionPart`}
            inputMode="numeric"
            min={0}
            max={28}
          />
        </div>
      </td>
      <td>
        <div className="mb-3">
          <input
            type="button"
            className="form-control btn btn-outline-danger"
            id={`rmPropButton-${id}`}
            value={"Remove"}
            onClick={onRemove}
          />
        </div>
      </td>
    </tr>
  );
};

export default PropertyTableRow;
