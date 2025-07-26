function PathDisplayButton({index, text, buttonSetter}) {

  return (

    <button className="path-display-button"
        onClick={() => {

            buttonSetter(index)
        }}
    >
    {text}
    </button>
  )
}

export default PathDisplayButton