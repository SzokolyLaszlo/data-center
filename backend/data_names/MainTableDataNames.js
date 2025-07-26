const generalInfo = [

    "Nem SZGYF fenntartású Rehab foglalkoztatók",
    "Nem SZGYF fenntartású Rehab foglalkoztatók MMK létszám",
    "Rehab. foglalkoztatók száma  ",
    "Saját tulajdonú használaton kívüli telephelyek/ingatlanok",
    "SZGYF fenntartású Rehab foglalkoztatók",
    "SZGYF fenntartású Rehab foglalkoztatók MMK létszám",
    "Telephelyek száma ",
    "Üzemek száma "
];

const economicIndicators = [

    "Árbevétel (Ft.)",
    "Bérmunkás Árbevétel ",
    "Anyagos Árbevétel ",
    "Minimum működési tartalék (Ft.) ",
    "Szabad fő bankszámla (Ft.)",
    "Cashflow hiányából adódó tartozás (Ft.)",
    "Bérlet költség / munkábajárás (Ft.)",
    "Személygépkocsi / munkábajárás (Ft.)"
];

const personnelManagement = [

    "Keretet adó MMK-s létszám",
    "Központi munkavállalók létszáma (MMK, Nem MMK) ",
    "Központi szellemi munkavállalók létszáma (MMK, Nem MMK) ",
    "Központi szellemi munkavállalók létszáma (MMK, Nem MMK) Laky",
    "Munkajogi létszám összesen",
    "Munkajogi MMK létszám",
    "Nem MMK létszám ",
    "Nem Produktív létszám ",
    "Optimális szerződéses létszámtól való eltérés (fő) ",
    "Produktív létszám ",
    "Szerződéses MMK létszám ",
    "Szerződéstől eltérés (fő) "
];

const procurementIndicators = [

    "Jóváhagyott beszerzés igény",
    "Elfogadott beruházások ",
    "Alapanyag beszerzés "
];

const logisticsIndicators = [

    "Futott km",
    "Vásárolt üzemanyag mennyiség (liter) - benzin",
    "Vásárolt üzemanyag költség (Nettó Ft) - benzin",
    "Vásárolt üzemanyag mennyiség (liter) - diesel",
    "Vásárolt üzemanyag költség (Nettó Ft) - diesel",
    "Vásárolt üzemanyag mennyiség (liter) - összesített",
    "Vásárolt üzemanyag költség (Nettó Ft) - összesített",
    "Felhasznált Útdíj (nettó Ft.)",
    "Autópálya-matrica (nettó Ft.)",
    "Szerviz költség (nettó Ft.)",
    "Gépjármű mosás",
    "KGFB költség (Áfa mentes)",
    "Casco költség (Áfa mentes)",
    "Futárszolgálat költsége (GLS, MPL)",
    "Külső szállítás",
    "Külső személyszállítás",
    "Járművek életkora",
    "Használatban lévő járművek (db)",
    "Javítás alatt lévő járművek (db)",
    "Leállított járművek (db)",
    "Eladott járművek (db)",
    "Targonca Üzemóra (óra) ",
    "Bejövő raklapforgalom - Központi raktárak (db)",
    "Kimenő raklapforgalom - Központi raktárak (db)",
    "Összesített raklapforgalom - Központi raktárak (db)"
];

const rehabilitationData = [

    "Tranzit foglalkoztatott MMK fő ",
    "Tartósan foglalkoztatott MMK fő ",
    "Megtartott mentori fogadóórák száma",
    "Mentorok által biztosított segítés/támogatások száma az MMK munkavállalóknak",
    "Beérkezett bevonhatóságot alátámasztó dokumentumok, komplex minősítések, új és nem új ellátás határozatok száma",
    "Kérelmek (felülvizsgálatra) száma",
    "Személyes tanácsadások száma",
    "Hivatalos ügyintézések száma",
    "Új ellátás igénylések száma (újraszámoltatás is)",
    "Elkészült személyes rehab. tervek,  illetve annak  éves értékelésének száma összesen",
    "IKR-ben a rögzítések száma (kilépés, belépés, módosítás, kivétel-visszatétel, keretmódosítás) összesen",
    "Hallássérült",
    "Látássérült",
    "Autizmussal élő",
    "Mozgássérült",
    "Értelmi sérült",
    "Pszichiátriai beteg"
];

