import DropDownList from './DropDownList'

function YearSelector({ currentYear, yearSetter }) {

  return (

    <DropDownList
      itemType="year"
      items={years}
      currentItem={currentYear}
      itemSetter={yearSetter}
    />
  )
}

const years =
  [
    "2024",
    "2025"
  ]

export default YearSelector
export { years }