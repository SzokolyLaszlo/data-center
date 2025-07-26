import '../styles/DialogueButton.css'

function DialogueButton({text, name, isAvailable, buttonSetter}) {

  const subClass = isAvailable ? "" : "-unavailable"

  return (

    <button className={name === undefined ? ("dialogue-button" + subClass) : (name + subClass)}
    onClick={() => {

        buttonSetter()
    }}>

    {text}</button>
  )
}

export default DialogueButton