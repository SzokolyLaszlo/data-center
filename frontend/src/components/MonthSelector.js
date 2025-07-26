import DropDownList from './DropDownList'

function MonthSelector({ currentMonth, monthSetter }) {

  return (

    <DropDownList
      itemType="month"
      items={months}
      currentItem={currentMonth}
      itemSetter={monthSetter}
    />
  )
}

const months = [
  
  "Január",
  "Február",
  "Március",
  "Április",
  "Május",
  "Június",
  "Július",
  "Augusztus",
  "Szeptember",
  "Október",
  "November",
  "December"
]

export default MonthSelector
export { months }