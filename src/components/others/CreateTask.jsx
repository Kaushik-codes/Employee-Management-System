import React, { useContext, useState } from "react";
import { Toaster, toast } from "sonner";
import { AuthContext } from "../../context/AuthProvider";

const Field = ({ label, children }) => (
  <div className="flex flex-col gap-1.5 animate-fadeIn">
    <label className="text-sm font-semibold text-sky-300 tracking-wide uppercase">
      {label}
    </label>
    {children}
  </div>
);

const inputClass = `
  w-full bg-white/5 border border-white/10 text-white text-sm
  px-4 py-2.5 rounded-xl placeholder:text-gray-500
  focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/40
  hover:border-white/20 transition-all duration-200
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
      setUserData(data); //update userData state
      toast.success("Task created successfully");
      setForm(INITIAL_STATE); //reset form
    } else {
      toast.error(`No employee found named ${form.assignTo}`);
    }
  };

  return (
    <div>
      <Toaster richColors position="top-center" />
      <div className="mt-10 max-w-xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/40">
          <h2 className="text-2xl font-bold text-white mb-1">
            Create New Task
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Fill in the details to assign a task
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Field label="Task Title">
              <input
                name="title"
                type="text"
                placeholder="e.g. Design landing page"
                value={form.title}
                onChange={handleChange}
                className={inputClass}
                required
              />
              {/* React sees everything between the opening and closing tag as children. It packages it up 
              and passes it as a prop automatically — you don't do anything special. */}
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
                  type="text"
                  placeholder="Employee name"
                  value={form.assignTo}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="" style={{ backgroundColor: '#0d1117', color: '#475569' }}>
                    Select employee
                    </option>

                  {
                    userData.map((emp,idx)=>(
                      <option 
                      key={idx} 
                      value={emp.firstname}
                      style={{backgroundColor: '#0d1117', color: '#f1f5f9'}}>
                        {emp.firstname}
                      </option>
                    ))
                  }
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

            <button
              type="submit"
              className="mt-2 w-full py-3 rounded-xl font-semibold text-sm tracking-wide
                         bg-sky-600 hover:bg-sky-500 active:scale-[0.98]
                         text-white shadow-lg shadow-sky-900/40
                         hover:shadow-sky-700/40
                         transition-all duration-200 cursor-pointer"
            >
              Create Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
