import '../styles/FoodBank.css'
import FramedLabel from './FramedLabel'
import MainTable, { getMainTableBody } from './MainTable'
import { quarterlyYears } from './QuarterlyYearContainer'
import Table from './Table'
import Truck from './image_components/Truck'
import HorizontalLine from './HorizontalLine'

function FoodBank({
  isData,

  quarterlyYearTableDataNames,
  quarterlyYearTableAsterisks,
  quarterlyYearTableFooters,
  quarterlyYearTableData,
  quarterlyYearTableDataSums
}) {

  return (

    <div className="food-bank">

      <FramedLabel text="Élelmiszerbank *" />

      <div className="food-bank-table-container">

        <MainTable name="food-bank-table"

          tHead={
            
            [
              "Megnevezés",
              ...quarterlyYears,
              "Összesen:"
            ]
          }

          tBody={

            getMainTableBody(

              isData,
              8,
              5,

              quarterlyYearTableDataNames,
              quarterlyYearTableAsterisks,
              quarterlyYearTableData,
              quarterlyYearTableDataSums
          )
        }

          tFoot={ quarterlyYearTableFooters === undefined ? [] : quarterlyYearTableFooters}
        />

        <Table className="small-table"
          columnspan={2}

          tHead={
            [
              "Hetente ellátott fő"
            ]
          }

          tBody={
            [
              [
                "Csömöri út",
                "600"
              ],

              [
                "Füzér utca",
                "220"
              ],

              [
                "Temesvár utca",
                "150"
              ],

              [
                "Laky Adolf utca",
                "250"
              ],

              [
                "Hajdúnánás",
                "200"
              ],

              [
                "Összesen:",
                "1420"
              ]
            ]
          }

          tFoot={
            []
          }

        />

        <Truck />

      </div>

      <HorizontalLine />

    </div>
  )
}

export default FoodBank