import React, { useState } from "react";
import Resource from "./Resource";

const Resources: any = () => {
  const [resources, setResources] = useState([0]);

  function addResource() {
    setResources((rs) => [...rs, rs.length > 0 ? Math.max(...rs) + 1 : 0]);
  }

  function removeResource(idToRemove: number) {
    const filtered = resources.filter((id) => id !== idToRemove);
    const reIndexed = filtered.map((_, i) => i);
    setResources(reIndexed);
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Resources</h2>

      <div>
        {resources.map((id) => (
          <Resource key={id} id={id} onRemove={() => removeResource(id)} />
        ))}
        <div className="text-center">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={addResource}
          >
            Add Resource
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
