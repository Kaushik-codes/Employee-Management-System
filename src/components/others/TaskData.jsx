import React from 'react'

const TaskData = ({data}) => {
  return (
    <div className='flex w-full mt-10 justify-between gap-4'>
        <div className='rounded-2xl bg-amber-400/10 border border-amber-400/20 hover:bg-amber-400/15 hover:border-amber-400/40 transition-all duration-200 w-[45%] py-6 px-7 cursor-default'>
            <h2 className="text-4xl font-bold text-amber-400">{data.taskNumbers.active}</h2>
            <h3 className="text-sm font-medium text-amber-400/70 mt-1 uppercase tracking-widest">Active Tasks</h3>
        </div>
        <div className='rounded-2xl bg-emerald-400/10 border border-emerald-400/20 hover:bg-emerald-400/15 hover:border-emerald-400/40 transition-all duration-200 w-[45%] py-6 px-7 cursor-default'>
            <h2 className="text-4xl font-bold text-emerald-400">{data.taskNumbers.completed}</h2>
            <h3 className="text-sm font-medium text-emerald-400/70 mt-1 uppercase tracking-widest">Completed Tasks</h3>
        </div>
        <div className='rounded-2xl bg-sky-400/10 border border-sky-400/20 hover:bg-sky-400/15 hover:border-sky-400/40 transition-all duration-200 w-[45%] py-6 px-7 cursor-default'>
            <h2 className="text-4xl font-bold text-sky-400">{data.taskNumbers.newTask}</h2>
            <h3 className="text-sm font-medium text-sky-400/70 mt-1 uppercase tracking-widest">New Tasks</h3>
        </div>
        <div className='rounded-2xl bg-rose-400/10 border border-rose-400/20 hover:bg-rose-400/15 hover:border-rose-400/40 transition-all duration-200 w-[45%] py-6 px-7 cursor-default'>
            <h2 className="text-4xl font-bold text-rose-400">{data.taskNumbers.failed}</h2>
            <h3 className="text-sm font-medium text-rose-400/70 mt-1 uppercase tracking-widest">Failed Tasks</h3>
        </div>
    </div>
  )
}

export default TaskData