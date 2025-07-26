function UserInput({inputSetter, isOnBlur}) {

    function handleInput(value) {

        inputSetter(value)
    }

    const onBlur = (
      isOnBlur ?
      (e) => {

        handleInput(e.target.value)
      } :
      () => {}
    )

  return (

    <input
      className="user-input"
      name="userInput"
      aria-label="userInput"
      type="text"
      spellCheck="false"
      autoComplete="off"
      autoFocus

      onKeyDown={(e) => {
        
        if (e.key === "Enter") {

            handleInput(e.target.value)
        }
      }}

      onBlur={onBlur}
    />
  )
}

export default UserInput