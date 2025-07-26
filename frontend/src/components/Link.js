import '../styles/Link.css'

function Link({text, linkSetter}) {

  return (

    <button className="link"

        onClick={() => {
            
            linkSetter()
        }}
        
    >
    {text}
    </button>
  )
}

export default Link