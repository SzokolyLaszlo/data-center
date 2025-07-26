import FoodBank from '../components/FoodBank'
import CrisisAccommodation from '../components/CrisisAccommodation'
import BlankCompanyInfoPage from '../components/BlankCompanyInfoPage'
import { useState, useEffect } from 'react'

function SocialValuesInfoPage({
  subtitle,
  path,

  paramGetter,
  dataGetter,

  currentCompanyButtons,
  companyButtonsSetter,

  currentYear,
  yearSetter,

  currentMonth,
  monthSetter
}) {

  const [data, setData] = useState([ [], [[], []], [[], [], [], [], []] ])


  const lastUpdate                    = data[0]

  const highlightedDataNames          = data[1][0]
  const highlightedData               = data[1][1]

  const quarterlyYearTableDataNames   = data[2][0]
  const quarterlyYearTableAsterisks   = data[2][1]
  const quarterlyYearTableFooters     = data[2][2]
  const quarterlyYearTableData        = data[2][3]
  const quarterlyYearTableDataSums    = data[2][4]

  
  const isData = quarterlyYearTableData.length > 0

  const companyParam  = paramGetter("company",  currentCompanyButtons,  true )
  const yearParam     = paramGetter("year",     [currentYear],          false)
  const month0Param   = paramGetter("month0",   [currentMonth],         false)

  const paramPath     = path + companyParam + yearParam + month0Param


  useEffect(() => {

    dataGetter(paramPath, setData)
  },
  
    [dataGetter, paramPath]
  )

  
  const elements = []

  elements.push(

    <FoodBank
      key={0}
      isData={isData}

      quarterlyYearTableDataNames={quarterlyYearTableDataNames}
      quarterlyYearTableAsterisks={quarterlyYearTableAsterisks}
      quarterlyYearTableFooters={quarterlyYearTableFooters[8]}
      quarterlyYearTableData={quarterlyYearTableData}
      quarterlyYearTableDataSums={quarterlyYearTableDataSums}
    />
  )
  
  elements.push(

    <CrisisAccommodation
      key={1}
    />
  )

  return (

    <div className="info-page">

        <BlankCompanyInfoPage
          subtitle={subtitle}

          currentCompanyButtons={currentCompanyButtons}
          companyButtonsSetter={companyButtonsSetter}

          currentYear={currentYear}
          yearSetter={yearSetter}

          currentMonth={currentMonth}
          monthSetter={monthSetter}

          date={lastUpdate}

          elements={elements}

          dataNames={highlightedDataNames}
          data={highlightedData}
        />

    </div>
  )
}

export default SocialValuesInfoPage