import '../styles/GraphTable.css'

function GraphTable({
  className,

  tHead, tBody,

  columnFractionHeight,
  columnFractionPadding,
  columnFractionBorderBottom
}) {

  const graphDataStyle = {

    height: columnFractionHeight,
    padding: columnFractionPadding,
    borderBottom: columnFractionBorderBottom
  }

  const graphHeadDataStyle = {

    height: columnFractionHeight
  }

  return (

    <table className={className}>

      <tbody>

        {tBody.map((tRow, idx) => {

          return (

            <tr key={idx} className="graph-row">

              {tRow.map((tData, idx) => {

                return (

                  <td key={idx} className="graph-data" style={graphDataStyle}>{tData}</td>
                )
              })}

            </tr>
          )
        })}

      </tbody>

      <tfoot>

        <tr className="graph-head">

          {tHead.map((tData, idx) => {

            return (

              <th key={idx} className="graph-head-data" style={graphHeadDataStyle}>{tData}</th>
            )
          })}

        </tr>

      </tfoot>

    </table>
  )
}

export default GraphTable