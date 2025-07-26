import '../styles/LegalNoticeAccepted.css'
import BlankInfoPage from '../components/BlankInfoPage'
import Logo from '../components/image_components/Logo'
import LegalNoticeText from "../components/LegalNoticeText"
import FramedLabel from '../components/FramedLabel'
import CheckMark from '../components/image_components/CheckMark'

function LegalNoticeAccepted({type, subtitle}) {

  return (

    <div className="legal-notice-accepted">

        <BlankInfoPage
          type={type}
          subtitle={subtitle}
        />

      <div className="legal-notice-accepted-container">

        <Logo/>

        <LegalNoticeText/>

        <FramedLabel text="Elfogadva" imageComponent={<CheckMark/>}/>

      </div>
      
    </div>
  )
}

export default LegalNoticeAccepted