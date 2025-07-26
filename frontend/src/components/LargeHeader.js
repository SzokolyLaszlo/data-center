import '../styles/LargeHeader.css'
import MediumHeader from './MediumHeader';
import Logo from './image_components/Logo';

function LargeHeader({elements}) {

  return (

    <div className="large-header">

      <MediumHeader
        elements={elements}
      />

      <Logo/>

    </div>
  )
}

export default LargeHeader