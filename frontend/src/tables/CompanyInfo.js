import '../styles/CompanyInfo.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ProfileBar from '../components/ProfileBar'
import InfoPage from '../pages/InfoPage'
import SocialValuesInfoPage from '../pages/SocialValuesInfoPage'
import CompanyDataPage from '../pages/CompanyDataPage'
import CostCentreCatalogueInfoPage from '../pages/CostCentreCatalogueInfoPage'
import CompanyDiagramPage from '../pages/CompanyDiagramPage'
import Documents from '../pages/Documents'
import UserManual from '../pages/UserManual'
import Glossary from '../pages/Glossary'
import LegalNoticeAccepted from '../pages/LegalNoticeAccepted'
import SourceTablePage from '../pages/SourceTablePage'

function CompanyInfo({

  mainPath, siteInfoPath, loginPath,

  currentPath, pathSetter,
  currentMenupoint, menupointSetter,

  paramGetter, dataGetter, dataDeleter,

  passwordChangeSetter, signOutSetter,

  userData,

  currentCompanyButtons, companyButtonsSetter,

  currentYear, yearSetter,
  currentMonth, monthSetter,

  currentGraph1Buttons, graphButtons1Setter,
  currentGraph2Buttons, graphButtons2Setter,
  currentGraph3Buttons, graphButtons3Setter,
  currentGraph4Buttons, graphButtons4Setter,
  currentGraph5Buttons, graphButtons5Setter,
  currentGraph6Buttons, graphButtons6Setter,
  currentGraph7Buttons, graphButtons7Setter,
  currentGraph8Buttons, graphButtons8Setter,

  current_InfoPage_QuarterlyYearFilter_Buttons,
  current_InfoPage_MonthFilter_Buttons,

  infoPage_QuarterlyYearFilter_Buttons_Setter,
  infoPage_MonthFilter_Buttons_Setter,

  current_InfoPage_QuarterlyYearFilter_HeadButtons,
  current_InfoPage_MonthFilter_HeadButtons,

  infoPage_QuarterlyYearFilter_HeadButtons_Setter,
  infoPage_MonthFilter_HeadButtons_Setter,

  currentCompanyDataButtons, companyDataButtonsSetter,

  currentSearchInput, searchInputSetter,

  current_CostCentre_CompanyFilter_Buttons,
  current_CostCentre_StatusFilter_Buttons,
  current_CostCentre_TypeFilter_Buttons,
  current_CostCentre_DirectorateFilter_Buttons,
  current_CostCentre_OrganizationFilter_Buttons,

  costCentre_CompanyFilter_Buttons_Setter,
  costCentre_StatusFilter_Buttons_Setter,
  costCentre_TypeFilter_Buttons_Setter,
  costCentre_DirectorateFilter_Buttons_Setter,
  costCentre_OrganizationFilter_Buttons_Setter,

  current_CostCentre_CompanyFilter_HeadButtons,
  current_CostCentre_StatusFilter_HeadButtons,
  current_CostCentre_TypeFilter_HeadButtons,
  current_CostCentre_DirectorateFilter_HeadButtons,
  current_CostCentre_OrganizationFilter_HeadButtons,

  costCentre_CompanyFilter_HeadButtons_Setter,
  costCentre_StatusFilter_HeadButtons_Setter,
  costCentre_TypeFilter_HeadButtons_Setter,
  costCentre_DirectorateFilter_HeadButtons_Setter,
  costCentre_OrganizationFilter_HeadButtons_Setter,

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

  const type = "company-info"


  let navigate = useNavigate();

  useEffect(() => {

    navigate(mainPath + currentPath)
  },

    [navigate, mainPath, currentPath]
  )



  const path0 = siteInfoPath
  const path1 = "/altalanosinformaciok"
  const path2 = "/gazdasagimutatok"
  const path3 = "/letszamgazdalkodas"
  const path4 = "/beszerzesselkapcsolatosmutatok"
  const path5 = "/logisztikaimutatok"
  const path6 = "/rehabilitaciosadatok"
  const path7 = "/ingatlanokkalkapcsolatosmutatok"
  const path8 = "/szocialisertekeink"
  const path9 = "/minosegiranyitas"
  const path10 = "/vallalatiadatok"
  const path11 = "/koltseghelykatalogus"
  const path12 = "/szervezetiagrajz"
  const path13 = "/dokumentumok"
  const path14 = "/felhasznaloiutmutato"
  const path15 = "/fogalomtar"
  const path16 = "/joginyilatkozat"
  const path17 = "/felhasznalok"
  const path18 = "/felhasznaloidokumentumok"
  const path19 = "/utolsomodositas"
  const path20 = "/kef"
  const path21 = "/vallalatiadatokalap"
  const path22 = "/koltseghelyek"
  const path23 = "/hataridokfelelosok"

  const paths = [

    path0,
    path1,
    path2,
    path3,
    path4,
    path5,
    path6,
    path7,
    path8,
    path9,
    path10,
    path11,
    path12,
    path13,
    path14,
    path15,
    path16,
    path17,
    path18,
    path19,
    path20,
    path21,
    path22,
    path23
  ]

  const menupoint0 = { index: 0, name: "Telephelyi információs adatok", className: "main", destination: path0 }
  const menupoint1 = { index: 1, name: "Általános információk", className: "public", destination: mainPath + path1 }
  const menupoint2 = { index: 2, name: "Gazdasági mutatók", className: "public", destination: mainPath + path2 }
  const menupoint3 = { index: 3, name: "Létszám gazdálkodás", className: "public", destination: mainPath + path3 }
  const menupoint4 = { index: 4, name: "Beszerzéssel kapcsolatos mutatók", className: "public", destination: mainPath + path4 }
  const menupoint5 = { index: 5, name: "Logisztikai mutatók", className: "public", destination: mainPath + path5 }
  const menupoint6 = { index: 6, name: "Rehabilitációs adatok", className: "public", destination: mainPath + path6 }
  const menupoint7 = { index: 7, name: "Ingatlanokkal kapcsolatos mutatók", className: "public", destination: mainPath + path7 }
  const menupoint8 = { index: 8, name: "Szociális értékeink", className: "public", destination: mainPath + path8 }
  const menupoint9 = { index: 9, name: "Minőségirányítás", className: "public", destination: mainPath + path9 }
  const menupoint10 = { index: 10, name: "Vállalati adatok", className: "public", destination: mainPath + path10 }
  const menupoint11 = { index: 11, name: "Költséghely-katalógus", className: "general", destination: mainPath + path11 }
  const menupoint12 = { index: 12, name: "Szervezeti ágrajz", className: "general", destination: mainPath + path12 }
  const menupoint13 = { index: 13, name: "Dokumentumok", className: "general", destination: mainPath + path13 }
  const menupoint14 = { index: 14, name: "Felhasználói útmutató", className: "general", destination: mainPath + path14 }
  const menupoint15 = { index: 15, name: "Fogalomtár", className: "general", destination: mainPath + path15 }
  const menupoint16 = { index: 16, name: "Jogi nyilatkozat", className: "general", destination: mainPath + path16 }
  const menupoint17 = { index: 17, name: "Felhasználók", className: "private", destination: mainPath + path17 }
  const menupoint18 = { index: 18, name: "Felhasználói dokumentumok", className: "private", destination: mainPath + path18 }
  const menupoint19 = { index: 19, name: "Utolsó módosítás", className: "private", destination: mainPath + path19 }
  const menupoint20 = { index: 20, name: "KEF", className: "private", destination: mainPath + path20 }
  const menupoint21 = { index: 21, name: "Vállalati adatok alap", className: "private", destination: mainPath + path21 }
  const menupoint22 = { index: 22, name: "Költséghelyek", className: "private", destination: mainPath + path22 }
  const menupoint23 = { index: 23, name: "Határidők, felelősök", className: "private", destination: mainPath + path23 }

  let menupoints = [

    menupoint1,
    menupoint2,
    menupoint3,
    menupoint4,
    menupoint5,
    menupoint6,
    menupoint7,
    menupoint8,
    menupoint9,
    menupoint10,
    menupoint11,
    menupoint12,
    menupoint13,
    menupoint14,
    menupoint15,
    menupoint16
  ]

  const isUserData = userData !== null

  if (isUserData) {

    const accessLevel = userData[2]

    if (accessLevel !== 0) {

      menupoints = [menupoint0, ...menupoints]
    }

    if (accessLevel === 3) {

      menupoints.push(menupoint17)
      menupoints.push(menupoint18)
      menupoints.push(menupoint19)
      menupoints.push(menupoint20)
      menupoints.push(menupoint21)
      menupoints.push(menupoint22)
      menupoints.push(menupoint23)
    }
  }



  const setInfoPageAndMenupoint = (index) => {

    if (index !== 0) {
      menupointSetter(index)
      pathSetter(paths[index])
    }
  }



  const generalInfo = <InfoPage
    key={1}
    className="info-page"
    menupointId={1}
    subtitle={menupoint1.name}
    path={menupoint1.destination}
    isSum={false}

    paramGetter={paramGetter}
    dataGetter={dataGetter}

    currentCompanyButtons={currentCompanyButtons} companyButtonsSetter={companyButtonsSetter}

    currentYear={currentYear} yearSetter={yearSetter}
    currentMonth={currentMonth} monthSetter={monthSetter}

    currentGraphButtons={currentGraph1Buttons} graphButtonsSetter={graphButtons1Setter}

    current_QuarterlyYearFilter_Buttons={current_InfoPage_QuarterlyYearFilter_Buttons}
    current_MonthFilter_Buttons={current_InfoPage_MonthFilter_Buttons}

    quarterlyYearFilter_Buttons_Setter={infoPage_QuarterlyYearFilter_Buttons_Setter}
    monthFilter_Buttons_Setter={infoPage_MonthFilter_Buttons_Setter}

    current_QuarterlyYearFilter_HeadButtons={current_InfoPage_QuarterlyYearFilter_HeadButtons}
    current_MonthFilter_HeadButtons={current_InfoPage_MonthFilter_HeadButtons}

    quarterlyYearFilter_HeadButtons_Setter={infoPage_QuarterlyYearFilter_HeadButtons_Setter}
    monthFilter_HeadButtons_Setter={infoPage_MonthFilter_HeadButtons_Setter}
  />

  const economicIndicators = <InfoPage
    key={2}
    className="info-page"
    menupointId={2}
    subtitle={menupoint2.name}
    path={menupoint2.destination}
    isSum={true}

    paramGetter={paramGetter}
    dataGetter={dataGetter}

    currentCompanyButtons={currentCompanyButtons} companyButtonsSetter={companyButtonsSetter}

    currentYear={currentYear} yearSetter={yearSetter}
    currentMonth={currentMonth} monthSetter={monthSetter}

    currentGraphButtons={currentGraph2Buttons} graphButtonsSetter={graphButtons2Setter}

    current_QuarterlyYearFilter_Buttons={current_InfoPage_QuarterlyYearFilter_Buttons}
    current_MonthFilter_Buttons={current_InfoPage_MonthFilter_Buttons}

    quarterlyYearFilter_Buttons_Setter={infoPage_QuarterlyYearFilter_Buttons_Setter}
    monthFilter_Buttons_Setter={infoPage_MonthFilter_Buttons_Setter}

    current_QuarterlyYearFilter_HeadButtons={current_InfoPage_QuarterlyYearFilter_HeadButtons}
    current_MonthFilter_HeadButtons={current_InfoPage_MonthFilter_HeadButtons}

    quarterlyYearFilter_HeadButtons_Setter={infoPage_QuarterlyYearFilter_HeadButtons_Setter}
    monthFilter_HeadButtons_Setter={infoPage_MonthFilter_HeadButtons_Setter}
  />

  const personnelManagement = <InfoPage
    key={3}
    className="info-page"
    menupointId={3}
    subtitle={menupoint3.name}
    path={menupoint3.destination}
    isSum={false}

    paramGetter={paramGetter}
    dataGetter={dataGetter}

    currentCompanyButtons={currentCompanyButtons} companyButtonsSetter={companyButtonsSetter}

    currentYear={currentYear} yearSetter={yearSetter}
    currentMonth={currentMonth} monthSetter={monthSetter}

    currentGraphButtons={currentGraph3Buttons} graphButtonsSetter={graphButtons3Setter}

    current_QuarterlyYearFilter_Buttons={current_InfoPage_QuarterlyYearFilter_Buttons}
    current_MonthFilter_Buttons={current_InfoPage_MonthFilter_Buttons}

    quarterlyYearFilter_Buttons_Setter={infoPage_QuarterlyYearFilter_Buttons_Setter}
    monthFilter_Buttons_Setter={infoPage_MonthFilter_Buttons_Setter}

    current_QuarterlyYearFilter_HeadButtons={current_InfoPage_QuarterlyYearFilter_HeadButtons}
    current_MonthFilter_HeadButtons={current_InfoPage_MonthFilter_HeadButtons}

    quarterlyYearFilter_HeadButtons_Setter={infoPage_QuarterlyYearFilter_HeadButtons_Setter}
    monthFilter_HeadButtons_Setter={infoPage_MonthFilter_HeadButtons_Setter}
  />

  const procurementIndicators = <InfoPage
    key={4}
    className="info-page"
    menupointId={4}
    subtitle={menupoint4.name}
    path={menupoint4.destination}
    isSum={true}

    paramGetter={paramGetter}
    dataGetter={dataGetter}

    currentCompanyButtons={currentCompanyButtons} companyButtonsSetter={companyButtonsSetter}

    currentYear={currentYear} yearSetter={yearSetter}
    currentMonth={currentMonth} monthSetter={monthSetter}

    currentGraphButtons={currentGraph4Buttons} graphButtonsSetter={graphButtons4Setter}

    current_QuarterlyYearFilter_Buttons={current_InfoPage_QuarterlyYearFilter_Buttons}
    current_MonthFilter_Buttons={current_InfoPage_MonthFilter_Buttons}

    quarterlyYearFilter_Buttons_Setter={infoPage_QuarterlyYearFilter_Buttons_Setter}
    monthFilter_Buttons_Setter={infoPage_MonthFilter_Buttons_Setter}

    current_QuarterlyYearFilter_HeadButtons={current_InfoPage_QuarterlyYearFilter_HeadButtons}
    current_MonthFilter_HeadButtons={current_InfoPage_MonthFilter_HeadButtons}

    quarterlyYearFilter_HeadButtons_Setter={infoPage_QuarterlyYearFilter_HeadButtons_Setter}
    monthFilter_HeadButtons_Setter={infoPage_MonthFilter_HeadButtons_Setter}
  />

  const logisticsIndicators = <InfoPage
    key={5}
    className="info-page"
    menupointId={5}
    subtitle={menupoint5.name}
    path={menupoint5.destination}
    isSum={true}

    paramGetter={paramGetter}
    dataGetter={dataGetter}

    currentCompanyButtons={currentCompanyButtons} companyButtonsSetter={companyButtonsSetter}

    currentYear={currentYear} yearSetter={yearSetter}
    currentMonth={currentMonth} monthSetter={monthSetter}

    currentGraphButtons={currentGraph5Buttons} graphButtonsSetter={graphButtons5Setter}

    current_QuarterlyYearFilter_Buttons={current_InfoPage_QuarterlyYearFilter_Buttons}
    current_MonthFilter_Buttons={current_InfoPage_MonthFilter_Buttons}

    quarterlyYearFilter_Buttons_Setter={infoPage_QuarterlyYearFilter_Buttons_Setter}
    monthFilter_Buttons_Setter={infoPage_MonthFilter_Buttons_Setter}

    current_QuarterlyYearFilter_HeadButtons={current_InfoPage_QuarterlyYearFilter_HeadButtons}
    current_MonthFilter_HeadButtons={current_InfoPage_MonthFilter_HeadButtons}

    quarterlyYearFilter_HeadButtons_Setter={infoPage_QuarterlyYearFilter_HeadButtons_Setter}
    monthFilter_HeadButtons_Setter={infoPage_MonthFilter_HeadButtons_Setter}
  />

  const rehabilitationData = <InfoPage
    key={6}
    className="info-page"
    menupointId={6}
    subtitle={menupoint6.name}
    path={menupoint6.destination}
    isSum={true}

    paramGetter={paramGetter}
    dataGetter={dataGetter}

    currentCompanyButtons={currentCompanyButtons} companyButtonsSetter={companyButtonsSetter}

    currentYear={currentYear} yearSetter={yearSetter}
    currentMonth={currentMonth} monthSetter={monthSetter}

    currentGraphButtons={currentGraph6Buttons} graphButtonsSetter={graphButtons6Setter}

    current_QuarterlyYearFilter_Buttons={current_InfoPage_QuarterlyYearFilter_Buttons}
    current_MonthFilter_Buttons={current_InfoPage_MonthFilter_Buttons}

    quarterlyYearFilter_Buttons_Setter={infoPage_QuarterlyYearFilter_Buttons_Setter}
    monthFilter_Buttons_Setter={infoPage_MonthFilter_Buttons_Setter}

    current_QuarterlyYearFilter_HeadButtons={current_InfoPage_QuarterlyYearFilter_HeadButtons}
    current_MonthFilter_HeadButtons={current_InfoPage_MonthFilter_HeadButtons}

    quarterlyYearFilter_HeadButtons_Setter={infoPage_QuarterlyYearFilter_HeadButtons_Setter}
    monthFilter_HeadButtons_Setter={infoPage_MonthFilter_HeadButtons_Setter}
  />

  const realEstateIndicators = <InfoPage
    key={7}
    className="info-page"
    menupointId={7}
    subtitle={menupoint7.name}
    path={menupoint7.destination}
    isSum={true}

    paramGetter={paramGetter}
    dataGetter={dataGetter}

    currentCompanyButtons={currentCompanyButtons} companyButtonsSetter={companyButtonsSetter}

    currentYear={currentYear} yearSetter={yearSetter}
    currentMonth={currentMonth} monthSetter={monthSetter}

    currentGraphButtons={currentGraph7Buttons} graphButtonsSetter={graphButtons7Setter}

    current_QuarterlyYearFilter_Buttons={current_InfoPage_QuarterlyYearFilter_Buttons}
    current_MonthFilter_Buttons={current_InfoPage_MonthFilter_Buttons}

    quarterlyYearFilter_Buttons_Setter={infoPage_QuarterlyYearFilter_Buttons_Setter}
    monthFilter_Buttons_Setter={infoPage_MonthFilter_Buttons_Setter}

    current_QuarterlyYearFilter_HeadButtons={current_InfoPage_QuarterlyYearFilter_HeadButtons}
    current_MonthFilter_HeadButtons={current_InfoPage_MonthFilter_HeadButtons}

    quarterlyYearFilter_HeadButtons_Setter={infoPage_QuarterlyYearFilter_HeadButtons_Setter}
    monthFilter_HeadButtons_Setter={infoPage_MonthFilter_HeadButtons_Setter}
  />

  const socialValues = <SocialValuesInfoPage
    key={8}
    subtitle={menupoint8.name}
    path={menupoint8.destination}

    paramGetter={paramGetter}
    dataGetter={dataGetter}

    currentCompanyButtons={currentCompanyButtons} companyButtonsSetter={companyButtonsSetter}

    currentYear={currentYear} yearSetter={yearSetter}
    currentMonth={currentMonth} monthSetter={monthSetter}
  />

  const qualityControl = <InfoPage
    key={9}
    className="info-page"
    menupointId={9}
    subtitle={menupoint9.name}
    path={menupoint9.destination}
    isSum={true}

    paramGetter={paramGetter}
    dataGetter={dataGetter}

    currentCompanyButtons={currentCompanyButtons} companyButtonsSetter={companyButtonsSetter}

    currentYear={currentYear} yearSetter={yearSetter}
    currentMonth={currentMonth} monthSetter={monthSetter}

    currentGraphButtons={currentGraph8Buttons} graphButtonsSetter={graphButtons8Setter}

    current_QuarterlyYearFilter_Buttons={current_InfoPage_QuarterlyYearFilter_Buttons}
    current_MonthFilter_Buttons={current_InfoPage_MonthFilter_Buttons}

    quarterlyYearFilter_Buttons_Setter={infoPage_QuarterlyYearFilter_Buttons_Setter}
    monthFilter_Buttons_Setter={infoPage_MonthFilter_Buttons_Setter}

    current_QuarterlyYearFilter_HeadButtons={current_InfoPage_QuarterlyYearFilter_HeadButtons}
    current_MonthFilter_HeadButtons={current_InfoPage_MonthFilter_HeadButtons}

    quarterlyYearFilter_HeadButtons_Setter={infoPage_QuarterlyYearFilter_HeadButtons_Setter}
    monthFilter_HeadButtons_Setter={infoPage_MonthFilter_HeadButtons_Setter}
  />

  const companyData = <CompanyDataPage
    subtitle={menupoint10.name}
    path={menupoint10.destination}

    paramGetter={paramGetter}
    dataGetter={dataGetter}

    currentCompanyButtons={currentCompanyDataButtons} companyButtonsSetter={companyDataButtonsSetter}
  />

  const costCentre = <CostCentreCatalogueInfoPage
    type={type}
    subtitle={menupoint11.name}
    path={menupoint11.destination}

    paramGetter={paramGetter}
    dataGetter={dataGetter}

    currentSearchInput={currentSearchInput} searchInputSetter={searchInputSetter}

    currentFilter1Buttons={current_CostCentre_CompanyFilter_Buttons} filter1ButtonsSetter={costCentre_CompanyFilter_Buttons_Setter}
    currentFilter2Buttons={current_CostCentre_StatusFilter_Buttons} filter2ButtonsSetter={costCentre_StatusFilter_Buttons_Setter}
    currentFilter3Buttons={current_CostCentre_TypeFilter_Buttons} filter3ButtonsSetter={costCentre_TypeFilter_Buttons_Setter}
    currentFilter4Buttons={current_CostCentre_DirectorateFilter_Buttons} filter4ButtonsSetter={costCentre_DirectorateFilter_Buttons_Setter}
    currentFilter5Buttons={current_CostCentre_OrganizationFilter_Buttons} filter5ButtonsSetter={costCentre_OrganizationFilter_Buttons_Setter}

    currentFilter1HeadButtons={current_CostCentre_CompanyFilter_HeadButtons} filter1HeadButtonsSetter={costCentre_CompanyFilter_HeadButtons_Setter}
    currentFilter2HeadButtons={current_CostCentre_StatusFilter_HeadButtons} filter2HeadButtonsSetter={costCentre_StatusFilter_HeadButtons_Setter}
    currentFilter3HeadButtons={current_CostCentre_TypeFilter_HeadButtons} filter3HeadButtonsSetter={costCentre_TypeFilter_HeadButtons_Setter}
    currentFilter4HeadButtons={current_CostCentre_DirectorateFilter_HeadButtons} filter4HeadButtonsSetter={costCentre_DirectorateFilter_HeadButtons_Setter}
    currentFilter5HeadButtons={current_CostCentre_OrganizationFilter_HeadButtons} filter5HeadButtonsSetter={costCentre_OrganizationFilter_HeadButtons_Setter}
  />

  const companyDiagram = <CompanyDiagramPage
    type={type}
    subtitle={menupoint12.name}
  />

  const documents = <Documents
    type={type}
    subtitle={menupoint13.name}
    path={menupoint13.destination}

    paramGetter={paramGetter}
    dataGetter={dataGetter}

    userData={userData}

    currentFileData={currentFileData} fileDataSetter={fileDataSetter}
    currentFolderPath={currentFolderPath} folderPathSetter={folderPathSetter}

    isUpload={isUpload}
    uploadWindowSetter={uploadWindowSetter}
    uploadPathSetter={uploadPathSetter}

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

  const userManual = <UserManual
    type={type}
    subtitle={menupoint14.name}

    mainPath={mainPath}
    menupointSetter={setInfoPageAndMenupoint}
    destinationMenupoints={[15, 1]}
  />

  const glossary = <Glossary
    type={type}
    subtitle={menupoint15.name}

    dataGetter={dataGetter}

    mainPath={mainPath}
    menupointSetter={setInfoPageAndMenupoint}
    destinationMenupoint={1}
  />

  const legalNoticeAccepted = <LegalNoticeAccepted
    type={type}
    subtitle={menupoint16.name}
  />

  const usersSource = <SourceTablePage
    type={type}
    subtitle={menupoint17.name}
    path={menupoint17.destination}

    dataGetter={dataGetter}

    tableName="users"
  />

  const userDocumentsSource = <SourceTablePage
    type={type}
    subtitle={menupoint18.name}
    path={menupoint18.destination}

    dataGetter={dataGetter}

    tableName="user-documents"
  />

  const lastModifiedSource = <SourceTablePage
    type={type}
    subtitle={menupoint19.name}
    path={menupoint19.destination}

    dataGetter={dataGetter}

    tableName="last-modified"
  />

  const kefSource = <SourceTablePage
    type={type}
    subtitle={menupoint20.name}
    path={menupoint20.destination}

    dataGetter={dataGetter}

    tableName="kef"
  />

  const companyDataSource = <SourceTablePage
    type={type}
    subtitle={menupoint21.name}
    path={menupoint21.destination}

    dataGetter={dataGetter}

    tableName="company-data"
  />

  const costCentresSource = <SourceTablePage
    type={type}
    subtitle={menupoint22.name}
    path={menupoint22.destination}

    dataGetter={dataGetter}

    tableName="cost-centres"
  />

  const deadlinesResponsiblesSource = <SourceTablePage
    type={type}
    subtitle={menupoint23.name}
    path={menupoint23.destination}

    dataGetter={dataGetter}

    tableName="deadlines-responsibles"
  />

  return (

    <div className={type}>

      <Navbar
        currentButtons={[currentMenupoint]}
        buttonsSetter={setInfoPageAndMenupoint}
        menupoints={menupoints}
      />

      <ProfileBar
        userData={userData}

        loginPath={loginPath}
        dataDeleter={dataDeleter}

        passwordChangeSetter={passwordChangeSetter}
        signOutSetter={signOutSetter}
      />

      <Routes>

        <Route path={path1} element={generalInfo} />
        <Route path={path2} element={economicIndicators} />
        <Route path={path3} element={personnelManagement} />
        <Route path={path4} element={procurementIndicators} />
        <Route path={path5} element={logisticsIndicators} />
        <Route path={path6} element={rehabilitationData} />
        <Route path={path7} element={realEstateIndicators} />
        <Route path={path8} element={socialValues} />
        <Route path={path9} element={qualityControl} />
        <Route path={path10} element={companyData} />
        <Route path={path11} element={costCentre} />
        <Route path={path12} element={companyDiagram} />
        <Route path={path13} element={documents} />
        <Route path={path14} element={userManual} />
        <Route path={path15} element={glossary} />
        <Route path={path16} element={legalNoticeAccepted} />
        <Route path={path17} element={usersSource} />
        <Route path={path18} element={userDocumentsSource} />
        <Route path={path19} element={lastModifiedSource} />
        <Route path={path20} element={kefSource} />
        <Route path={path21} element={companyDataSource} />
        <Route path={path22} element={costCentresSource} />
        <Route path={path23} element={deadlinesResponsiblesSource} />

      </Routes>

    </div>
  )
}

export default CompanyInfo