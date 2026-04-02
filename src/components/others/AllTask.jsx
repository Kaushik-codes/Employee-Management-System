import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  if (!userData) {
    return (
      <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-5 rounded-xl mt-5 text-slate-400 text-sm">
        Loading...
      </div>
    );
  }
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-5 rounded-2xl mt-8">

      {/* Table Header */}
      <div className="grid grid-cols-5 bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-2">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest text-center">Employee</h3>
        <h3 className="text-xs font-semibold text-sky-400 uppercase tracking-widest text-center">New</h3>
        <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-widest text-center">Active</h3>
        <h3 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest text-center">Completed</h3>
        <h3 className="text-xs font-semibold text-rose-400 uppercase tracking-widest text-center">Failed</h3>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-1">
        {userData.map((emp, idx) => (
          <div
            key={idx}
            className="grid grid-cols-5 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors duration-150 border border-transparent hover:border-white/10"
          >
            <h3 className="text-sm font-semibold text-slate-200 text-center">{emp.firstname}</h3>
            <h3 className="text-sm font-semibold text-sky-400 text-center">{emp.taskNumbers.newTask}</h3>
            <h3 className="text-sm font-semibold text-amber-400 text-center">{emp.taskNumbers.active}</h3>
            <h3 className="text-sm font-semibold text-emerald-400 text-center">{emp.taskNumbers.completed}</h3>
            <h3 className="text-sm font-semibold text-rose-400 text-center">{emp.taskNumbers.failed}</h3>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AllTask;