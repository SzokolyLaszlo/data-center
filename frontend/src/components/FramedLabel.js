import '../styles/FramedLabel.css'

function FramedLabel({text, imageComponent}) {

  return (

    <div className="framed-label">

      <h4>{text}</h4>

      {
        imageComponent ? imageComponent : <></>
      }

    </div>
    
  )
}

export default FramedLabel