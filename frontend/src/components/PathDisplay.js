import PathDisplayButton from './PathDisplayButton'

function PathDisplay({ path, folderPathSetter }) {

  const pathElements = path.split("/")
  let lastElement = pathElements[pathElements.length - 2]

  const buttonSetter = (index) => {

    let newPath = ""
    let i = 1

    while (i <= index) {

      newPath += pathElements[i] + "/"
      i++;
    }

    folderPathSetter(newPath)
  }

  let pathComponents = []

  for (let i = 0; i < pathElements.length - 2; i++) {

    pathComponents.push(

      <PathDisplayButton
        key={i}
        index={i}
        text={pathElements[i]}
        buttonSetter={buttonSetter}
      />
    )
  }

  return (

    <div className="path-display">

      {
        pathComponents.map(button => {

          return (

            <div className="path-display-subcontainer">

              {button}

              <p className="path-display-symbol">{">"}</p>

            </div>
          )
        })
      }

      <p className="path-display-current-folder"><strong>{lastElement}</strong></p>

    </div>
  )
}

export default PathDisplay