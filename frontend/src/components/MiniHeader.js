import '../styles/MiniHeader.css'
import CompanySelector from './CompanySelector'
import DateSelector from './DateSelector'
import LastUpdate from './LastUpdate'

function MiniHeader({
  currentCompanyButtons, companyButtonsSetter,

  currentYear, yearSetter,
  currentMonth, monthSetter,
  
  date
}) {

  return (

    <header className="mini-header">

        <CompanySelector
          collectiveButton={true}
          currentCompanyButtons={currentCompanyButtons}
          companyButtonsSetter={companyButtonsSetter}
        />

        <DateSelector
          currentYear={currentYear}
          yearSetter={yearSetter}

          currentMonth={currentMonth}
          monthSetter={monthSetter}
        />

        <LastUpdate date={date}/>

      </header>
  )
}

export default MiniHeader