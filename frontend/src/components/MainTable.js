import '../styles/MainTable.css'
import Table from './Table'

function MainTable({ name, tHead, tBody, tFoot }) {

  return (

    <Table className={name} columnspan="1" tHead={tHead} tBody={tBody} tFoot={tFoot} />
  )
}

function getMainTableHead(periodicDataNames, headLength, isSum) {

  let tHead = ["Megnevezés", ...periodicDataNames]
  tHead = fillRowWithString(tHead, headLength, "")

  if (isSum) {

    tHead.push("Összesen:")
  }

  return tHead
}

function getMainTableBody(isData, menupointId, rowLength, mainTableDataNames, mainTableAsterisks, mainTableData, mainTableDataSums) {

  const tBody = (

    isData ?

      mainTableDataNames.map((dataNameData, idx) => {

        let dataName = isData ? dataNameData[0] : ""
        dataName += mainTableAsterisks[menupointId][idx]

        const periodicData = mainTableData[idx]

        let tRow = [dataName, ...periodicData]
        tRow = fillRowWithString(tRow, rowLength, "")

        if (mainTableDataSums.length > 0) {

          tRow.push(mainTableDataSums[idx])
        }

        return tRow
      })

      : []
  )

  return tBody
}

function fillRowWithString(tRow, maxLength, string = "") {

  const filledRow = [...tRow]

  const fillLength = maxLength - tRow.length;

  for (let i = 0; i < fillLength; i++) {

    filledRow.push(string)
  }

  return filledRow
}

export default MainTable
export { getMainTableHead }
export { getMainTableBody }
export { fillRowWithString }