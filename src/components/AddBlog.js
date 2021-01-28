import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AddBlog = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  return (
    <>
      <div className="row g-2">
        <div className="col-md">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputGrid"
              placeholder="Title"
            />
            <label for="floatingInputGrid">Title</label>
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
            <label for="floatingSelectGrid">Category</label>
          </div>
        </div>
      </div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
    </>
  );
};

export default AddBlog;
