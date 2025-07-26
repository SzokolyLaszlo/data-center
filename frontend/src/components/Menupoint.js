import '../styles/Menupoint.css'
import { useNavigate } from 'react-router-dom'

function Menupoint({index, name, className, destination, currentButtons, buttonsSetter}) {

  let navigate = useNavigate();

  return (

    <button
      className={index === currentButtons[0] ? className + "-clicked" : className}
      onClick={() => {
        
        buttonsSetter(index)

        navigate(destination)

        window.scrollTo({top: 0, behavior: "smooth"})
      }}
    >{name}</button>
  )
}

export default Menupoint