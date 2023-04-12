import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PopupComponent from "./PopupComponent";

function TableEntry({
  entry,
  index,
  deleteHandler,
  entries,
  addEntry,
  updateElement,
}) {
  let id = "i" + index;
  return (
    <tr>
      <td>{entry.name}</td>
      <td>{entry.phoneNumber}</td>
      <td>{entry.email}</td>
      <td>{entry.address}</td>
      <td>
        <Popup trigger={<BiEdit />} modal>
          {(close) => {
            return (
              <PopupComponent
                state={{ ...entries[index], id: index }}
                addEntry={addEntry}
                updateElement={updateElement}
                closePopup={close}
              />
            );
          }}
        </Popup>
        <MdDeleteOutline onClick={() => deleteHandler(id)} />
      </td>
    </tr>
  );
}

export default TableEntry;
