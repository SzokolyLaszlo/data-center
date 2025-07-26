import '../styles/FramedButton.css'
import { useNavigate } from 'react-router-dom'

function FramedButton({name, destination, buttonSetter, newButton}) {

  let navigate = useNavigate();

  return (

    <button
      className="framed-button"

      onClick={() => {

        buttonSetter(newButton)
        navigate(destination)

        window.scrollTo({top: 0, behavior: "smooth"})
      }}

    >{name}</button>
  )
}

export default FramedButton