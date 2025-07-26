import '../styles/BlankDataPage.css'
import CompanySelector from './CompanySelector'
import LastUpdate from './LastUpdate'
import BlankInfoPage from './BlankInfoPage'
import Header from './Header'
import Factory from './image_components/Factory'

function BlankDataPage({
  type,
  subtitle,
  
  currentCompanyButtons,
  companyButtonsSetter,
  
  isIcon,
  lastUpdate,
  
  bodyElements
}) {

  const headerElements = []

  headerElements.push(

    <CompanySelector
      key={0}
      collectiveButton={false}
      currentCompanyButtons={currentCompanyButtons}
      companyButtonsSetter={companyButtonsSetter}
    />
  )

  if (isIcon) {

    headerElements.push(
        
        <Factory
            key={1}
        />
    )
  }

  headerElements.push(

    <LastUpdate
      key={isIcon ? 2 : 1}
      date={lastUpdate}
    />
  )

  return (

    <div className="data-page">

      <BlankInfoPage
        type={type}
        subtitle={subtitle}
      />

      <div className="data-container">

        <Header
          elements={headerElements}
        />

        <div className="data-table-container">

          {bodyElements}

        </div>

      </div>

    </div>
  )
}

export default BlankDataPage