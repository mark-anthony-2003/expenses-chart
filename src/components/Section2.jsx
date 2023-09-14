import { useState } from "react"
import { ExpensesData } from "../data/Expenses"

const Section2 = () => {
   const [selectedDays, setSelectedDays] = useState([])

   const handleShowAmount = (day) => {
      if (selectedDays.includes(day)) {
         setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day))
      } else {
         setSelectedDays([...selectedDays, day])
      }
   }

   return (
      <section className="bg-white p-6 rounded-2xl">
         <h2 className="text-[#382314] text-2xl font-semibold opacity-80">Spending - Last 7 days</h2>
         <div className="border-b border-[#f8e9dd] py-5">
            <ul className="flex justify-between items-end">
               { ExpensesData.map((day, dayIndex) => (
                  <div key={dayIndex} className="flex flex-col justify-end items-center gap-2 w-14 h-52">
                     { selectedDays.includes(day.day) && 
                        <div className="bg-[#382314] text-white font-medium text-center py-2 w-14 rounded-md">
                           ${day.amount}
                        </div>
                     }
                     <div 
                        onClick={() => handleShowAmount(day.day)}
                        className={`${ day.day === "wed" ? "bg-[#76b5bc]" : "bg-[#ec775f]" } ${ selectedDays.includes(day.day) && "opacity-60" } w-10 rounded-md cursor-pointer`}
                        style={{ height: `${day.amount * 3}px` }}
                     ></div>
                  </div>
               ))}
            </ul>
            <ul className="flex justify-between items-center">
               { ExpensesData.map((day, dayIndex) => <li key={dayIndex} className="text-[#382314] text-sm text-center opacity-80 w-14">{day.day}</li>)}
            </ul>
         </div>
         <div className="grid grid-cols-2 mt-6">
            <div className="col-span-1">
               <p className="text-[#382314] text-sm opacity-80">Total this month</p>
               <h1 className="text-[#382314] text-4xl font-semibold">$478.33</h1>
            </div>
            <div className="col-span-1 flex flex-col justify-end items-end">
               <p className="font-bold text-[#382314] opacity-90">+2.4%</p>
               <p className="text-[#382314] text-sm opacity-80">from last month</p>
            </div>
         </div>
      </section>
   )
}

export default Section2
