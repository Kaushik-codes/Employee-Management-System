import React, { useEffect, useState } from "react";

const Header = (props) => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (!props.name) {
      setUsername("Admin");
    } else {
      setUsername(props.name);
    }
  }, [props.name]);
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser(null);
  };
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-6">
      <h1 className="select-none leading-tight">
        <span className="text-sm font-medium text-slate-500 tracking-widest uppercase">Welcome back</span>
        <br />
        <span className="text-4xl font-bold text-slate-100">{username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="text-sm cursor-pointer font-medium text-rose-400 border border-rose-400/30 bg-rose-400/10 hover:bg-rose-400/20 hover:border-rose-400/50 px-5 py-2 rounded-xl transition-all duration-200"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;