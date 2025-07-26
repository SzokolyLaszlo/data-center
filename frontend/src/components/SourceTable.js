import '../styles/SourceTable.css'
import Table from './Table'
import TableHeadWithFilter from './TableHeadWithFilter'
import { useState, useEffect } from 'react'

function SourceTable({
    path,

    dataGetter,
    
    currentTableHeadFilterButton,
    tableHeadFilterButtonSetter
}) {

    const [data, setData] = useState([{}])

    let keys

    useEffect(() => {

        dataGetter(path, setData)
    },

        [dataGetter, path]
    )

    try{
        keys = Object.keys(data[0])
    }
    catch(err) {
        console.log(err)
    }

    const getTHead = () => {

        return (

            keys.map((k, idx) => {
    
                return (
    
                    <TableHeadWithFilter
                        index={idx} name={k}
                        currentTableHeadFilterButton={currentTableHeadFilterButton}
                        tableHeadFilterButtonSetter={tableHeadFilterButtonSetter}
                    />
                )
            })
        )
    }

    const getTBody = () => {

        return (

            data.map(d => {

                let values = Object.values(d)
    
                return (
    
                    values.map(v => {
    
                        return (
    
                            v
                        )
                    })
                )
            })
        )
    }

  return (

    <div className="source-table-container">

        <Table
            className="source-table"
            columnspan="1"

            tHead={getTHead()}

            tBody={getTBody()}

            tFoot={
                []
            }
        />

    </div>
  )
}

export default SourceTable