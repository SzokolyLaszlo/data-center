import YearSelector from "./YearSelector"
import MonthSelector from "./MonthSelector"

function DateSelector({ currentYear, yearSetter, currentMonth, monthSetter }) {

  return (

    <div className="date-selector">

        <YearSelector
          currentYear={currentYear}
          yearSetter={yearSetter}
        />

        <MonthSelector
          currentMonth={currentMonth}
          monthSetter={monthSetter}
        />

    </div>
  )
}

export default DateSelector