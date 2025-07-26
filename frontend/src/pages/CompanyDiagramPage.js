import '../styles/CompanyDiagramPage.css'
import BlankInfoPage from '../components/BlankInfoPage'
import Logo from '../components/image_components/Logo'
import CompanyDiagram from '../components/image_components/CompanyDiagram'

function CompanyDiagramPage({type, subtitle}) {

  return (

    <div className="company-diagram-page">

        <BlankInfoPage
          type={type}
          subtitle={subtitle}
        />
        
        <div className="company-diagram-container">

          <Logo/>

          <CompanyDiagram/>

        </div>

    </div>
  )
}

export default CompanyDiagramPage