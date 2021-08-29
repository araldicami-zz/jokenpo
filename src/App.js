import { useState } from "react";
import { Board } from "./components/Board";
import { ChooseAvatar } from "./components/ChooseAvatar";

import "emoji-mart/css/emoji-mart.css";

function App() {
  const [open, setOpen] = useState(true);
  const [avatar, setAvatar] = useState("😃");
  const [name, setName] = useState("");

  return (
    <div className="app">
      <Board name={name} avatar={avatar} />
      <ChooseAvatar
        name={name}
        setName={setName}
        avatar={avatar}
        setAvatar={setAvatar}
        openModal={open}
        setOpen={() => setOpen(!open)}
        setPlay={() => setOpen(!open)}
      />
    </div>
  );
}

export default App;
