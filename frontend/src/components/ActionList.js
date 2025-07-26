import '../styles/ActionList.css'

function ActionList({buttons, buttonSetters, isExtended}) {

  return (

    <div className={"action-list" + (isExtended ? "-extended" : "")}>

        {
            buttons.map((b, idx) => {

                return (

                    <div
                        className="action-list-button"
                        onClick={buttonSetters[idx]}
                    >
                    
                        <p>{b}</p>
                    
                    </div>
                )
            })
        }

    </div>
  )
}

export default ActionList