import '../styles/ButtonWithIcon.css'

function ButtonWithIcon({index, imageComponent, text, currentButton, buttonSetter}) {

  return (

    <button
      className={index === currentButton ? "button-with-icon-clicked" : "button-with-icon"}
      onClick={() => {

        buttonSetter(index)
      }}
    >

      {imageComponent}
      {text}

    </button>
  )
}

export default ButtonWithIcon