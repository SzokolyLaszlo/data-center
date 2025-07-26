import '../styles/Glossary.css'
import BlankInfoPage from '../components/BlankInfoPage'
import FramedButton from '../components/FramedButton'
import LogoWhiteWithBlueCorner from '../components/image_components/LogoWhiteWithBlueCorner'
import { useState } from 'react'
import SourceTable from '../components/SourceTable'

function Glossary({type, subtitle, dataGetter, mainPath, menupointSetter, destinationMenupoint}) {

    const [currentTableHeadFilterButton, setTableHeadFilterButton] = useState(-1)

    return (

        <div className="glossary">

            <BlankInfoPage
                type={type}
                subtitle={subtitle}
            />

            <div className="glossary-container">

                <div className="glossary-header">

                    <FramedButton
                        name="Általános Információk"
                        destination={`${mainPath}/altalanosinformaciok`}
                        buttonSetter={menupointSetter}
                        newButton={destinationMenupoint}
                    />

                    <LogoWhiteWithBlueCorner/>

                </div>

                <SourceTable
                    path={`${mainPath}/fogalomtar`}

                    dataGetter={dataGetter}

                    currentTableHeadFilterButton={currentTableHeadFilterButton}
                    tableHeadFilterButtonSetter={setTableHeadFilterButton}
                />

            </div>

        </div>
    )
}

export default Glossary