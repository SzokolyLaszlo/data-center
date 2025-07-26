import '../styles/FileHandler.css'
import DialogueButton from './DialogueButton'

function FileDeleter({
    fileName,
    deleteButtonSetter,
    closeButtonSetter
}) {

    return (

        <div className="file-handler">

            <div className="display-container">

                <h4>Dokumentum törlése</h4>

                <div className="file-container">

                    <p className="file-container-text">Biztosan törli ezt a fájlt?</p>

                    {fileName && (

                        <div className='file-data-display'>

                            <p>Fájlnév: {fileName}</p>

                        </div>
                    )}

                </div>

            </div>

            <div className="button-container">

                <DialogueButton
                    name="delete-button"
                    text="Törlés"
                    isAvailable={fileName ? true : false}
                    buttonSetter={() => {

                        deleteButtonSetter()
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

export default FileDeleter