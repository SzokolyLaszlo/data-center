import { useState, useEffect } from 'react'
import LastUpdate from '../components/LastUpdate'
import FilterSelector from '../components/FilterSelector'
import BlankInfoPage from '../components/BlankInfoPage'
import Header from '../components/Header'
import CostCentreCatalogue from '../components/CostCentreCatalogue'
import SearchBar from '../components/SearchBar'

function CostCentreCatalogueInfoPage({
  type,
  subtitle,
  path,

  paramGetter,
  dataGetter,

  currentSearchInput, searchInputSetter,

  currentFilter1Buttons, filter1ButtonsSetter,
  currentFilter2Buttons, filter2ButtonsSetter,
  currentFilter3Buttons, filter3ButtonsSetter,
  currentFilter4Buttons, filter4ButtonsSetter,
  currentFilter5Buttons, filter5ButtonsSetter,

  currentFilter1HeadButtons, filter1HeadButtonsSetter,
  currentFilter2HeadButtons, filter2HeadButtonsSetter,
  currentFilter3HeadButtons, filter3HeadButtonsSetter,
  currentFilter4HeadButtons, filter4HeadButtonsSetter,
  currentFilter5HeadButtons, filter5HeadButtonsSetter
}) {

  const [data, setData] = useState([ [], [ [] , [], [], [], [] ], [ [], [] ] ])

  const lastUpdate = data[0]
  const companyDataNames = data[1][0]
  const statusDataNames = data[1][1]
  const typeDataNames = data[1][2]
  const directorateDataNames = data[1][3]
  const organizationDataNames = data[1][4]
  const infoTableDataNames = data[2][0]
  const infoTableData = data[2][1]

  const isDataNames = infoTableDataNames.length > 0
  const isData = infoTableData.length > 0

  const [currentTableHeadFilterButton, setTableHeadFilterButton] = useState(-1)

  const multipleFilterButtons = [

    currentFilter1HeadButtons[0],
    currentFilter2HeadButtons[0],
    currentFilter3HeadButtons[0],
    currentFilter4HeadButtons[0],
    currentFilter5HeadButtons[0]
  ]

  const multipleFiltersParam = paramGetter("multipleFilters", multipleFilterButtons, true)
  const companyParam = paramGetter("company", currentFilter1Buttons, false) 
  const statusParam = paramGetter("status", currentFilter2Buttons, false)
  const typeParam = paramGetter("type", currentFilter3Buttons, false)
  const directorateParam = paramGetter("directorate", currentFilter4Buttons, false)
  const organizationParam = paramGetter("organization", currentFilter5Buttons, false)

  const paramPath = path + multipleFiltersParam + companyParam + statusParam + typeParam + directorateParam + organizationParam

  useEffect(() => {

    dataGetter(paramPath, setData)
  },

    [dataGetter, paramPath]
  )

  const elements = []

  elements.push(

    <div key={0} className="search-bar-container">

      <SearchBar
        currentSearchInput={currentSearchInput}
        searchInputSetter={searchInputSetter}
      />

      <LastUpdate
        date={lastUpdate}
      />

    </div>
  )

  elements.push(

    <div key={1} className="head-filter-container">

      <FilterSelector
        className="filter-selector"
        name="Vállalat"
        orientation="horizontal"

        buttons={

          companyDataNames.map(d => {

            return d[0]
          })
        }

        buttonIndexes={

          companyDataNames.map(d => {

            return d[2]
          })
        }

        currentFilterButtons={currentFilter1Buttons}
        filterButtonsSetter={filter1ButtonsSetter}

        currentFilterHeadButtons={currentFilter1HeadButtons}
        filterHeadButtonsSetter={filter1HeadButtonsSetter}
      />

      <FilterSelector
        className="filter-selector"
        name="Aktív?"
        orientation="horizontal"

        buttons={

          statusDataNames.map(d => {

            return d[0]
          })
        }

        buttonIndexes={

          statusDataNames.map(d => {

            return d[2]
          })
        }

        currentFilterButtons={currentFilter2Buttons}
        filterButtonsSetter={filter2ButtonsSetter}

        currentFilterHeadButtons={currentFilter2HeadButtons}
        filterHeadButtonsSetter={filter2HeadButtonsSetter}
      />

      <FilterSelector
        className="filter-selector"
        name="Költséghely típus"
        orientation="horizontal"

        buttons={

          typeDataNames.map(d => {

            return d[0]
          })
        }

        buttonIndexes={

          typeDataNames.map(d => {

            return d[2]
          })
        }

        currentFilterButtons={currentFilter3Buttons}
        filterButtonsSetter={filter3ButtonsSetter}

        currentFilterHeadButtons={currentFilter3HeadButtons}
        filterHeadButtonsSetter={filter3HeadButtonsSetter}
      />

    </div>
  )

  return (

    <div className="info-page">

      <BlankInfoPage
        type={type}
        subtitle={subtitle}
      />

      <Header
        elements={elements}
      />

      <CostCentreCatalogue
        directorateDataNames={directorateDataNames}
        organizationDataNames={organizationDataNames}

        infoTableDataNames={isDataNames ? infoTableDataNames : [[]] }
        infoTableData={isData ? infoTableData : [[]] }
        searchInput={currentSearchInput}

        currentFilter4Buttons={currentFilter4Buttons}
        filter4ButtonsSetter={filter4ButtonsSetter}
        currentFilter5Buttons={currentFilter5Buttons}
        filter5ButtonsSetter={filter5ButtonsSetter}

        currentFilter4HeadButtons={currentFilter4HeadButtons}
        filter4HeadButtonsSetter={filter4HeadButtonsSetter}
        currentFilter5HeadButtons={currentFilter5HeadButtons}
        filter5HeadButtonsSetter={filter5HeadButtonsSetter}

        currentTableHeadFilterButton={currentTableHeadFilterButton}
        tableHeadFilterButtonSetter={setTableHeadFilterButton}
      />

    </div>
  )
}

export default CostCentreCatalogueInfoPage