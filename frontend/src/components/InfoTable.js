import '../styles/InfoTable.css'
import MainTable from './MainTable'
import TableHeadWithFilter from './TableHeadWithFilter'

function InfoTable({
    columnNames, tableData,
    searchInput,

    currentTableHeadFilterButton,
    tableHeadFilterButtonSetter
}) {

    return (

        <MainTable name="info-table"

            tHead={

                columnNames.map((c, idx) => {

                    return (

                        <TableHeadWithFilter
                            index={idx} name={c}
                            currentTableHeadFilterButton={currentTableHeadFilterButton}
                            tableHeadFilterButtonSetter={tableHeadFilterButtonSetter}
                        />
                    )
                })
            }

            tBody={

                tableData.filter(tRow => {

                    let i = 0
                    while(i < tRow.length && !tRow[i].toLowerCase().includes(searchInput.toLowerCase())) {

                        i++;
                    }

                    return i < tRow.length
                })
                .map((tRow) => {

                    return tRow
                })
            }

            tFoot={
                []
            }
        />
    )
}

export default InfoTable