import React, { useContext } from "react";
import { toast } from "sonner"
import { AuthContext } from "../../context/AuthProvider";

const CompleteTask = ({ task, employee }) => {
  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
          ? "nd"
          : day % 10 === 3 && day !== 13
            ? "rd"
            : "th";
    return `${day}${suffix} ${months[month - 1]} ${year}`;
  };
  const advDate = formatDate(task.date);

  const [userData, setUserData] = useContext(AuthContext);

  const handleRemove = () => {
    const updatedData = userData.map((emp) => {
      if (emp.id === employee.id) {
        return {
          ...emp,
          tasks: emp.tasks.filter(
            (t) => !(t.title === task.title && t.completed),
          ),
          taskNumbers: {
            ...emp.taskNumbers,
            completed: emp.taskNumbers.completed - 1,
          },
        };
      }
      return emp;
    });
    setUserData(updatedData);
    toast("Task is removed.");
  };

  return (
    <div>
      <div className="shrink-0 w-72 bg-emerald-400/10 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-200 h-full rounded-2xl px-5 py-6 flex flex-col justify-between">
        <div>
          <div className="flex flex-row justify-between items-center">
            <h3 className="bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-lg text-xs font-semibold tracking-widest uppercase">
              {task.category}
            </h3>
            <h4 className="text-xs font-medium text-slate-500">{advDate}</h4>
          </div>
          <h2 className="mt-4 text-lg font-bold text-slate-100">
            {task.title}
          </h2>
          <p className="text-sm mt-2 text-slate-400 leading-relaxed">
            {task.description}
          </p>
        </div>

        <div className="mt-6">
          <button
            className="w-full bg-rose-400/10 hover:bg-rose-400/20 text-rose-400 border border-rose-400/20 hover:border-rose-400/40 px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-200"
            onClick={handleRemove}
          >
            ✕ Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;
