import '../styles/BlankInfoPage.css'
import Title from './Title'

function BlankInfoPage({type, subtitle}) {

  return (

    <div className="blank-info-page">

        <Title
            type={type}
            subtitle={subtitle}
        />

    </div>
  )
}

export default BlankInfoPage