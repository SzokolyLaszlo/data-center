import '../styles/CompanyDataPage.css'
import Table from '../components/Table'
import BlankDataPage from '../components/BlankDataPage'
import { useState, useEffect } from 'react'

function CompanyDataPage({
  subtitle,
  path,
  
  paramGetter,
  dataGetter,

  currentCompanyButtons,
  companyButtonsSetter
}) {

  const [data, setData] = useState([ [], [ [], [] ] ])

  const lastUpdate = data[0]
  const companyDataNames = data[1][0]
  const companyData = data[1][1]

  const combinedDataArray = []

  for (let i = 0; i < companyDataNames.length; i++) {

    combinedDataArray.push([ companyDataNames[i], companyData[i] ])
  }

  const subDataArray1 = combinedDataArray.slice(0, 14)
  const subDataArray2 = combinedDataArray.slice(14, 26)
  const subDataArray3 = combinedDataArray.slice(26)

  const companyParam = paramGetter("company", currentCompanyButtons, true)

  const paramPath = path + companyParam

  useEffect(() => {

    dataGetter(paramPath, setData)
  },

    [dataGetter, paramPath]
  )

  const bodyElements = []

  bodyElements.push(

    <Table
      key={0}
      className="company-data-table"
      columnspan="1"

      tHead={
        []
      }

      tBody={

        subDataArray1.map(d => {

          return d;
        })
      }

      tFoot={
        []
      }
    />
  )

  bodyElements.push(

    <Table
      key={1}
      className="company-data-table"
      columnspan="1"

      tHead={
        []
      }

      tBody={

        subDataArray2.map(d => {

          return d;
        })
      }

      tFoot={
        []
      }
    />
  )

  bodyElements.push(

    <Table
      key={2}
      className="company-data-table"
      columnspan="1"

      tHead={
        []
      }

      tBody={
        
        subDataArray3.map(d => {

          return d;
        })
      }

      tFoot={
        []
      }
    />
  )

  return (

    <BlankDataPage
      type="company-info"
      subtitle={subtitle}

      currentCompanyButtons={currentCompanyButtons}
      companyButtonsSetter={companyButtonsSetter}

      isIcon={false}
      lastUpdate={lastUpdate}
      
      bodyElements={bodyElements}
    />
  )
}

export default CompanyDataPage