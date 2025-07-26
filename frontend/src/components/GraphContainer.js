import '../styles/GraphContainer.css'
import Selector from './Selector'
import Graph from './Graph'

function GraphContainer({title, buttons, buttonIndexes, currentGraphButtons, graphButtonsSetter, graphRow, graphColumn, graphValues, maxRowLength}) {

  return (

    <div className="graph-container">

        <Selector
          orientation="vertical"
          buttons={buttons}
          buttonIndexes={buttonIndexes}
          currentButtons={currentGraphButtons}
          buttonsSetter={graphButtonsSetter}
          isMultipleButtons={false}
        />

        <Graph
            title={title}
            
            gRow={graphRow}
            gColumn={graphColumn}
            gValues={graphValues}
            maxRowLength={maxRowLength}
        />

    </div>
  )
}

export default GraphContainer