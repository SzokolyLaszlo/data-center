import '../styles/Button.css'

function Button({
  index,
  name,
  
  currentButtons,
  buttonsSetter,
  
  isMultipleButtons
}) {

  return (

    <button
      className={currentButtons.indexOf(index) > -1 ? "button-clicked" : "button"}
      onClick={() => {

        const newButtons = getNewButtons(index, currentButtons, isMultipleButtons)

        buttonsSetter(newButtons, index)
      }}
    >{name}</button>
  )
}

function getNewButtons(index, currentButtons, isMultipleButtons) {

  let i = 0
  while (i < currentButtons.length && index < currentButtons[i]) {

    i++;
  }

  let newButtons = [...currentButtons]

  if (index !== undefined) {

    if (isMultipleButtons) {

      if (newButtons.indexOf(index) === -1) {

        newButtons.splice(i + 1, 0, index)
      }
    }
    else {
  
      newButtons = [index]
    }
  }

  newButtons.sort((a, b) => {

    return a - b
  })

  return newButtons
}

export default Button