import '../styles/CostCentreCatalogue.css'
import FilterSelector from './FilterSelector'
import InfoTable from './InfoTable'

function CostCentreCatalogue({
  directorateDataNames, organizationDataNames,

  infoTableDataNames, infoTableData,
  searchInput,

  currentFilter4Buttons, filter4ButtonsSetter,
  currentFilter5Buttons, filter5ButtonsSetter,

  currentFilter4HeadButtons, filter4HeadButtonsSetter,
  currentFilter5HeadButtons, filter5HeadButtonsSetter,

  currentTableHeadFilterButton, tableHeadFilterButtonSetter
}) {

  return (

    <div className="cost-centre-catalogue">

      <div className="cost-centre-table-container">

        <div className="side-filter-container">

          <FilterSelector
            className="side-filter-selector"
            name="Igazgatóság"
            orientation="vertical"

            buttons={

              directorateDataNames.map(d => {

                return d[0]
              })
            }

            buttonIndexes={

              directorateDataNames.map(d => {

                return d[2]
              })
            }

            currentFilterButtons={currentFilter4Buttons}
            filterButtonsSetter={filter4ButtonsSetter}

            currentFilterHeadButtons={currentFilter4HeadButtons}
            filterHeadButtonsSetter={filter4HeadButtonsSetter}
          />

          <FilterSelector
            className="side-filter-selector"
            name="Szervezet"
            orientation="vertical"

            buttons={

              organizationDataNames.map(d => {

                return d[0]
              })
            }

            buttonIndexes={

              organizationDataNames.map(d => {

                return d[2]
              })
            }

            currentFilterButtons={currentFilter5Buttons}
            filterButtonsSetter={filter5ButtonsSetter}

            currentFilterHeadButtons={currentFilter5HeadButtons}
            filterHeadButtonsSetter={filter5HeadButtonsSetter}
          />

        </div>

        <InfoTable
          columnNames={infoTableDataNames}
          tableData={infoTableData}
          searchInput={searchInput}

          currentTableHeadFilterButton={currentTableHeadFilterButton}
          tableHeadFilterButtonSetter={tableHeadFilterButtonSetter}
        />

      </div>

    </div>
  )
}

export default CostCentreCatalogue