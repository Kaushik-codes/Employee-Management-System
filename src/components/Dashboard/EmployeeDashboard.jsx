import React from 'react'
import Header from '../others/Header'
import TaskData from '../others/TaskData'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  if(!props.data){
    return null;  // wait until data is ready
  }

  return (
    <div className='p-10 bg-[#080a0f] min-h-screen'>
        <Header changeUser={props.changeUser} name={props.data.firstname}/>
        <TaskData data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard