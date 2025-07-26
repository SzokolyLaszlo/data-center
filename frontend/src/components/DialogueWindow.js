import '../styles/DialogueWindow.css'

function DialogueWindow({name, elements}) {

  return (

    <div className="backdrop">

      <dialog className={"dialogue-window" + (name === undefined ? "" : ("-" + name))}>

        {elements}

      </dialog>

    </div>
  )
}

export default DialogueWindow