const realEstateIndicators = [

    "Vízdíj ",
    "Gázdíj",
    "Áramdíj",
    "Egyéb (csatorna, RHD) ",
    "Ingatlan bérlet "
];

const socialValues = [

    "Különadomány (Ft)",
    "Napi áruházi mentés - Budapest Tesco (kg)",
    "Napi áruházi mentés - Budapest Lidl Hungária út (kg)",
    "Napi áruházi mentés - Budapest Lidl Mogyoródi út (kg)",
    "Napi áruházi mentés - Budapest Penny Hős utca (kg)",
    "Napi áruházi mentés - Hajdúnánás Lidl (kg)",
    "Napi áruházi mentés - Hajdúnánás Aldi (kg)",
    "Napi áruházi mentés - Szeged (kg)"
];

const qualityControl = [

    "Komplett üzemi/telephelyi kockázatértékelési dokumentáció meglévő ",
    "Komplett üzemi/telephelyi kockázatértékelési dokumentáció esedékes ",
    "Szemlék 2024 Tervezett",
    "Szemlék 2024 Megtartott ",
    "Felülvizsgálati költségek alapdíj ",
    "Felülvizsgálati költségek kiszállási díj ",
    "Felülvizsgálati költségek Munkavédelmi díjak",
    "Felülvizsgálati költségek Tűzvédelmi díjak",
    "Felülvizsgálati költségek Épülettel kapcsolatos mérések",
    "Felülvizsgálati költségek Környezetvédelem",
    "Hulladékszállítás költsége "
];

const asterisks = [

    [],
    [
        "", "", "", "", "", "", "", ""
    ],
    [
        "", "", "", "", "", "", "", ""
    ],
    [
        "*", "", "", "", "", "", "", "", "", "", "", "*"
    ],
    [
        "", "", ""
    ],
    [
        "", "***", "***", "***", "***", "", "", "", "", "", "**", "*",
        "*", "", "", "***", "", "", "", "", "", "", "", "", ""
    ],
    [
        "", "", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*",
        "*", "*", "*", "*"
    ],
    [
        "", "", "", "", "*"
    ],
    [
        "*", "*", "*", "*", "* **", "*", "*", "*"
    ],
    [
        "", "", "", "", "", "", "", "", "", "", ""
    ]
];

const notShownData = [

    [],
    [],
    [],
    [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        2025,
        undefined,
        undefined,
        undefined
    ],
    [],
    [],
    [],
    [],
    [],
    [
        2025,
        2025,
        2025,
        2025,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
    ]
];

const getFooters = (year) => {

    return (
        
        [
            [],
            [],
            [],
            [
                year === "2024" ?
                    "*Átlagos létszámadat" :
                    "*Statisztikai létszámadat"
            ],
            [],
            [
                "*Évente egyszer felmerülő költség",
                "**2024.05.01. óta figyelt adat",
                "***2025.01.01. óta figyelt adat"
            ],
            [
                "*3 havonta frissülő adat"
            ],
            [
                "*Egymásköztivel"
            ],
            [
                "*Az adatok cégenkénti bontásban nem állnak rendelkezésre",
                "**2025.01.01. óta figyelt adat"
            ],
            []
        ]
    );
}

exports.generalInfoDataNames = generalInfo;
exports.economicIndicatorsDataNames = economicIndicators;
exports.personnelManagementDataNames = personnelManagement;
exports.procurementIndicatorsDataNames = procurementIndicators;
exports.logisticsIndicatorsDataNames = logisticsIndicators;
exports.rehabilitationDataNames = rehabilitationData;
exports.realEstateIndicatorsDataNames = realEstateIndicators;
exports.socialValuesDataNames = socialValues;
exports.qualityControlDataNames = qualityControl;

exports.asterisks = asterisks;
exports.notShownData = notShownData;
exports.getFooters = getFooters;