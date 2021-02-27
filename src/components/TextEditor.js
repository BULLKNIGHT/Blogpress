import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../styles/TextEditor.css";
import draftToHtml from "draftjs-to-html";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div className="editor">
      {console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))}
      <div className="TextEditor">
      <Editor
        editorState={editorState}
        toolbar={{
          // inline: { inDropdown: true },
          list: { inDropdown: true },
          // textAlign: { inDropdown: true },
          // link: { inDropdown: true },
          // history: { inDropdown: true },
        }}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        onEditorStateChange={onEditorStateChange}
      />
      </div>
      {/* <textarea disabled value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}></textarea> */}
      
      <div className="d-grid gap-2 col-3 mx-auto position-stickey" style={{paddingTop: "1px"}}>
        <button type="button" className="btn btn-secondary">
          Publish
        </button>
      </div>
    </div>
  );
};

export default TextEditor;
