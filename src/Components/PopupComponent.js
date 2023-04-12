import React from "react";

function Popup({ state, addEntry, updateElement, closePopup }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (state.name === "")
          addEntry({
            name: e.target[0].value,
            phoneNumber: e.target[1].value,
            email: e.target[2].value,
            address: e.target[3].value,
          });
        else
          updateElement(state.id, {
            name: e.target[0].value,
            phoneNumber: e.target[1].value,
            email: e.target[2].value,
            address: e.target[3].value,
          });
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";
        closePopup();
        // {debugger}
      }}
    >
      <p>
        Name :{" "}
        <input
          type="text"
          name="Name"
          defaultValue={state.name}
          required
        ></input>
      </p>
      <p>
        Phone Number :{" "}
        <input
          type="text"
          pattern="[0-9]{10}"
          name="phoneNumber"
          defaultValue={state.phoneNumber}
          required
        ></input>
      </p>
      <p>
        Email :{" "}
        <input
          type="email"
          name="email"
          defaultValue={state.email}
          required
        ></input>
      </p>
      <p>
        Address :{" "}
        <textarea
          type="text"
          name="address"
          defaultValue={state.address}
          required
        ></textarea>
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Popup;
