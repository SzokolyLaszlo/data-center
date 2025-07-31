import '../styles/Documents.css'
import BlankInfoPage from '../components/BlankInfoPage'
import ButtonWithIcon from '../components/ButtonWithIcon'
import Upload from '../components/image_components/Upload'
import Folder from '../components/image_components/Folder'
import LogoWhiteWithBlueCorner from '../components/image_components/LogoWhiteWithBlueCorner'
import PathDisplay from '../components/PathDisplay'
import DocumentTable from '../components/DocumentTable'
import { useRef, useCallback } from 'react'

function Documents({
    type,
    subtitle,
    path,

    apiUrl,

    paramGetter,
    dataGetter,

    userData,

    currentFileData, fileDataSetter,
    currentFolderPath, folderPathSetter,

    isUpload,
    uploadWindowSetter,
    uploadPathSetter,

    isDelete,
    deleteWindowSetter,
    deleteButtonSetterSetter,
    deleteFileSetter,

    checkForExistingFileSetter,

    isReplace,
    replaceFileSetter,
    replaceIsFolderSetter,
    replaceButtonSetterSetter,
    replaceWindowSetter
}) {

    let rootFolderName
    let tablePath

    switch (type) {

        case "company-info":
            rootFolderName = "Vállalati dokumentumok"
            tablePath = "/company_info_documents/"
            break
        case "site-info":
            rootFolderName = "Telephelyi dokumentumok"
            tablePath = "/site_info_documents/"
            break
        default:
            rootFolderName = "Dokumentumok"
            tablePath = "/"
    }

    const newFolderSetter = useRef(null)
    const setNewFolderSetter = useCallback((newNewFolderSetter) => {

        newFolderSetter.current = newNewFolderSetter
    },
        []
    )

    const isUserData = userData !== null
    const userId = isUserData ? userData[0] : -1
    const isAdmin = isUserData && userData[2] === 3

    return (

        <div className="documents">

            <BlankInfoPage
                type={type}
                subtitle={subtitle}
            />

            <div className="documents-container">

                <div className="documents-header">

                    <div className="documents-top-header">

                        {isAdmin && (

                            <div className="documents-button-container">

                                <ButtonWithIcon
                                    index={0}
                                    imageComponent={

                                        <Upload text="" />
                                    }
                                    text="Feltöltés"
                                    buttonSetter={() => {

                                        uploadPathSetter(
                                            path +
                                            "/?tablePath=" + tablePath +
                                            "&folderPath=" + currentFolderPath +
                                            "&userId=" + userId
                                        )
                                        uploadWindowSetter(true)
                                    }}
                                />

                                <ButtonWithIcon
                                    index={1}
                                    imageComponent={

                                        <Folder text="" />
                                    }
                                    text="Új Mappa"
                                    buttonSetter={() => {

                                        const newFolder = newFolderSetter.current()
                                        fileDataSetter([newFolder, ...currentFileData])
                                    }}
                                />

                            </div>
                        )}

                        {!isAdmin && (

                            <PathDisplay
                                path={rootFolderName + "/" + currentFolderPath}
                                folderPathSetter={folderPathSetter}
                            />
                        )}

                        <LogoWhiteWithBlueCorner />

                    </div>

                    {isAdmin && (

                        <div className="documents-bottom-header">

                            <PathDisplay
                                path={rootFolderName + "/" + currentFolderPath}
                                folderPathSetter={folderPathSetter}
                            />

                        </div>
                    )}

                </div>

                <DocumentTable
                    path={path}

                    apiUrl={apiUrl}

                    paramGetter={paramGetter}
                    dataGetter={dataGetter}

                    userId={userId}
                    isAdmin={isAdmin}

                    currentFileData={currentFileData}
                    fileDataSetter={fileDataSetter}

                    currentFolderPath={currentFolderPath}
                    folderPathSetter={folderPathSetter}

                    isUpload={isUpload}

                    newFolderSetterSetter={setNewFolderSetter}

                    isDelete={isDelete}
                    deleteWindowSetter={deleteWindowSetter}
                    deleteButtonSetterSetter={deleteButtonSetterSetter}
                    deleteFileSetter={deleteFileSetter}

                    checkForExistingFileSetter={checkForExistingFileSetter}

                    isReplace={isReplace}
                    replaceFileSetter={replaceFileSetter}
                    replaceIsFolderSetter={replaceIsFolderSetter}
                    replaceButtonSetterSetter={replaceButtonSetterSetter}
                    replaceWindowSetter={replaceWindowSetter}
                />

            </div>

        </div>
    )
}

export default Documents