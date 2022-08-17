import React from "react";

export default function UserInput() {
  return (
    <form>
      <label>
        Stock : <input type="text" />
      </label>
      <label>
        Social Media : <input type="text" />
      </label>
      <label>
        Time Window : <input type="number" />
      </label>
    </form>
  );
}
