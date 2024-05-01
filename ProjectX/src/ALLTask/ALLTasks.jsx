import React from 'react'
import RandomName from './RandomName'
import FontSize from './FontSize'
import TaskImg from './TaskImg'
import ButtonBack from './ButtonBack'
import Factorial from './Factorial'
import DaysMonth from './DaysMonth'
import MonthDays from './MonthDays'
import DaysAndMonth from './DaysAndMonth'

export default function ALLTasks() {
  return (
    <div>
        {/* <RandomName/> */}
        {/* <FontSize/> */}
        {/* <TaskImg/> */}
        {/* <ButtonBack/> */}     
        
        <Factorial/>
        <DaysMonth/>
          <MonthDays/>
        <DaysAndMonth/>
    </div>
  )
}
