import React, { FormEvent, useRef, useState } from "react";
import axios from "axios";
import Resources from "../Resources";
import CSS from "csstype";
import { unflatten } from "../../utility/unflatten";
import { Configurations } from "../../data/Configurations";
import { useNavigate } from "react-router-dom";

const Generate: any = () => {
  const formRef = useRef(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const inputDivStyles: CSS.Properties = {
    width: "350px",
  };

  const divStyles: CSS.Properties = {
    marginBottom: "120px",
  };

  const generateApi = async (e: FormEvent) => {
    e.preventDefault();

    const formElement = formRef.current;
    if (formElement) {
      const formData = new FormData(formElement);
      const dataObj = Object.fromEntries(formData.entries());
      const json = JSON.stringify(dataObj, null, 2);
      const flat: Record<string, string> = JSON.parse(json);
      const nested = unflatten(flat);

      const conf = Configurations.fromJSON(nested);

      try {
        const response = await axios.post(
          "https://localhost:7041/api/v1/interfaces",
          conf,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 204) {
          navigate("/apis");
        } else {
          setMessage(response.data);
        }
      } catch (error) {
        setMessage(`Error generating API. Error: ${error}`);
      }
    }
  };

  return (
    <div className="container-fluid" style={divStyles}>
      <h1 className="text-center">Generate API</h1>
      {<p className="text-center text-danger">{message}</p>}
      <form className="px-5" onSubmit={generateApi} ref={formRef}>
        <div className="mb-5 mt-5 d-flex flex-column align-items-center">
          <div className="mb-3" style={inputDivStyles}>
            <label htmlFor="apiName" className="form-label">
              API Name
            </label>
            <input
              type="text"
              className="form-control"
              id="apiName"
              placeholder="My API"
              name="apiName"
            />
          </div>
          <div className="mb-3" style={inputDivStyles}>
            <label htmlFor="gitUrl" className="form-label">
              Github Repo URL
            </label>
            <input
              type="text"
              className="form-control"
              id="gitUrl"
              placeholder="https://github.com/myusername/repository"
              name="gitHubRepository"
            />
          </div>
          <div className="mb-3" style={inputDivStyles}>
            <label htmlFor="gitUsername" className="form-label">
              Github Username
            </label>
            <input
              type="text"
              className="form-control"
              id="gitUsername"
              autoComplete="given-name"
              name="gitHubUser"
            />
          </div>
          <div className="mb-3" style={inputDivStyles}>
            <label htmlFor="gitPat" className="form-label">
              Github PAT
            </label>
            <input
              type="password"
              className="form-control"
              id="gitPat"
              name="gitHubPersonalAccessToken"
            />
          </div>
        </div>
        <Resources />
        <div className="text-center mt-5">
          <input
            type="submit"
            value="Generate"
            className="btn btn-outline-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default Generate;
