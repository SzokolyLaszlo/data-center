const Express = require('express');
const Path = require('path');
const Cors = require('cors');
const CorsOptions = require('./config/CorsOptions');
const CookieParser = require('cookie-parser');
require('dotenv').config();
const Db = require('./database/Database');
const ArrayUtils = require('./utils/ArrayUtils');
const Converter = require('./utils/Converter');
const Companies = require('./data_names/Companies');
const Years = require('./utils/Years');
const UserHandler = require('./handlers/UserHandler');
const LuHandler = require('./handlers/LastUpdateHandler');
const HdHandler = require('./handlers/HighlightedDataHandler');
const HdDataNames = require('./data_names/HighlightedDataNames');
const MtHandler = require('./handlers/MonthTableHandler');
const MtDataNames = require('./data_names/MainTableDataNames');
const SlHandler = require('./handlers/SelectorHandler');
const GrHandler = require('./handlers/GraphHandler');
const GcHandler = require('./handlers/GraphColumnHandler');
const QytHandler = require('./handlers/QuarterlyYearTableHandler');
const CdHandler = require('./handlers/CompanyDataHandler');
const DfsHandler = require('./handlers/DbFieldSelectorHandler');
const CccHandler = require('./handlers/CostCentreCatalogueHandler');
const FsHandler = require('./handlers/FileSystemHandler');



const url = process.env.BACKEND_URL;
const port = process.env.PORT;

const db0 = "Metadata";
const db1 = 'CompanyInfo';
const db2 = 'SiteInfo';

const companies = Companies.companies;
const years = Years.years;



const App = Express();

App.use(Cors(CorsOptions));
App.use(CookieParser());
App.use(Express.static(__dirname + '/../frontend/build'));

App.listen(port, () => {

  console.log(`CompanyInfo WebApp listening at ${url}:${port}`);
});

console.log(process.env.BACKEND_URL);
console.log(process.env.PORT);
console.log(process.env.MONGO_URL);
console.log(process.env.JWT_SECRET);



App.get('/api/login', async function (req, res) {

  await UserHandler.handleLogin(req, res);
});

App.delete('/api/login', function (req, res) {

  UserHandler.clearCookies(req, res);
});



App.get('/api/profile', function(req, res) {

  res.send(UserHandler.verifyCookies(req));
})

App.get('/api/passwordchange', async function(req, res){

  res.send(await UserHandler.changePassword(req));
})



App.post('/api/joginyilatkozat', async function (req, res) {

  res.status(200).send(await UserHandler.firstLogin(req));
});



App.get('/api/via/altalanosinformaciok', async function (req, res) {

  res.send(await getInfoPageData(req, MtDataNames.generalInfoDataNames, 1));
});

App.get('/api/via/gazdasagimutatok', async function (req, res) {

  res.send(await getInfoPageData(req, MtDataNames.economicIndicatorsDataNames, 2));
});

App.get('/api/via/letszamgazdalkodas', async function (req, res) {

  res.send(await getInfoPageData(req, MtDataNames.personnelManagementDataNames, 3));
});

App.get('/api/via/beszerzesselkapcsolatosmutatok', async function (req, res) {

  res.send(await getInfoPageData(req, MtDataNames.procurementIndicatorsDataNames, 4));
});

App.get('/api/via/logisztikaimutatok', async function (req, res) {

  res.send(await getInfoPageData(req, MtDataNames.logisticsIndicatorsDataNames, 5));
});

App.get('/api/via/rehabilitaciosadatok', async function (req, res) {

  res.send(await getInfoPageData(req, MtDataNames.rehabilitationDataNames, 6));
});

App.get('/api/via/ingatlanokkalkapcsolatosmutatok', async function (req, res) {

  res.send(await getInfoPageData(req, MtDataNames.realEstateIndicatorsDataNames, 7));
});

App.get('/api/via/szocialisertekeink', async function (req, res) {

  res.send(await getInfoPageData(req, MtDataNames.socialValuesDataNames, 8));
});

