import React from "react";
import TableEntry from "./TableEntry";
import TableHeader from "./TableHeader";
import './table.css'
function Table({
  entries,
  deleteHandler,
  addEntry,
  updateElement,
}) {
  let index = 0;
  return (
    <div >
      <table border="1" className="tableclass">
        <TableHeader></TableHeader>
        {entries.map((entry) => {
          return (
            <TableEntry
              entry={entry}
              index={index++}
              deleteHandler={deleteHandler}
              entries={entries}
              addEntry={addEntry}
              updateElement={updateElement}
            />
          );
        })}
      </table>
    </div>
  );
}

export default Table;
