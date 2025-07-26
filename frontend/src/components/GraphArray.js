import '../styles/GraphArray.css'
import GraphBar from './GraphBar'
import { fillRowWithString } from './MainTable'

function GraphArray({
    columnLength,

    maxRowLength,
    maxColumnLength,

    zeroIndex,
    values,

    graphArrayHeightInEm,
    graphValueHeightInEm,
    graphArrayTopInEm
}) {

    const graphArrayHeight = graphArrayHeightInEm + "em"
    const graphArrayTop = graphArrayTopInEm + "em"

    const graphArrayStyle = {

        height: graphArrayHeight,
        top: graphArrayTop
    }

    values = fillRowWithString(values, maxRowLength - 1, "")

    let graphArray = [];

    for (let i = 0; i < maxRowLength - 1; i++) {

        graphArray[i] = <GraphBar
            key={i}
            value={values[i]}

            columnLength={columnLength}
            maxColumnLength={maxColumnLength}
            maxGraphBarHeightInEm={graphArrayHeightInEm}
            graphValueHeightInEm={graphValueHeightInEm}
            zeroIndex={zeroIndex}
        />
    }

    return (

        <div className="graph-array" style={graphArrayStyle}>

            {graphArray.map(graphBar => {

                return graphBar
            })}

        </div>
    )
}

export default GraphArray