App.get('/api/via/minosegiranyitas', async function (req, res) {

  res.send(await getInfoPageData(req, MtDataNames.qualityControlDataNames, 9));
});

App.get('/api/via/vallalatiadatok', async function (req, res) {

  res.send(await getCompanyData(req));
});

App.get('/api/via/koltseghelykatalogus', async function (req, res) {

  res.send(await getCostCentreData(req));
});

App.get('/api/via/dokumentumok', async function (req, res) {

  await FsHandler.handleFileOperation(req, res, "/company_info_documents/");
});

App.post('/api/via/dokumentumok', FsHandler.upload.single("file"), async function (req, res) {
  
  await FsHandler.uploadDocument(req, res);
});

App.get('/api/via/fogalomtar', async function (req, res) {

  res.send(await getSourceTableData(db1, 'glossary'));
});

App.get('/api/via/felhasznalok', async function (req, res) {

  res.send(await getSourceTableData(db0, 'users'));
});

App.get('/api/via/felhasznaloidokumentumok', async function (req, res) {

  res.send(await getSourceTableData(db0, 'user_documents'));
});

App.get('/api/via/utolsomodositas', async function (req, res) {

  res.send(await getSourceTableData(db1, 'last_modified'));
});

App.get('/api/via/kef', async function (req, res) {

  res.send(await getSourceTableData(db1, 'kef'));
});

App.get('/api/via/vallalatiadatokalap', async function (req, res) {

  res.send(await getSourceTableData(db1, 'company_data'));
});

App.get('/api/via/koltseghelyek', async function (req, res) {

  res.send(await getSourceTableData(db1, 'cost_centres'));
});

App.get('/api/via/hataridokfelelosok', async function (req, res) {

  res.send(await getSourceTableData(db1, 'deadlines_responsibles'));
});



App.get('/api/tia/koltseghelykatalogus', async function (req, res) {

  res.send(await getCostCentreData(req));
});

App.get('/api/tia/dokumentumok', async function (req, res) {

  await FsHandler.handleFileOperation(req, res, "/site_info_documents/");
});

App.post('/api/tia/dokumentumok', FsHandler.upload.single("file"), async function (req, res) {
  
  await FsHandler.uploadDocument(req, res);
});

App.get('/api/tia/fogalomtar', async function (req, res) {

  res.send(await getSourceTableData(db2, 'glossary'));
});

App.get('/api/tia/felhasznalok', async function (req, res) {

  res.send(await getSourceTableData(db0, 'users'));
});

App.get('/api/tia/felhasznaloidokumentumok', async function (req, res) {

  res.send(await getSourceTableData(db0, 'user_documents'));
});

App.get('/api/tia/utolsomodositas', async function (req, res) {

  res.send(await getSourceTableData(db2, 'last_modified'));
});

App.get('/api/tia/thaltalanosadatok', async function (req, res) {

  res.send(await getSourceTableData(db2, 'st_general_data'));
});

App.get('/api/tia/haviadatok', async function (req, res) {

  res.send(await getSourceTableData(db2, 'monthly_data'));
});

App.get('/api/tia/kraltalanosadatok', async function (req, res) {

  res.send(await getSourceTableData(db2, 'md_general_data'));
});

App.get('/api/tia/raklapalap', async function (req, res) {

  res.send(await getSourceTableData(db2, 'pallet_traffic'));
});

App.get('/api/tia/termelesiranyitasiinfotabla', async function (req, res) {

  res.send(await getSourceTableData(db2, 'production_management_infotable'));
});

App.get('/api/tia/koltseghelyek', async function (req, res) {

  res.send(await getSourceTableData(db1, 'cost_centres'));
});



App.get('*', function(req, res) {

  res.sendFile(

    __dirname + '/../frontend/build/index.html',

    function(err) {

      if (err) {

        res.status(500).send(err);
      }
  });
});



