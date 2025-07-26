import '../styles/Graph.css'
import GraphArray from './GraphArray'
import GraphTable from './GraphTable'
import { fillRowWithString } from './MainTable'

function Graph({title, gRow, gColumn, gValues, maxRowLength}) {

    const columnFractionHeightInEm = 1.3
    const columnFractionPaddingInEm = 0.125
    const columnFractionBorderBottomInEm = 0.0625
    const graphValueHeightInEm = 1

    const fullColumnFractionHeightInEm = columnFractionHeightInEm + (2 * columnFractionPaddingInEm) + columnFractionBorderBottomInEm

    const columnFractionHeight = columnFractionHeightInEm + "em"
    const columnFractionPadding = columnFractionPaddingInEm + "em 0"
    const columnFractionBorderBottom = columnFractionBorderBottomInEm + "em solid rgb(77, 77, 77, 0.2)"

    maxRowLength = maxRowLength === undefined ? gRow.length + 1 : maxRowLength
    
    const tHead = fillRowWithString(["", ...gRow], maxRowLength, <p className="placeholder">########</p>)
    const tBody = [[]]
    let zeroIndex = -1;

    for (let j = 0; j < gColumn.length; j++){

        const currentIndex = gColumn.length - 1 - j

        tBody[j] = fillRowWithString([gColumn[currentIndex]], maxRowLength, "")

        if (tBody[j][0] === 0) {

            zeroIndex = currentIndex
        }
    }

    const maxValue = tBody[0][0]
    const minValue = tBody[tBody.length - 1][0]
    const maxColumnLength = maxValue - minValue

    const graphArrayHeightInEm = ((gColumn.length - 1) * fullColumnFractionHeightInEm)

  return (

    <div className="graph">

        <p className="graph-title">{title}</p>

        <div className="graph-subcontainer">

            <GraphTable
                className="graph-table"
            
                tHead={tHead}
                tBody={tBody}

                columnFractionHeight={columnFractionHeight}
                columnFractionPadding={columnFractionPadding}
                columnFractionBorderBottom={columnFractionBorderBottom}
            />

            <GraphArray
                columnLength={gColumn.length}

                maxRowLength={maxRowLength}
                maxColumnLength={maxColumnLength}

                zeroIndex={zeroIndex}
                values={gValues}

                graphArrayHeightInEm={graphArrayHeightInEm}
                graphValueHeightInEm={graphValueHeightInEm}
                graphArrayTopInEm={fullColumnFractionHeightInEm}
            />

        </div>

    </div>
  )
}

export default Graph