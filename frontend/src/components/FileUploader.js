import '../styles/FileHandler.css'
import { useState } from 'react'
import Axios from 'axios'
import DialogueButton from './DialogueButton'

function FileUploader({
    path,

    checkForExistingFile,

    replaceFileSetter,
    replaceIsFolderSetter,

    replaceWindowSetter,
    replaceButtonSetterSetter,

    closeButtonSetter
}) {

    const [file, setFile] = useState(null)
    const [uploadStatus, setUploadStatus] = useState("idle")

    function handleFileChange(e) {

        if (e.target.files) {

            setFile(e.target.files[0])
        }
    }

    async function handleFileUpload(newFileName) {

        const paramPath = path + (newFileName === undefined ? "" : "&newFileName=" + newFileName)

        if (file) {

            setUploadStatus("uploading")

            const formData = new FormData()
            formData.append("file", file)

            try {

                await Axios.post(

                    `http://localhost:8080/api${paramPath}`,
                    formData,

                    {
                        headers: {

                            "Content-Type": 'multipart/form-data'
                        }
                    }
                )

                setUploadStatus("success")
                closeButtonSetter(false)
            }
            catch (err) {

                console.log(err)
                setUploadStatus("error")
            }
        }
    }

    return (

        <div className="file-handler">

            <div className="display-container">

                <h4>Dokumentum feltöltése</h4>

                <div className="file-container">

                    <input className="file-input" name="file" type="file" onChange={handleFileChange} />

                    {file && (

                        <div className='file-data-display'>

                            <p>Fájlnév: {file.name}</p>
                            <p>Méret: {(file.size / 1024).toFixed(2)} KB</p>
                            <p>Típus: {file.type}</p>

                        </div>
                    )}

                    {uploadStatus === "error" && (

                        <p className="error-message">Hiba történt. Kérjük próbálja újra!</p>
                    )}

                </div>

            </div>

            <div className="button-container">

                <DialogueButton
                    name="upload-button"
                    text="Feltöltés"
                    isAvailable={file ? true : false}
                    buttonSetter={async () => {

                        const isReplace = checkForExistingFile(file.name)

                        if (isReplace) {

                            await replaceFileSetter(file)
                            replaceButtonSetterSetter(handleFileUpload)
                            setFile(file)
                            replaceIsFolderSetter(false)
                            replaceWindowSetter(true)
                        }
                        else {

                            handleFileUpload()
                        }
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

export default FileUploader