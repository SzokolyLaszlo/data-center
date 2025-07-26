import '../styles/Header.css'
import HorizontalLine from './HorizontalLine'
import LargeHeader from './LargeHeader'

function Header({elements}) {

  return (

    <div className="header">

        <LargeHeader
          elements={elements}
        />

        <HorizontalLine/>

    </div>
  )
}

export default Header