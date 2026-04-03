import React, { useContext, useState } from "react";
import { Toaster, toast } from "sonner";
import { AuthContext } from "../../context/AuthProvider";
import AIbutton from "./AIbutton";

const Field = ({ label, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-semibold text-slate-400 tracking-widest uppercase">
      {label}
    </label>
    {children}
  </div>
);

const inputClass = `
  w-full bg-white/[0.03] border border-white/5 text-slate-100 text-sm
  px-4 py-3 rounded-xl placeholder:text-slate-600
  focus:outline-none focus:ring-1 focus:ring-sky-500/40 focus:border-sky-500/30 focus:bg-white/[0.06]
  hover:border-white/10 hover:bg-white/[0.05] transition-all duration-200
`;

const INITIAL_STATE = {
  title: "",
  description: "",
  date: "",
  assignTo: "",
  category: "",
};

const CreateTask = () => {
  const [form, setForm] = useState(INITIAL_STATE);
  const [userData, setUserData] = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalForm = {
      ...form,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };
    const data = JSON.parse(JSON.stringify(userData));
    let found = false;
    data.forEach((emp) => {
      if (emp.firstname.toLowerCase() === form.assignTo.toLowerCase()) {
        emp.tasks.push(finalForm);
        emp.taskNumbers.newTask++;
        found = true;
      }
    });

    if (found === true) {
      setUserData(data);
      toast.success("Task created successfully");
      setForm(INITIAL_STATE);
      console.log(finalForm);
    } else {
      toast.error(`No employee found named ${form.assignTo}`);
    }
  };

  const handleData = (data) => {
    try {
      const cleanJSON = data.replace(/```json|```/g, "").trim();
      const parsedData = JSON.parse(cleanJSON);
      setForm((prev) => ({
        ...prev,
        description: parsedData.description || prev.description || "",
        category: parsedData.category || prev.category || "",
      }));
      toast.success("AI updated the description and category");
    } catch (err) {
      console.log("Passed error: ", err);
    }
  };

  return (
    <div>
      <Toaster richColors position="top-center" />
      <div className="mt-10 max-w-xl mx-auto">
        <div className="bg-white/2 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-2xl shadow-black/60">

          {/* Header */}
          <div className="mb-8 pb-6 border-b border-white/5">
            <h2 className="text-xl font-bold text-slate-100">
              Create New Task
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Fill in the details to assign a task to an employee
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            <Field label="Task Title">
              <div className="flex gap-2">
                <input
                  name="title"
                  type="text"
                  placeholder="e.g. Design landing page"
                  value={form.title}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
                <AIbutton title={form.title} onSendData={handleData} />
              </div>
            </Field>

            <Field label="Description">
              <textarea
                className={inputClass}
                name="description"
                placeholder="Describe the task in detail..."
                value={form.description}
                rows={4}
                onChange={handleChange}
              />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Due Date">
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className={`${inputClass} scheme-dark`}
                />
              </Field>

              <Field label="Assign To">
                <select
                  name="assignTo"
                  value={form.assignTo}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option
                    value=""
                    style={{ backgroundColor: "#0d1117", color: "#475569" }}
                  >
                    Select employee
                  </option>
                  {userData.map((emp, idx) => (
                    <option
                      key={idx}
                      value={emp.firstname}
                      style={{ backgroundColor: "#0d1117", color: "#f1f5f9" }}
                    >
                      {emp.firstname}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Category">
              <input
                name="category"
                type="text"
                placeholder="e.g. Design, Dev, QA"
                value={form.category}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <div className="pt-2 border-t border-white/5 mt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-sm tracking-wide
                           bg-sky-500/10 hover:bg-sky-500/20
                           border border-sky-500/20 hover:border-sky-500/40
                           text-sky-400 hover:text-sky-300
                           active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Create Task →
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;