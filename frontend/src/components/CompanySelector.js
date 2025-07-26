import '../styles/CompanySelector.css'
import VerticalLine from './VerticalLine'
import Button from './Button'
import Selector from './Selector'

function CompanySelector({collectiveButton, currentCompanyButtons, companyButtonsSetter}) {

        const extraElements = []

        if (collectiveButton) {

                extraElements.push(<VerticalLine key={0}/>)

                extraElements.push(
                        <Button key={1} index={3} name={collectiveCompanies[3]}
                                currentButtons={currentCompanyButtons} buttonsSetter={companyButtonsSetter}
                                isMultipleButtons={false}
                        />
                )

        }

  return (

    <div className={collectiveButton ? "company-selector-collective" : "company-selector"}>

        <Selector
                orientation="horizontal" buttons={companies}
                currentButtons={currentCompanyButtons} buttonsSetter={companyButtonsSetter}
                isMultipleButtons={false}
                extraElements={extraElements}
        />
        
    </div>
  )
}

const companies = [

        "Erfo",
        "Főkefe",
        "Kézmű"
]

const collectiveCompanies = [

        ...companies,
        "KEF"
]

export default CompanySelector
export { companies, collectiveCompanies }