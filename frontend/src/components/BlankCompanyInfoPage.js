import Header from './Header'
import MiniHeader from './MiniHeader'
import HighlightedDataContainer from './HighlightedDataContainer'
import BlankInfoPage from './BlankInfoPage'

function BlankCompanyInfoPage({
  
  subtitle,
  
  currentCompanyButtons,
  companyButtonsSetter,

  currentYear,
  yearSetter,

  currentMonth,
  monthSetter,

  date,
  
  elements,
  
  dataNames,
  data
}) {

  const headerElements = []

  headerElements.push(
    
    <MiniHeader
      key={0}

      currentCompanyButtons={currentCompanyButtons}
      companyButtonsSetter={companyButtonsSetter}

      currentYear={currentYear}
      yearSetter={yearSetter}

      currentMonth={currentMonth}
      monthSetter={monthSetter}

      date={date}
    />    
  )

  headerElements.push(

    <HighlightedDataContainer key={1} dataNames={dataNames} data={data}/>
  )
    
  return (

    <div className="blank-company-info-page">

      <BlankInfoPage type="company-info" subtitle={subtitle}/>

      <Header
        elements={headerElements}
      />

      {
        elements.map(element => {

          return (

            element
          )
        })
      }

    </div>
  )
}

export default BlankCompanyInfoPage