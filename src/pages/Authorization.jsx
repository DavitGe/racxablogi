import React from "react";

function onAuth(e) {
  e.preventDefault();
}

const Authorization = () => {
  return (
    <form onSubmit={onAuth}>
      <header>
        <h1 style={{ paddingBottom: 0, marginBottom: 0 }}>Authorization</h1>
      </header>
      <div className="formGroup">
        <label>Username</label>
        <input placeholder="Enter your username..." />
      </div>
      <div className="formGroup">
        <label>password</label>
        <input placeholder="Enter your password..." type="password" />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
};

export default Authorization;
