import '../styles/LegalNotice.css'
import Logo from '../components/image_components/Logo'
import LegalNoticeText from '../components/LegalNoticeText'
import FramedButton from '../components/FramedButton'

function LegalNotice({
  path,
  destinationPaths,
  
  paramGetter,
  dataSetter,
  
  userData,
  buttonSetter
}) {

  const userParam = paramGetter("user", [userData[0]], true)
  const paramPath = path + userParam

  const isSiteUser = userData[2] === 1

  const acceptLegalNotice = (newButton) => {

    dataSetter(paramPath)
    buttonSetter(newButton)
  }

  return (

    <div className="legal-notice">

        <Logo/>

        <LegalNoticeText/>

        <FramedButton
            name="Elfogadom"
            destination={!isSiteUser ? destinationPaths[0] : destinationPaths[1]}
            buttonSetter={acceptLegalNotice}
            newButton={!isSiteUser ? 14 : 11}
        />

    </div>
  )
}

export default LegalNotice