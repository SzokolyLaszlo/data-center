import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useCallback, useRef } from 'react'
import Axios from 'axios'
import LoginPage from './pages/LoginPage'
import LegalNotice from './pages/LegalNotice'
import CompanyInfo from './tables/CompanyInfo'
import SiteInfo from './tables/SiteInfo'
import DialogueWindow from './components/DialogueWindow'
import FileUploader from './components/FileUploader'
import FileDeleter from './components/FileDeleter'
import FileReplacer from './components/FileReplacer'
import PasswordChanger from './components/PasswordChanger'
import SuccessHandler from './components/SuccessHandler'

const url = "http://localhost"
const port = "5000"
const apiURL = `${url}:${port}`

console.log(url)
console.log(port)
console.log(apiURL)

function App() {

  const path0 = "/"
  const path1 = "/joginyilatkozat"
  const path2 = "/via"
  const path3 = "/tia"


  const [isPasswordChange, setPasswordChange] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [isSignOut, setSignOut] = useState(false)

  if (isSignOut) {

    window.location.reload()
  }



  const [userData, setUserData] = useState(null)

  const isUserData = userData !== null
  const isSiteUser = isUserData && userData[2] === 1



  const [currentCompanyInfoMenupoint, setCompanyInfoMenupoint] = useState(1)
  const [currentCompanyInfoPath, setCompanyInfoPath] = useState("/altalanosinformaciok")

  const [currentCompanyInfoCompanyButtons, setCompanyInfoCompanyButtons] = useState([3])

  const [currentCompanyInfoYear, setCompanyInfoYear] = useState(0)
  const [currentCompanyInfoMonth, setCompanyInfoMonth] = useState(0)

  const [currentCompanyInfoGraph1Buttons, setCompanyInfoGraph1Buttons] = useState([0])
  const [currentCompanyInfoGraph2Buttons, setCompanyInfoGraph2Buttons] = useState([2])
  const [currentCompanyInfoGraph3Buttons, setCompanyInfoGraph3Buttons] = useState([0])
  const [currentCompanyInfoGraph4Buttons, setCompanyInfoGraph4Buttons] = useState([2])
  const [currentCompanyInfoGraph5Buttons, setCompanyInfoGraph5Buttons] = useState([8])
  const [currentCompanyInfoGraph6Buttons, setCompanyInfoGraph6Buttons] = useState([13])
  const [currentCompanyInfoGraph7Buttons, setCompanyInfoGraph7Buttons] = useState([2])
  const [currentCompanyInfoGraph8Buttons, setCompanyInfoGraph8Buttons] = useState([4])

  const [current_CompanyInfo_InfoPage_QuarterlyYearFilter_Buttons, set_CompanyInfo_InfoPage_QuarterlyYearFilter_Buttons] = useState([])
  const [current_CompanyInfo_InfoPage_MonthFilter_Buttons, set_CompanyInfo_InfoPage_MonthFilter_Buttons] = useState([])

  const [current_CompanyInfo_InfoPage_QuarterlyYearFilter_HeadButtons, set_CompanyInfo_InfoPage_QuarterlyYearFilter_HeadButtons] = useState([false, false])
  const [current_CompanyInfo_InfoPage_MonthFilter_HeadButtons, set_CompanyInfo_InfoPage_MonthFilter_HeadButtons] = useState([false, false])

  const [currentCompanyInfoCompanyDataButtons, setCompanyInfoCompanyDataButtons] = useState([0])

  const [currentCompanyInfoSearchInput, setCompanyInfoSearchInput] = useState("")

  const [current_CompanyInfo_CostCentre_CompanyFilter_Buttons, set_CompanyInfo_CostCentre_CompanyFilter_Buttons] = useState([])
  const [current_CompanyInfo_CostCentre_StatusFilter_Buttons, set_CompanyInfo_CostCentre_StatusFilter_Buttons] = useState([])
  const [current_CompanyInfo_CostCentre_TypeFilter_Buttons, set_CompanyInfo_CostCentre_TypeFilter_Buttons] = useState([])
  const [current_CompanyInfo_CostCentre_DirectorateFilter_Buttons, set_CompanyInfo_CostCentre_DirectorateFilter_Buttons] = useState([])
  const [current_CompanyInfo_CostCentre_OrganizationFilter_Buttons, set_CompanyInfo_CostCentre_OrganizationFilter_Buttons] = useState([])

  const [current_CompanyInfo_CostCentre_CompanyFilter_HeadButtons, set_CompanyInfo_CostCentre_CompanyFilter_HeadButtons] = useState([false, false])
  const [current_CompanyInfo_CostCentre_StatusFilter_HeadButtons, set_CompanyInfo_CostCentre_StatusFilter_HeadButtons] = useState([false, false])
  const [current_CompanyInfo_CostCentre_TypeFilter_HeadButtons, set_CompanyInfo_CostCentre_TypeFilter_HeadButtons] = useState([false, false])
  const [current_CompanyInfo_CostCentre_DirectorateFilter_HeadButtons, set_CompanyInfo_CostCentre_DirectorateFilter_HeadButtons] = useState([false, false])
  const [current_CompanyInfo_CostCentre_OrganizationFilter_HeadButtons, set_CompanyInfo_CostCentre_OrganizationFilter_HeadButtons] = useState([false, false])

  const [currentCompanyInfoFileData, setCompanyInfoFileData] = useState([[], []])
  const [currentCompanyInfoFolderPath, setCompanyInfoFolderPath] = useState("")



  const [currentSiteInfoMenupoint, setSiteInfoMenupoint] = useState(1)
  const [currentSiteInfoPath, setSiteInfoPath] = useState("/altalanosinformaciok")

  const [currentSiteInfoSearchInput, setSiteInfoSearchInput] = useState("")

  const [current_SiteInfo_CostCentre_CompanyFilter_Buttons, set_SiteInfo_CostCentre_CompanyFilter_Buttons] = useState([])
  const [current_SiteInfo_CostCentre_StatusFilter_Buttons, set_SiteInfo_CostCentre_StatusFilter_Buttons] = useState([])
  const [current_SiteInfo_CostCentre_TypeFilter_Buttons, set_SiteInfo_CostCentre_TypeFilter_Buttons] = useState([])
  const [current_SiteInfo_CostCentre_DirectorateFilter_Buttons, set_SiteInfo_CostCentre_DirectorateFilter_Buttons] = useState([])
  const [current_SiteInfo_CostCentre_OrganizationFilter_Buttons, set_SiteInfo_CostCentre_OrganizationFilter_Buttons] = useState([])

  const [current_SiteInfo_CostCentre_CompanyFilter_HeadButtons, set_SiteInfo_CostCentre_CompanyFilter_HeadButtons] = useState([false, false])
  const [current_SiteInfo_CostCentre_StatusFilter_HeadButtons, set_SiteInfo_CostCentre_StatusFilter_HeadButtons] = useState([false, false])
  const [current_SiteInfo_CostCentre_TypeFilter_HeadButtons, set_SiteInfo_CostCentre_TypeFilter_HeadButtons] = useState([false, false])
  const [current_SiteInfo_CostCentre_DirectorateFilter_HeadButtons, set_SiteInfo_CostCentre_DirectorateFilter_HeadButtons] = useState([false, false])
  const [current_SiteInfo_CostCentre_OrganizationFilter_HeadButtons, set_SiteInfo_CostCentre_OrganizationFilter_HeadButtons] = useState([false, false])

  const [currentSiteInfoFileData, setSiteInfoFileData] = useState([[], []])
  const [currentSiteInfoFolderPath, setSiteInfoFolderPath] = useState("")



  const [isUpload, setUpload] = useState(false)
  const [uploadPath, setUploadPath] = useState("")


  const [isDelete, setDelete] = useState(false)
  const [deleteFile, setDeleteFile] = useState(null)

  const deleteButtonSetter = useRef(null)
  const setDeleteButtonSetter = useCallback((newDeleteButtonSetter) => {

    deleteButtonSetter.current = newDeleteButtonSetter
  },
    []
  )


  const checkForExistingFile = useRef(null)
  const setCheckForExistingFile = useCallback((newCheckForExistingFile) => {

    checkForExistingFile.current = newCheckForExistingFile
  },
    []
  )


  const [isReplace, setReplace] = useState(false)
  const [replaceFile, setReplaceFile] = useState(null)
  const [isFolder, setFolder] = useState(false)

  const replaceButtonSetter = useRef(null)
  const setReplaceButtonSetter = useCallback((newReplaceButtonSetter) => {

    replaceButtonSetter.current = newReplaceButtonSetter
  },
    []
  )

  const replaceFileName = (newFileName) => {

    replaceButtonSetter.current(newFileName)

    setReplace(false)
  }



  const getParams = (paramType, currentParams, isParamStart) => {

    let paramString = ""

    for (let i = 0; i < currentParams.length; i++) {

      const paramSymbol = isParamStart ? "/?" : "&"
      paramString += paramSymbol + paramType + "=" + currentParams[i]
      isParamStart = false;
    }

    return paramString
  }

  const verifyCookies = useCallback(async (noCookies) => {

    if (noCookies === undefined || !noCookies) {

      Axios.get(`${apiURL}/api/profile`)
        .then(res => setUserData(res.data))
        .catch(err => console.log(err))
    }
  },
    []
  )

  const getData = useCallback(async (path, dataSetter, noCookies) => {

    await verifyCookies(noCookies)

    Axios.get(`${apiURL}/api${path}`)
      .then(res => dataSetter(res.data))
      .catch(err => console.log(err))
  },
    [verifyCookies]
  )

  const setData = useCallback(async (path, noCookies) => {

    await verifyCookies(noCookies)

    await Axios.post(`${apiURL}/api${path}`)
      .catch(err => console.log(err))
  },
    [verifyCookies]
  )

  const deleteData = useCallback(async (path, noCookies) => {

    await verifyCookies(noCookies)

    await Axios.delete(`${apiURL}/api${path}`)
  },
    [verifyCookies]
  )



  const setCompanyInfoPage = (index) => {

    setCompanyInfoMenupoint(index)

    if (index === 14) {
      setCompanyInfoPath("/felhasznaloiutmutato")
    }
  }

  const setSiteInfoPage = (index) => {

    setSiteInfoMenupoint(index)

    if (index === 11) {
      setSiteInfoPath("/felhasznaloiutmutato")
    }
  }



  const login = <LoginPage

    paramGetter={getParams}
    dataGetter={getData}

    userData={userData}
    userDataSetter={setUserData}
  />

  const legalNotice = <LegalNotice

    path={path1}
    destinationPaths={[path2, path3]}

    paramGetter={getParams}
    dataSetter={setData}

    userData={userData}
    buttonSetter={!isSiteUser ? setCompanyInfoPage : setSiteInfoPage}
  />

  const companyInfo = <CompanyInfo

    mainPath={path2}
    siteInfoPath={path3}
    loginPath={path0}

    currentPath={currentCompanyInfoPath} pathSetter={setCompanyInfoPath}
    currentMenupoint={currentCompanyInfoMenupoint} menupointSetter={setCompanyInfoMenupoint}

    url={url}
    port={port}

    paramGetter={getParams}
    dataGetter={getData}
    dataDeleter={deleteData}

    passwordChangeSetter={setPasswordChange}
    signOutSetter={setSignOut}

    userData={userData}

    currentCompanyButtons={currentCompanyInfoCompanyButtons} companyButtonsSetter={setCompanyInfoCompanyButtons}

    currentYear={currentCompanyInfoYear} yearSetter={setCompanyInfoYear}
    currentMonth={currentCompanyInfoMonth} monthSetter={setCompanyInfoMonth}

    currentGraph1Buttons={currentCompanyInfoGraph1Buttons} graphButtons1Setter={setCompanyInfoGraph1Buttons}
    currentGraph2Buttons={currentCompanyInfoGraph2Buttons} graphButtons2Setter={setCompanyInfoGraph2Buttons}
    currentGraph3Buttons={currentCompanyInfoGraph3Buttons} graphButtons3Setter={setCompanyInfoGraph3Buttons}
    currentGraph4Buttons={currentCompanyInfoGraph4Buttons} graphButtons4Setter={setCompanyInfoGraph4Buttons}
    currentGraph5Buttons={currentCompanyInfoGraph5Buttons} graphButtons5Setter={setCompanyInfoGraph5Buttons}
    currentGraph6Buttons={currentCompanyInfoGraph6Buttons} graphButtons6Setter={setCompanyInfoGraph6Buttons}
    currentGraph7Buttons={currentCompanyInfoGraph7Buttons} graphButtons7Setter={setCompanyInfoGraph7Buttons}
    currentGraph8Buttons={currentCompanyInfoGraph8Buttons} graphButtons8Setter={setCompanyInfoGraph8Buttons}

    current_InfoPage_QuarterlyYearFilter_Buttons={current_CompanyInfo_InfoPage_QuarterlyYearFilter_Buttons}
    current_InfoPage_MonthFilter_Buttons={current_CompanyInfo_InfoPage_MonthFilter_Buttons}

    infoPage_QuarterlyYearFilter_Buttons_Setter={set_CompanyInfo_InfoPage_QuarterlyYearFilter_Buttons}
    infoPage_MonthFilter_Buttons_Setter={set_CompanyInfo_InfoPage_MonthFilter_Buttons}

    current_InfoPage_QuarterlyYearFilter_HeadButtons={current_CompanyInfo_InfoPage_QuarterlyYearFilter_HeadButtons}
    current_InfoPage_MonthFilter_HeadButtons={current_CompanyInfo_InfoPage_MonthFilter_HeadButtons}

    infoPage_QuarterlyYearFilter_HeadButtons_Setter={set_CompanyInfo_InfoPage_QuarterlyYearFilter_HeadButtons}
    infoPage_MonthFilter_HeadButtons_Setter={set_CompanyInfo_InfoPage_MonthFilter_HeadButtons}

    currentCompanyDataButtons={currentCompanyInfoCompanyDataButtons} companyDataButtonsSetter={setCompanyInfoCompanyDataButtons}

    currentSearchInput={currentCompanyInfoSearchInput} searchInputSetter={setCompanyInfoSearchInput}

    current_CostCentre_CompanyFilter_Buttons={current_CompanyInfo_CostCentre_CompanyFilter_Buttons}
    current_CostCentre_StatusFilter_Buttons={current_CompanyInfo_CostCentre_StatusFilter_Buttons}
    current_CostCentre_TypeFilter_Buttons={current_CompanyInfo_CostCentre_TypeFilter_Buttons}
    current_CostCentre_DirectorateFilter_Buttons={current_CompanyInfo_CostCentre_DirectorateFilter_Buttons}
    current_CostCentre_OrganizationFilter_Buttons={current_CompanyInfo_CostCentre_OrganizationFilter_Buttons}

    costCentre_CompanyFilter_Buttons_Setter={set_CompanyInfo_CostCentre_CompanyFilter_Buttons}
    costCentre_StatusFilter_Buttons_Setter={set_CompanyInfo_CostCentre_StatusFilter_Buttons}
    costCentre_TypeFilter_Buttons_Setter={set_CompanyInfo_CostCentre_TypeFilter_Buttons}
    costCentre_DirectorateFilter_Buttons_Setter={set_CompanyInfo_CostCentre_DirectorateFilter_Buttons}
    costCentre_OrganizationFilter_Buttons_Setter={set_CompanyInfo_CostCentre_OrganizationFilter_Buttons}

    current_CostCentre_CompanyFilter_HeadButtons={current_CompanyInfo_CostCentre_CompanyFilter_HeadButtons}
    current_CostCentre_StatusFilter_HeadButtons={current_CompanyInfo_CostCentre_StatusFilter_HeadButtons}
    current_CostCentre_TypeFilter_HeadButtons={current_CompanyInfo_CostCentre_TypeFilter_HeadButtons}
    current_CostCentre_DirectorateFilter_HeadButtons={current_CompanyInfo_CostCentre_DirectorateFilter_HeadButtons}
    current_CostCentre_OrganizationFilter_HeadButtons={current_CompanyInfo_CostCentre_OrganizationFilter_HeadButtons}

    costCentre_CompanyFilter_HeadButtons_Setter={set_CompanyInfo_CostCentre_CompanyFilter_HeadButtons}
    costCentre_StatusFilter_HeadButtons_Setter={set_CompanyInfo_CostCentre_StatusFilter_HeadButtons}
    costCentre_TypeFilter_HeadButtons_Setter={set_CompanyInfo_CostCentre_TypeFilter_HeadButtons}
    costCentre_DirectorateFilter_HeadButtons_Setter={set_CompanyInfo_CostCentre_DirectorateFilter_HeadButtons}
    costCentre_OrganizationFilter_HeadButtons_Setter={set_CompanyInfo_CostCentre_OrganizationFilter_HeadButtons}

    currentFileData={currentCompanyInfoFileData} fileDataSetter={setCompanyInfoFileData}
    currentFolderPath={currentCompanyInfoFolderPath} folderPathSetter={setCompanyInfoFolderPath}

    isUpload={isUpload}
    uploadWindowSetter={setUpload}
    uploadPathSetter={setUploadPath}

    isDelete={isDelete}
    deleteWindowSetter={setDelete}
    deleteButtonSetterSetter={setDeleteButtonSetter}
    deleteFileSetter={setDeleteFile}

    checkForExistingFileSetter={setCheckForExistingFile}

    isReplace={isReplace}
    replaceFileSetter={setReplaceFile}
    replaceIsFolderSetter={setFolder}
    replaceButtonSetterSetter={setReplaceButtonSetter}
    replaceWindowSetter={setReplace}
  />



  const siteInfo = <SiteInfo

    mainPath={path3}
    companyInfoPath={path2}
    loginPath={path0}

    setSiteInfoPage={setSiteInfoPage}

    currentPath={currentSiteInfoPath} pathSetter={setSiteInfoPath}
    currentMenupoint={currentSiteInfoMenupoint} menupointSetter={setSiteInfoMenupoint}

    url={url}
    port={port}

    paramGetter={getParams}
    dataGetter={getData}
    dataDeleter={deleteData}

    passwordChangeSetter={setPasswordChange}
    signOutSetter={setSignOut}

    userData={userData}

    currentSearchInput={currentSiteInfoSearchInput} searchInputSetter={setSiteInfoSearchInput}

    current_CostCentre_CompanyFilter_Buttons={current_SiteInfo_CostCentre_CompanyFilter_Buttons}
    current_CostCentre_StatusFilter_Buttons={current_SiteInfo_CostCentre_StatusFilter_Buttons}
    current_CostCentre_TypeFilter_Buttons={current_SiteInfo_CostCentre_TypeFilter_Buttons}
    current_CostCentre_DirectorateFilter_Buttons={current_SiteInfo_CostCentre_DirectorateFilter_Buttons}
    current_CostCentre_OrganizationFilter_Buttons={current_SiteInfo_CostCentre_OrganizationFilter_Buttons}

    costCentre_CompanyFilter_Buttons_Setter={set_SiteInfo_CostCentre_CompanyFilter_Buttons}
    costCentre_StatusFilter_Buttons_Setter={set_SiteInfo_CostCentre_StatusFilter_Buttons}
    costCentre_TypeFilter_Buttons_Setter={set_SiteInfo_CostCentre_TypeFilter_Buttons}
    costCentre_DirectorateFilter_Buttons_Setter={set_SiteInfo_CostCentre_DirectorateFilter_Buttons}
    costCentre_OrganizationFilter_Buttons_Setter={set_SiteInfo_CostCentre_OrganizationFilter_Buttons}

    current_CostCentre_CompanyFilter_HeadButtons={current_SiteInfo_CostCentre_CompanyFilter_HeadButtons}
    current_CostCentre_StatusFilter_HeadButtons={current_SiteInfo_CostCentre_StatusFilter_HeadButtons}
    current_CostCentre_TypeFilter_HeadButtons={current_SiteInfo_CostCentre_TypeFilter_HeadButtons}
    current_CostCentre_DirectorateFilter_HeadButtons={current_SiteInfo_CostCentre_DirectorateFilter_HeadButtons}
    current_CostCentre_OrganizationFilter_HeadButtons={current_SiteInfo_CostCentre_OrganizationFilter_HeadButtons}

    costCentre_CompanyFilter_HeadButtons_Setter={set_SiteInfo_CostCentre_CompanyFilter_HeadButtons}
    costCentre_StatusFilter_HeadButtons_Setter={set_SiteInfo_CostCentre_StatusFilter_HeadButtons}
    costCentre_TypeFilter_HeadButtons_Setter={set_SiteInfo_CostCentre_TypeFilter_HeadButtons}
    costCentre_DirectorateFilter_HeadButtons_Setter={set_SiteInfo_CostCentre_DirectorateFilter_HeadButtons}
    costCentre_OrganizationFilter_HeadButtons_Setter={set_SiteInfo_CostCentre_OrganizationFilter_HeadButtons}

    currentFileData={currentSiteInfoFileData} fileDataSetter={setSiteInfoFileData}
    currentFolderPath={currentSiteInfoFolderPath} folderPathSetter={setSiteInfoFolderPath}

    isUpload={isUpload}
    uploadWindowSetter={setUpload}
    uploadPathSetter={setUploadPath}

    isDelete={isDelete}
    deleteWindowSetter={setDelete}
    deleteButtonSetterSetter={setDeleteButtonSetter}
    deleteFileSetter={setDeleteFile}

    checkForExistingFileSetter={setCheckForExistingFile}

    isReplace={isReplace}
    replaceFileSetter={setReplaceFile}
    replaceIsFolderSetter={setFolder}
    replaceButtonSetterSetter={setReplaceButtonSetter}
    replaceWindowSetter={setReplace}
  />



  const uploader = <DialogueWindow

    elements={

      <FileUploader
        path={uploadPath}

        checkForExistingFile={checkForExistingFile.current}

        replaceFileSetter={setReplaceFile}
        replaceIsFolderSetter={setFolder}
        replaceButtonSetterSetter={setReplaceButtonSetter}
        replaceWindowSetter={setReplace}

        closeButtonSetter={setUpload}
      />

    }
  />

  const deleter = <DialogueWindow

    elements={

      <FileDeleter
        fileName={deleteFile}
        deleteButtonSetter={deleteButtonSetter.current}
        closeButtonSetter={setDelete}
      />

    }
  />

  const replacer = <DialogueWindow

    elements={

      <FileReplacer
        checkForExistingFile={checkForExistingFile.current}

        fileName={

          (typeof replaceFile === 'string' || replaceFile instanceof String) ?
            replaceFile :
            (
              replaceFile !== null ?
                replaceFile.name :
                ""
            )
        }

        fileNameSetter={replaceFileName}
        isFolder={isFolder}

        replaceButtonSetter={replaceButtonSetter.current}
        closeButtonSetter={setReplace}
      />

    }
  />

  const passwordChanger = <DialogueWindow
    name="password-changer"

    elements={

      <PasswordChanger
        userId={isUserData ? userData[0] : -1}

        paramGetter={getParams}
        dataGetter={getData}
        dataSetter={setData}

        successSetter={setSuccess}
        closeButtonSetter={setPasswordChange}
      />

    }
  />

  const success = <DialogueWindow
    name="success-handler"

    elements={

      <SuccessHandler
        text="Sikeres jelszócsere!"
        closeButtonSetter={setSuccess}
      />

    }
  />



  return (

    <div className="App">

      <Router>

        <Routes>

          <Route path={path0} element={login} />
          <Route path={path1} element={legalNotice} />
          <Route path={path2 + "/*"} element={companyInfo} />
          <Route path={path3 + "/*"} element={siteInfo} />

        </Routes>

      </Router>

      {
        isUpload ?
          (
            uploader
          ) :
          null
      }

      {
        isDelete ?
          (
            deleter
          ) :
          null
      }

      {
        isReplace ?
          (
            replacer
          ) :
          null
      }

      {
        isPasswordChange ?
          (
            passwordChanger
          ) :
          null
      }

      {
        isSuccess ?
          (
            success
          ) :
          null
      }

    </div>
  )
}

export default App;