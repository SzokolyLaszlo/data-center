import { useState } from 'react'
import BlankInfoPage from '../components/BlankInfoPage'
import SourceTable from '../components/SourceTable'

const SourceTablePage = ({type, subtitle, path, dataGetter, tableName}) => {

  const [currentTableHeadFilterButton, setTableHeadFilterButton] = useState(-1)

  return (

    <div className={tableName + "-source-page"}>

        <BlankInfoPage
          type={type}
          subtitle={subtitle}
        />

        <SourceTable
            path={path}

            dataGetter={dataGetter}

            currentTableHeadFilterButton={currentTableHeadFilterButton}
            tableHeadFilterButtonSetter={setTableHeadFilterButton}
        />

    </div>
  )
}

export default SourceTablePage