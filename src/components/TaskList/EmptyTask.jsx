import React from 'react'

const EmptyTask = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-52 gap-4">
      
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10">
        <span className="text-3xl">🎯</span>
      </div>

      <div className="text-center">
        <h2 className="text-lg font-bold text-slate-200">All clear!</h2>
        <p className="text-sm text-slate-500 mt-1">You have no tasks assigned right now.</p>
        <p className="text-xs text-slate-600 mt-0.5">Enjoy the calm — new tasks will appear here.</p>
      </div>

    </div>
  )
}

export default EmptyTask