import BlankCompanyInfoPage from '../components/BlankCompanyInfoPage'
import MainTable, { getMainTableBody, getMainTableHead } from '../components/MainTable'
import GraphContainer from '../components/GraphContainer'
import HorizontalLine from '../components/HorizontalLine'
import { collectiveCompanies } from '../components/CompanySelector'
import { months } from '../components/MonthSelector'
import { useState, useEffect } from 'react'
import QuarterlyYearContainer from '../components/QuarterlyYearContainer'

function InfoPage({
  className,
  menupointId,
  subtitle,
  path,
  isSum,

  paramGetter,
  dataGetter,

  currentCompanyButtons,
  companyButtonsSetter,

  currentYear,
  yearSetter,

  currentMonth,
  monthSetter,

  currentGraphButtons,
  graphButtonsSetter,

  current_QuarterlyYearFilter_Buttons,
  current_MonthFilter_Buttons,

  quarterlyYearFilter_Buttons_Setter,
  monthFilter_Buttons_Setter,

  current_QuarterlyYearFilter_HeadButtons,
  current_MonthFilter_HeadButtons,

  quarterlyYearFilter_HeadButtons_Setter,
  monthFilter_HeadButtons_Setter
}) {

  const [data, setData] = useState([[], [[], []], [[], [], [], [], []], [[]], [[], []], [], [[], [], [], [], []], [[], []], []])


  const lastUpdate = data[0]

  const highlightedDataNames = data[1][0]
  const highlightedData = data[1][1]

  const monthTableDataNames = data[2][0]
  const monthTableAsterisks = data[2][1]
  const monthTableFooters = data[2][2]
  const monthTableData = data[2][3]
  const monthTableDataSums = data[2][4]

  const graphSelectorDataNames = data[3]

  const monthGraphDataName = data[4][0]
  const monthGraphData = data[4][1]

  const monthGraphColumnData = data[5]

  const quarterlyYearTableDataNames = data[6][0]
  const quarterlyYearTableAsterisks = data[6][1]
  const quarterlyYearTableFooters = data[6][2]
  const quarterlyYearTableData = data[6][3]
  const quarterlyYearTableDataSums = data[6][4]

  const quarterlyYearGraphDataName = data[7][0]
  const quarterlyYearGraphData = data[7][1]

  const quarterlyYearGraphColumnData = data[8]


  const isData = monthTableData.length > 0

  const companyParam = paramGetter("company", currentCompanyButtons, true)
  const yearParam = paramGetter("year", [currentYear], false)
  const month0Param = paramGetter("month0", [currentMonth], false)
  const graphParam = paramGetter("graph", [isData ? currentGraphButtons[0] : 0], false)
  const month1Param = paramGetter("month1", current_MonthFilter_Buttons, false)
  const quarterlyYearParam = paramGetter("quarterlyYear", current_QuarterlyYearFilter_Buttons, false)

  const paramPath = path + companyParam + yearParam + month0Param + graphParam + month1Param + quarterlyYearParam


  useEffect(() => {

    dataGetter(paramPath, setData)
  },

    [dataGetter, paramPath]
  )


  const elements = []
  const currentMonths = getElementsByIndexesFromArray(months, current_MonthFilter_Buttons)

  elements.push(

    <div key={0} className="main-table-container">

      <MainTable name="main-table"

        tHead={

          getMainTableHead(

            currentMonths,
            13,
            isSum
          )
        }

        tBody={

          getMainTableBody(

            isData,
            menupointId,
            13,

            monthTableDataNames,
            monthTableAsterisks,
            monthTableData,
            monthTableDataSums
          )
        }

        tFoot={

          isData ? monthTableFooters[menupointId] : []
        }
      />

      <HorizontalLine />

    </div>
  )

  elements.push(

    <GraphContainer
      key={1}

      title={

        (isData ? monthGraphDataName[0][0] : "") + " - " + collectiveCompanies[currentCompanyButtons[0]]
      }

      buttons={

        graphSelectorDataNames.map(d => {

          return d[0]
        })
      }

      buttonIndexes={

        graphSelectorDataNames.map(d => {

          return d[1]
        })
      }

      currentGraphButtons={currentGraphButtons}
      graphButtonsSetter={graphButtonsSetter}

      graphRow={currentMonths}
      graphColumn={isData ? monthGraphColumnData : [0, 1, 2, 3, 4, 5]}
      graphValues={monthGraphData}
      maxRowLength={13}
    />
  )

  elements.push(

    <QuarterlyYearContainer
      isSum={isSum}

      tBody={

        getMainTableBody(

          isData,
          menupointId,
          5,

          quarterlyYearTableDataNames,
          quarterlyYearTableAsterisks,
          quarterlyYearTableData,
          quarterlyYearTableDataSums
        )
      }

      tFoot={

        isData ? quarterlyYearTableFooters[menupointId] : []
      }

      graphTitle={

        (isData ? quarterlyYearGraphDataName[0][0] : "") + " - " + collectiveCompanies[currentCompanyButtons[0]]
      }

      graphColumnData={isData ? quarterlyYearGraphColumnData : [0, 1, 2, 3, 4, 5]}
      graphData={quarterlyYearGraphData}

      current_QuarterlyYearFilter_Buttons={current_QuarterlyYearFilter_Buttons}
      current_MonthFilter_Buttons={current_MonthFilter_Buttons}

      quarterlyYearFilter_Buttons_Setter={quarterlyYearFilter_Buttons_Setter}
      monthFilter_Buttons_Setter={monthFilter_Buttons_Setter}

      current_QuarterlyYearFilter_HeadButtons={current_QuarterlyYearFilter_HeadButtons}
      current_MonthFilter_HeadButtons={current_MonthFilter_HeadButtons}

      quarterlyYearFilter_HeadButtons_Setter={quarterlyYearFilter_HeadButtons_Setter}
      monthFilter_HeadButtons_Setter={monthFilter_HeadButtons_Setter}
    />
  )

  return (

    <div className={className}>

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

function getElementsByIndexesFromArray(array, indexArray) {

  let subArray = []

  if (indexArray.length > 0) {

    for (let i = 0; i < indexArray.length; i++) {

      subArray.push(array[indexArray[i]])
    }
  }
  else {

    subArray = array;
  }

  return subArray;
}

export default InfoPage
export { getElementsByIndexesFromArray }