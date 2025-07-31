import '../styles/SiteInfo.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ProfileBar from '../components/ProfileBar'
import BlankSiteInfoPage from '../components/BlankSiteInfoPage'
import CostCentreCatalogueInfoPage from '../pages/CostCentreCatalogueInfoPage'
import CompanyDiagramPage from '../pages/CompanyDiagramPage'
import Documents from '../pages/Documents'
import UserManual from '../pages/UserManual'
import Glossary from '../pages/Glossary'
import LegalNoticeAccepted from '../pages/LegalNoticeAccepted'
import SourceTablePage from '../pages/SourceTablePage'

function SiteInfo({

    mainPath, companyInfoPath, loginPath,

    currentPath, pathSetter,
    currentMenupoint, menupointSetter,

    apiUrl,

    paramGetter, dataGetter, dataDeleter,

    passwordChangeSetter, signOutSetter,

    userData,

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

    const type = "site-info"


    let navigate = useNavigate();

    useEffect(() => {

        navigate(mainPath + currentPath)
    },

        [navigate, mainPath, currentPath]
    )



    const path0 = companyInfoPath
    const path1 = "/altalanosinformaciok"
    const path2 = "/telephelyitrendek"
    const path3 = "/telephelyiadatok"
    const path4 = "/telephelyielemzesek"
    const path5 = "/kozpontiraktarak"
    const path6 = "/kozpontiraklapforgalom"
    const path7 = "/termelesiranyitasiinformaciok"
    const path8 = "/koltseghelykatalogus"
    const path9 = "/szervezetiagrajz"
    const path10 = "/dokumentumok"
    const path11 = "/felhasznaloiutmutato"
    const path12 = "/fogalomtar"
    const path13 = "/joginyilatkozat"
    const path14 = "/felhasznalok"
    const path15 = "/felhasznaloidokumentumok"
    const path16 = "/utolsomodositas"
    const path17 = "/thaltalanosadatok"
    const path18 = "/haviadatok"
    const path19 = "/kraltalanosadatok"
    const path20 = "/raklapalap"
    const path21 = "/termelesiranyitasiinfotabla"
    const path22 = "/koltseghelyek"

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
    ]

    const menupoint0 = { index: 0, name: "Vállalati információs adatok", className: "main", destination: path0 }
    const menupoint1 = { index: 1, name: "Általános információk", className: "public", destination: mainPath + path1 }
    const menupoint2 = { index: 2, name: "Telephelyi trendek", className: "public", destination: mainPath + path2 }
    const menupoint3 = { index: 3, name: "Telephelyi adatok", className: "public", destination: mainPath + path3 }
    const menupoint4 = { index: 4, name: "Telephelyi elemzések", className: "public", destination: mainPath + path4 }
    const menupoint5 = { index: 5, name: "Központi raktárak", className: "public", destination: mainPath + path5 }
    const menupoint6 = { index: 6, name: "Központi raklapforgalom", className: "public", destination: mainPath + path6 }
    const menupoint7 = { index: 7, name: "Termelésirányítási információk", className: "public", destination: mainPath + path7 }
    const menupoint8 = { index: 8, name: "Költséghely-katalógus", className: "general", destination: mainPath + path8 }
    const menupoint9 = { index: 9, name: "Szervezeti ágrajz", className: "general", destination: mainPath + path9 }
    const menupoint10 = { index: 10, name: "Dokumentumok", className: "general", destination: mainPath + path10 }
    const menupoint11 = { index: 11, name: "Felhasználói útmutató", className: "general", destination: mainPath + path11 }
    const menupoint12 = { index: 12, name: "Fogalomtár", className: "general", destination: mainPath + path12 }
    const menupoint13 = { index: 13, name: "Jogi nyilatkozat", className: "general", destination: mainPath + path13 }
    const menupoint14 = { index: 14, name: "Felhasználók", className: "private", destination: mainPath + path14 }
    const menupoint15 = { index: 15, name: "Felhasználói dokumentumok", className: "private", destination: mainPath + path15 }
    const menupoint16 = { index: 16, name: "Utolsó módosítás", className: "private", destination: mainPath + path16 }
    const menupoint17 = { index: 17, name: "TH általános adatok", className: "private", destination: mainPath + path17 }
    const menupoint18 = { index: 18, name: "Havi adatok", className: "private", destination: mainPath + path18 }
    const menupoint19 = { index: 19, name: "KR általános adatok", className: "private", destination: mainPath + path19 }
    const menupoint20 = { index: 20, name: "Raklap alap", className: "private", destination: mainPath + path20 }
    const menupoint21 = { index: 21, name: "Termelésirányítási infótábla", className: "private", destination: mainPath + path21 }
    const menupoint22 = { index: 22, name: "Költséghelyek", className: "private", destination: mainPath + path22 }

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
        menupoint13
    ]

    const isUserData = userData !== null

    if (isUserData) {

        const accessLevel = userData[2]

        if (accessLevel !== 1) {

            menupoints = [menupoint0, ...menupoints]
        }

        if (accessLevel === 3) {

            menupoints.push(menupoint14)
            menupoints.push(menupoint15)
            menupoints.push(menupoint16)
            menupoints.push(menupoint17)
            menupoints.push(menupoint18)
            menupoints.push(menupoint19)
            menupoints.push(menupoint20)
            menupoints.push(menupoint21)
            menupoints.push(menupoint22)
        }
    }



    const setInfoPageAndMenupoint = (index) => {

        if (index !== 0) {
            menupointSetter(index)
            pathSetter(paths[index])
        }
    }



    const generalInfo = <BlankSiteInfoPage
        subtitle={menupoint1.name}
    />

    const siteTrends = <BlankSiteInfoPage
        subtitle={menupoint2.name}
    />

    const siteData = <BlankSiteInfoPage
        subtitle={menupoint3.name}
    />

    const siteAnalysis = <BlankSiteInfoPage
        subtitle={menupoint4.name}
    />

    const masterDepots = <BlankSiteInfoPage
        subtitle={menupoint5.name}
    />

    const palletTraffic = <BlankSiteInfoPage
        subtitle={menupoint6.name}
    />

    const productionManagement = <BlankSiteInfoPage
        subtitle={menupoint7.name}
    />

    const costCentre = <CostCentreCatalogueInfoPage
        type={type}
        subtitle={menupoint8.name}
        path={menupoint8.destination}

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
        subtitle={menupoint9.name}
    />

    const documents = <Documents
        type={type}
        subtitle={menupoint10.name}
        path={menupoint10.destination}

        apiUrl={apiUrl}

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
        subtitle={menupoint11.name}

        mainPath={mainPath}
        menupointSetter={setInfoPageAndMenupoint}
        destinationMenupoints={[12, 1]}
    />

    const glossary = <Glossary
        type={type}
        subtitle={menupoint12.name}

        dataGetter={dataGetter}

        mainPath={mainPath}
        menupointSetter={setInfoPageAndMenupoint}
        destinationMenupoint={1}
    />

    const legalNoticeAccepted = <LegalNoticeAccepted
        type={type}
        subtitle={menupoint13.name}
    />

    const usersSource = <SourceTablePage
        type={type}
        subtitle={menupoint14.name}
        path={menupoint14.destination}

        dataGetter={dataGetter}

        tableName="users"
    />

    const userDocumentsSource = <SourceTablePage
        type={type}
        subtitle={menupoint15.name}
        path={menupoint15.destination}

        dataGetter={dataGetter}

        tableName="user-documents"
    />

    const lastModifiedSource = <SourceTablePage
        type={type}
        subtitle={menupoint16.name}
        path={menupoint16.destination}

        dataGetter={dataGetter}

        tableName="last-modified"
    />

    const stGeneralDataSource = <SourceTablePage
        type={type}
        subtitle={menupoint17.name}
        path={menupoint17.destination}

        dataGetter={dataGetter}

        tableName="st-general-data"
    />

    const monthlyDataSource = <SourceTablePage
        type={type}
        subtitle={menupoint18.name}
        path={menupoint18.destination}

        dataGetter={dataGetter}

        tableName="monthly-data"
    />

    const mdGeneralDataSource = <SourceTablePage
        type={type}
        subtitle={menupoint19.name}
        path={menupoint19.destination}

        dataGetter={dataGetter}

        tableName="md-general-data"
    />

    const palletTrafficSource = <SourceTablePage
        type={type}
        subtitle={menupoint20.name}
        path={menupoint20.destination}

        dataGetter={dataGetter}

        tableName="pallet-traffic"
    />

    const productionManagementSource = <SourceTablePage
        type={type}
        subtitle={menupoint21.name}
        path={menupoint21.destination}

        dataGetter={dataGetter}

        tableName="production-management-infotable"
    />

    const costCentresSource = <SourceTablePage
        type={type}
        subtitle={menupoint22.name}
        path={menupoint22.destination}

        dataGetter={dataGetter}

        tableName="cost-centres"
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
                <Route path={path2} element={siteTrends} />
                <Route path={path3} element={siteData} />
                <Route path={path4} element={siteAnalysis} />
                <Route path={path5} element={masterDepots} />
                <Route path={path6} element={palletTraffic} />
                <Route path={path7} element={productionManagement} />
                <Route path={path8} element={costCentre} />
                <Route path={path9} element={companyDiagram} />
                <Route path={path10} element={documents} />
                <Route path={path11} element={userManual} />
                <Route path={path12} element={glossary} />
                <Route path={path13} element={legalNoticeAccepted} />
                <Route path={path14} element={usersSource} />
                <Route path={path15} element={userDocumentsSource} />
                <Route path={path16} element={lastModifiedSource} />
                <Route path={path17} element={stGeneralDataSource} />
                <Route path={path18} element={monthlyDataSource} />
                <Route path={path19} element={mdGeneralDataSource} />
                <Route path={path20} element={palletTrafficSource} />
                <Route path={path21} element={productionManagementSource} />
                <Route path={path22} element={costCentresSource} />

            </Routes>

        </div>
    )
}

export default SiteInfo