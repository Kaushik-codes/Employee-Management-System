import React, { useContext } from 'react'
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({task,employee}) => {
  const formatDate= (dateStr) => {
    const [year, month, day] = dateStr.split('-').map(Number);
    const months = ["January","February","March","April","May","June",
                    "July","August","September","October","November","December"];
    const suffix = day % 10 === 1 && day !== 11 ? 'st'
                : day % 10 === 2 && day !== 12 ? 'nd'
                : day % 10 === 3 && day !== 13 ? 'rd' : 'th';
    return `${day}${suffix} ${months[month - 1]} ${year}`;
  };
  const advDate = formatDate(task.date);

  const [userData,setUserData] = useContext(AuthContext);

  const handleAcceptTask = ()=>{
    const updatedData = userData.map((emp)=>{
      if(emp.id === employee.id){
        return {
          ...emp,
          tasks: emp.tasks.map((t)=>{
            if(t.title === task.title && t.newTask === true){
              return{
                ...t,
                active : true,
                newTask : false
              };
            }
            return t;
          }),
          taskNumbers: {
            ...emp.taskNumbers,
            active: (emp.taskNumbers.active || 0) + 1,
            newTask: (emp.taskNumbers.newTask || 0) - 1
          }
        }
      }
      return emp;
    });
    setUserData(updatedData);
  }

  return (
    <div>
      <div className="shrink-0 w-72 bg-sky-400/10 border border-sky-400/20 hover:border-sky-400/40 transition-all duration-200 h-full rounded-2xl px-5 py-6 flex flex-col justify-between">

        <div>
          <div className="flex flex-row justify-between items-center">
            <h3 className="bg-sky-400/20 text-sky-300 border border-sky-400/30 px-3 py-1 rounded-lg text-xs font-semibold tracking-widest uppercase">
              {task.category}
            </h3>
            <h4 className="text-xs font-medium text-slate-500">{advDate}</h4>
          </div>
          <h2 className="mt-4 text-lg font-bold text-slate-100">{task.title}</h2>
          <p className="text-sm mt-2 text-slate-400 leading-relaxed">
            {task.description}
          </p>
        </div>

        <div className='mt-6'>
          <button
            className='w-full bg-sky-400/10 hover:bg-sky-400/20 text-sky-400 border border-sky-400/20 hover:border-sky-400/40 px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-200'
            onClick={handleAcceptTask}
          >
            ✓ Accept Task
          </button>
        </div>

      </div>
    </div>
  )
}

export default NewTask