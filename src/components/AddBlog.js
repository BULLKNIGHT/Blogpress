import React from "react";
import TextEditor from "./TextEditor";

const AddBlog = () => {
  return (
    <div className="container">
      <div className="row g-2">
        <div className="col-md">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputGrid"
              placeholder="Title"
            />
            <label htmlFor="floatingInputGrid">Title</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
            >
              {/* <option selected>Open this select menu</option> */}
              <option value="1">Sport</option>
              <option value="2">Movies</option>
              <option value="3">Food</option>
              <option value="4">Tech</option>
            </select>
            <label htmlFor="floatingSelectGrid">Category</label>
          </div>
        </div>

        <TextEditor />
      </div>
    </div>
  );
};

export default AddBlog;
