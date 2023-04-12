import "./App.css";
import React, { useState } from "react";
import Table from "./Components/Table";
import PopupComponent from "./Components/PopupComponent";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";


let initialElement = {
  name: "",
  phoneNumber: "",
  email: "",
  address: "",
  id: -1,
};

function App() {
  const [entries, setEntries] = useState([]);
  const [state, setState] = useState(initialElement);
  const addEntry = (e) => {
    setEntries([...entries, e]);
  };
  const deleteHandler = (e) => {
    const ind = parseInt(e.slice(1, e.length));
    let arr = [...entries];
    arr.splice(ind, 1);
    setEntries(arr);
  };

  const editHandler = (id) => {
    // console.log(id)
    // const ind=parseInt(id.slice(1,id.length))
    // setState({...entries[ind],id:ind})
    //  console.log(entries)
    //  console.log(state)
  };

  const updateElement = (ind, e) => {
    console.log(ind, e);
    let arr = [...entries];
    arr[ind] = e;
    setEntries(arr);
  };

  // console.log("entries",entries,state)

  return (
    <div className="App">
      
      {entries.length?
      <Table
        entries={entries}
        deleteHandler={deleteHandler}
        addEntry={addEntry}
        updateElement={updateElement}
      />
      :
      console.log("")
      }
      <Popup trigger={<div className="addButton"><button >Add</button></div>} modal>
        {(close) => (
          <PopupComponent
            state={state}
            addEntry={addEntry}
            updateElement={updateElement}
            closePopup={close}
          />
        )}
      </Popup>
    </div>
  );
}

export default App;