async function getInfoPageData(req, mtDataNames, menupointId) {

  const companyId         = parseInt(req.query.company);
  const yearId            = parseInt(req.query.year);
  const month0Id          = parseInt(req.query.month0);
  const graphId           = parseInt(req.query.graph);
  let month1Ids           = req.query.month1;
  let quarterlyYearIds    = req.query.quarterlyYear;

  month1Ids               = ArrayUtils.getArrayFromParam(month1Ids);
  quarterlyYearIds        = ArrayUtils.getArrayFromParam(quarterlyYearIds);

  month1Ids               = Converter.getNumbersFromStrings(month1Ids);
  quarterlyYearIds        = Converter.getNumbersFromStrings(quarterlyYearIds);

  const months0           = ArrayUtils.modifyIndexesByAmount([month0Id], 1);
  const months1           = ArrayUtils.modifyIndexesByAmount(month1Ids, 1);
  const quarterlyYears    = ArrayUtils.modifyIndexesByAmount(quarterlyYearIds, 1);


  const lastUpdateData                    = await LuHandler.getData(db1, menupointId);
  const highlightedData                   = await HdHandler.getData(companies[companyId], years[yearId], months0, HdDataNames.dataNames);

  const monthTableData                    = await MtHandler.getData(companies[companyId], years[yearId], months1, mtDataNames, menupointId);
  const quarterlyYearTableData            = await QytHandler.getData(companies[companyId], years[yearId], quarterlyYears, mtDataNames, menupointId);


  const response = [];

  response.push(lastUpdateData);
  response.push(highlightedData);

  if (menupointId !== 8) {

    const graphSelectorData               = SlHandler.getData(monthTableData[0], true, false, false);

    const monthGraphData                  = await GrHandler.getData(companies[companyId], years[yearId], months1, mtDataNames, menupointId, graphId, false);
    const monthGraphColumnData            = GcHandler.getData(monthGraphData[1]);

    const quarterlyYearGraphData          = await GrHandler.getData(companies[companyId], years[yearId], months1, mtDataNames, menupointId, graphId, true, quarterlyYears);
    const quarterlyYearGraphColumnData    = GcHandler.getData(quarterlyYearGraphData[1]);

    response.push(monthTableData);
    response.push(graphSelectorData);
    response.push(monthGraphData);
    response.push(monthGraphColumnData);

    response.push(quarterlyYearTableData);
    response.push(quarterlyYearGraphData);
    response.push(quarterlyYearGraphColumnData);
  }
  else {

    response.push(quarterlyYearTableData);
  }

  return response;
}

async function getCompanyData(req) {

  const companyId = parseInt(req.query.company);

  const lastUpdateData = await LuHandler.getData(db1, 10);
  const companyData    = await CdHandler.getData(companies[companyId]);

  const response = [];

  response.push(lastUpdateData);
  response.push(companyData);

  return response;
}

async function getCostCentreData(req) {

  let multipleFilters = req.query.multipleFilters;
  multipleFilters     = Converter.getBoolsFromStrings(multipleFilters);

  const companyIds      = req.query.company;
  const statusIds       = req.query.status;
  const typeIds         = req.query.type;
  const directorateIds  = req.query.directorate;
  const organizationIds = req.query.organization;

  const lastUpdateData = await LuHandler.getData(db1, 10);

  const allFilterDataNames = await getCostCentreFilterDataNames({});

  const companies     = getFilterDataName(allFilterDataNames[0], companyIds);
  const statuses      = getFilterDataName(allFilterDataNames[1], statusIds);
  const types         = getFilterDataName(allFilterDataNames[2], typeIds);
  const directorates  = getFilterDataName(allFilterDataNames[3], directorateIds);
  const organizations = getFilterDataName(allFilterDataNames[4], organizationIds);

  const currentDataNames = [

    companies,
    statuses,
    types,
    directorates,
    organizations
  ];

  const currentQuery           = getCostCentreQuery(currentDataNames);
  const currentFilterDataNames = await getCostCentreFilterDataNames(currentQuery);

  const anyMultipleFilters = ArrayUtils.orArray(multipleFilters);

  const availableFilterQueries   = anyMultipleFilters ? getAvailableFilterQueries(currentDataNames, getCostCentreQuery) : [];
  const availableFilterDataNames = anyMultipleFilters ? await getAvailableFilterDataNames(availableFilterQueries, getCostCentreFilterDataNames) : [];

  for (let i = 0; i < currentFilterDataNames.length; i++) {

    currentFilterDataNames[i] = multipleFilters[i]? availableFilterDataNames[i] : currentFilterDataNames[i];

    getOriginalDataNameIndexes(currentFilterDataNames[i], allFilterDataNames[i]);
  }

  const intoTableData = await CccHandler.getData(currentQuery);

  const response = [];

  response.push(lastUpdateData);
  response.push(currentFilterDataNames);
  response.push(intoTableData);

  return response;
}

