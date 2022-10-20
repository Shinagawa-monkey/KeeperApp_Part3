// My solution of the challenge
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";
//import Fab from "@mui/material/Fab";
//import Zoom from "@mui/material/Zoom";

// export default function CreateArea(props) {
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [showTitle, setShowTitle] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {showTitle && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          onClick={() => setShowTitle((prev) => !prev)}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={showTitle ? 3 : 1}
        />
        {showTitle && (
          <Zoom in={true}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
