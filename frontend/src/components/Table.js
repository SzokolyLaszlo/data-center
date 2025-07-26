import '../styles/Table.css'

function Table({className, columnspan, tHead, tBody, tFoot}) {

  return (

    <table className={className}>

      <thead>

        <tr className="info-head">

          {tHead.map((tData, idx) => {

            return (

              <th key={idx} className="info-head-data" colSpan={columnspan}>{tData}</th>
            )
          })}

        </tr>

      </thead>

      <tbody>

        {tBody.map((tRow, idx) => {

          return (

            <tr key={idx} className="info-row">

              {tRow.map((tData, idx) => {

                return (

                  <td key={idx} className="info-data">{tData}</td>
                )
              })}

            </tr>
          )
        })}

      </tbody>

      <tfoot>

        {tFoot.map((tData, idx) => {

          return (

            <tr key={idx} className="info-foot" colSpan={tFoot.length}>

              <td key={idx} className="info-foot-data">{tData}</td>

            </tr>
          )
        })}

      </tfoot>

    </table>
  )
}

export default Table