async function getCostCentreFilterDataNames(query) {

  const companyDataNames      = await DfsHandler.getData(db1, "cost_centres", "Vállalat",          query);
  const statusDataNames       = await DfsHandler.getData(db1, "cost_centres", "Aktív?",            query);
  const typeDataNames         = await DfsHandler.getData(db1, "cost_centres", "Költséghely típus", query);
  const directorateDataNames  = await DfsHandler.getData(db1, "cost_centres", "Igazgatóság",       query);
  const organizationDataNames = await DfsHandler.getData(db1, "cost_centres", "Szervezet",         query);

  return [companyDataNames, statusDataNames, typeDataNames, directorateDataNames, organizationDataNames];
}

function getFilterDataName(dataNames, dataNameIds) {

  const filteredDataNames = [];

  dataNameIds = ArrayUtils.getArrayFromParam(dataNameIds);

  for (let i = 0; i < dataNameIds.length; i++) {

    const dataNameId = parseInt(dataNameIds[i]);
    const filteredDataName = dataNames[dataNameId][0];
    filteredDataNames.push(filteredDataName);
  }

  return filteredDataNames;
}

function getCostCentreQuery(currentFilters) {

  const companies     = currentFilters[0];
  const statuses      = currentFilters[1];
  const types         = currentFilters[2];
  const directorates  = currentFilters[3];
  const organizations = currentFilters[4];

  return {

    $and: [

      companies.length <= 0 ? {} :
        {
          "Vállalat": {

            $in: companies
          }
        },

      statuses.length <= 0 ? {} :
        {
          "Aktív?": {
            
            $in: statuses
          }
        },

      types.length <= 0 ? {} :
        {
          "Költséghely típus": {
            
            $in: types
          }
        },

      directorates.length <= 0 ? {} :
        {
          "Igazgatóság": {
            
            $in: directorates
          }
        },

      organizations.length <= 0 ? {} :
        {
          "Szervezet": {
            
            $in: organizations
          }
        }
    ]
  };
}

function getAvailableFilterQueries(dataNames, getQuery) {

  const complementerQueries = [];

  for (let i = 0; i < dataNames.length; i++) {

    const complementerDataNames = [...dataNames];
    complementerDataNames[i] = [];

    const complementerQuery = getQuery(complementerDataNames);
    complementerQueries.push(complementerQuery);
  }

  return complementerQueries;
}

async function getAvailableFilterDataNames(queries, getDataNames) {

  const availableDataNames = [];

  for (let i = 0; i < queries.length; i++) {

    const allDataNames = await getDataNames(queries[i]);
    availableDataNames.push(allDataNames[i]);
  }

  return availableDataNames;
}

function getOriginalDataNameIndexes(currentDataNames, allDataNames) {

  for (let i = 0; i < currentDataNames.length; i++) {

    let j = 0;
    while(currentDataNames[i][0] != allDataNames[j][0]) {

      j++;
    }

    let originalIndex = allDataNames[j][1];

    currentDataNames[i].push(originalIndex);
  }
}



async function getSourceTableData(dbName, tableName) {

  let result = await Db.read(dbName, tableName, false,

    {},

    {

      projection: {

        "_id": 0
      }
    }
  );

  return result;
}