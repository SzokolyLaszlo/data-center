import '../styles/QuarterlyYearContainer.css'
import HorizontalLine from './HorizontalLine'
import { getElementsByIndexesFromArray } from '../pages/InfoPage'
import MainTable, { getMainTableHead } from './MainTable'
import FilterSelector from './FilterSelector'
import { months } from './MonthSelector'
import Graph from './Graph'

function QuarterlyYearContainer({
    isSum,

    tBody,
    tFoot,

    graphTitle,

    graphColumnData,
    graphData,

    current_QuarterlyYearFilter_Buttons,
    quarterlyYearFilter_Buttons_Setter,

    current_QuarterlyYearFilter_HeadButtons,
    quarterlyYearFilter_HeadButtons_Setter,

    current_MonthFilter_Buttons,
    monthFilter_Buttons_Setter,

    current_MonthFilter_HeadButtons,
    monthFilter_HeadButtons_Setter
}) {

    const currentQuarterlyYears = getElementsByIndexesFromArray(quarterlyYears, current_QuarterlyYearFilter_Buttons)

    return (

        <div className="quarterly-year-container">

            <HorizontalLine />

            <div className="quarterly-year-subcontainer">

                <MainTable
                    name="main-table"

                    tHead={

                        getMainTableHead(
                            
                            currentQuarterlyYears,
                            5,
                            isSum
                        )
                    }

                    tBody={tBody}

                    tFoot={tFoot}
                />

                <Graph
                    title={graphTitle}

                    gRow={currentQuarterlyYears}
                    gColumn={graphColumnData}
                    gValues={graphData}
                    maxRowLength={5}
                />

                <div className="filter-selector-container">

                    <FilterSelector
                        className="filter-selector"
                        name="Hónap"
                        orientation="vertical"

                        buttons={months}
                        buttonIndexes={

                            months.map((e, idx) => {

                                return idx
                            })
                        }

                        currentFilterButtons={current_MonthFilter_Buttons}
                        filterButtonsSetter={monthFilter_Buttons_Setter}

                        currentFilterHeadButtons={current_MonthFilter_HeadButtons}
                        filterHeadButtonsSetter={monthFilter_HeadButtons_Setter}
                    />

                    <FilterSelector
                        className="filter-selector"
                        name="Negyedév"
                        orientation="vertical"

                        buttons={quarterlyYears}
                        buttonIndexes={

                            quarterlyYears.map((e, idx) => {

                                return idx
                            })
                        }

                        currentFilterButtons={current_QuarterlyYearFilter_Buttons}
                        filterButtonsSetter={quarterlyYearFilter_Buttons_Setter}

                        currentFilterHeadButtons={current_QuarterlyYearFilter_HeadButtons}
                        filterHeadButtonsSetter={quarterlyYearFilter_HeadButtons_Setter}
                    />

                </div>

            </div>

        </div>
    )
}

const quarterlyYears = [

    "I. negyedév",
    "II. negyedév",
    "III. negyedév",
    "IV. negyedév"
]

export default QuarterlyYearContainer
export { quarterlyYears }