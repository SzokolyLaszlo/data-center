import '../styles/FileHandler.css'
import DialogueButton from './DialogueButton'

function FileReplacer({
    checkForExistingFile,

    fileName,
    fileNameSetter,
    isFolder,

    replaceButtonSetter,
    closeButtonSetter
}) {

    const keepBothButtonSetter = () => {

        do {

            const splitFileName = fileName.split(".")

            let extension = isFolder ? "" : "." + splitFileName[splitFileName.length - 1]
            let shortFileName = splitFileName[0]

            for (let i = 1; i < splitFileName.length - (isFolder ? 0 : 1); i++) {

                shortFileName += "." + splitFileName[i]
            }


            let splitShortFileName = shortFileName.split(" ")

            const lastChars = splitShortFileName[splitShortFileName.length - 1]

            const firstChar = lastChars[0]
            const lastChar = lastChars[lastChars.length - 1]
            const middleChars = lastChars.slice(1, lastChars.length - 1)

            const isNumbered = (firstChar === "(" && lastChar === ")" && !isNaN(parseInt(middleChars)))


            if (isNumbered) {

                splitShortFileName[splitShortFileName.length - 1] = "(" + (parseInt(middleChars) + 1) + ")"
            }
            else {

                splitShortFileName.push("(1)")
            }


            fileName = ""

            for (let i = 0; i < splitShortFileName.length; i++) {

                fileName += splitShortFileName[i] + ((i < splitShortFileName.length - 1) ? " " : "")
            }


            fileName += extension
        }
        while (checkForExistingFile(fileName))


        fileNameSetter(fileName)
    }

    return (

        <div className="file-handler">

            <div className="display-container">

                <h4>Dokumentum cseréje</h4>

                <div className="file-container">

                    <p className="file-container-text">Ez a fájl már létezik. Cserélni kívánja?</p>

                    {fileName && (

                        <div className='file-data-display'>

                            <p>Fájlnév: {fileName}</p>

                        </div>
                    )}

                </div>

            </div>

            <div className="button-container">

                <DialogueButton
                    name="replace-button"
                    text="Csere"
                    isAvailable={true}
                    buttonSetter={() => {

                        replaceButtonSetter(fileName)
                        closeButtonSetter(false)
                    }}
                />

                <DialogueButton
                    name="keep-both-button"
                    text="Mindkettő megtartása"
                    isAvailable={true}
                    buttonSetter={() => {

                        keepBothButtonSetter()
                        closeButtonSetter(false)
                    }}
                />

                <DialogueButton
                    name="cancel-button"
                    text="Mégse"
                    isAvailable={true}
                    buttonSetter={() => {

                        closeButtonSetter(false)
                    }}
                />

            </div>

        </div>
    )
}

export default FileReplacer