var EuropaiUnio = [{
        orszag: "Ausztria",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Belgium",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Bulgária",
        csatlakozas: "2007.01.01"
    },
    {
        orszag: "Ciprus",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Csehország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Dánia",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Egyesült Királyság",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Észtország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Finnország",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Franciaország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Görögország",
        csatlakozas: "1981.01.01"
    },
    {
        orszag: "Hollandia",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Horvátország",
        csatlakozas: "2013.07.01"
    },
    {
        orszag: "Írország",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Lengyelország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Lettország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Litvánia",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Luxemburg",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Magyarország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Málta",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Németország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Olaszország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Portugália",
        csatlakozas: "1986.01.01"
    },
    {
        orszag: "Románia",
        csatlakozas: "2007.01.01"
    },
    {
        orszag: "Spanyolország",
        csatlakozas: "1986.01.01"
    },
    {
        orszag: "Svédország",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Szlovákia",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Szlovénia",
        csatlakozas: "2004.05.01"
    }
];
// 1. feladat: Hány tagja van az Európai Uniónak
function TagallamokSzama(euElemek) {
    return euElemek.length;
}
var tagallamokSzama = TagallamokSzama(EuropaiUnio);
console.log("Az Európai Unió tagjainak száma: " + tagallamokSzama);
//2. feladat: Hány ország csatlakozott 2007-ben
function CsatlakozottK7(csatlakozott) {
    var k7 = 0;
    for (var i = 0; i < EuropaiUnio.length; i++) {
        //if(EuropaiUnio[i].csatlakozas.substr(0,4)=="2007")
        if (EuropaiUnio[i].csatlakozas.includes("2007")) 
        //if(EuropaiUnio[i].csatlakozas.startsWith("2007"))
        {
            k7++;
        }
    }
    return k7;
}
var csatlakozottOrszag = CsatlakozottK7(EuropaiUnio);
console.log("2007-ben csatlakozott " + csatlakozottOrszag + " ország");
//3. feladat: Csatlakozott-e magyarország, az európai uniohoz?
function CsatlakozottEMagyarorszag(Hungary) {
    var csatlakozottE = false;
    for (var i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].orszag === "Magyarország") {
            csatlakozottE = true;
        }
    }
    return csatlakozottE;
}
var Magyarorszag = CsatlakozottEMagyarorszag(EuropaiUnio);
console.log("Csatlakozott e Magyarország: " + Magyarorszag);
/*function Eredmenykiir(logikaiVizsgalat:boolean, igazUzenet:string, hamisUzenet:string):void
{
    if(logikaiVizsgalat==true)
    {
        console.log(igazUzenet);
    }
    else
    {
        console.log(hamisUzenet);
    }
}
Eredmenykiir(CsatlakozottEMagyarorszag(), "Magyarország csatlakozott", "Magyarország NEM csatlakozott");*/
//4. feladat: Volt-e májusban csatlakozó az európai unióhoz?
function VoltEMajusiCsatlakozo(majus) {
    var voltEcsatlakozo = false;
    for (var i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.includes(".05.")) {
            voltEcsatlakozo = true;
        }
    }
    return voltEcsatlakozo;
}
var Majus = VoltEMajusiCsatlakozo(EuropaiUnio);
console.log("Volt e májusi csatlakozó? " + Majus);
//Eredmenykiir(VoltEMajusiCsatlakozo(), "Volt májusi csatlakozó", "NEM volt májusi csatlakozó");
//Extra májusban csatlakozó ország listája
function MajusiCsatlakozok(majus) {
    var majusiak = [];
    for (var i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.substr(5, 2) === "05") {
            majusiak.push(EuropaiUnio[i].orszag);
        }
    }
    return majusiak;
}
var majusiOrszagok = MajusiCsatlakozok(EuropaiUnio);
console.log("A májusban csatlakozott országok: " + majusiOrszagok);
//5. az utolsó csatlakozott ország:
function UtolsoCsatlakozo(utolso) {
    var maxIndex = 0;
    for (var i = 0; i < utolso.length; i++) {
        var aktIndexEv = Number(utolso[i].csatlakozas.substring(0, 4));
        var maxIndexEv = Number(utolso[maxIndex].csatlakozas.substring(0, 4));
        if (aktIndexEv > maxIndexEv) {
            maxIndex = i;
        }
    }
    return utolso[maxIndex].orszag;
}
var utolsoOrszag = UtolsoCsatlakozo(EuropaiUnio);
console.log("Az utolsó csatlakozott ország: " + utolsoOrszag);
//FÜGGVÉNYEK UNIVERZÁLISSÁ TÉTELE:
function AdottEvbenCsatlakozott(ev, euElemek) {
    var adottEvbenCsatlakozokSzama = 0;
    for (var i = 0; i < euElemek.length; i++) {
        if (euElemek[i].csatlakozas.indexOf(ev) === 0) {
            adottEvbenCsatlakozokSzama++;
        }
    }
    return adottEvbenCsatlakozokSzama;
}
var Evbencsatlakozo = AdottEvbenCsatlakozott("2004", EuropaiUnio);
console.log("Az Európai Unióba 2004-ben csatlakozott országok száma: " + Evbencsatlakozo);
//Csatlakozott e adott ország:
function CsatlakozottEAdottOrszag(orszag, euElemek) {
    var csatlakozottE = false;
    for (var i = 0; i < EuropaiUnio.length; i++) {
        if (euElemek[i].orszag === orszag) {
            csatlakozottE = true;
        }
    }
    return csatlakozottE;
}
var orszagCsatlakozott = CsatlakozottEAdottOrszag("Magyarország", EuropaiUnio);
console.log(orszagCsatlakozott);
//6. feladat: Statisztika csatlakozási dátumokról
function Statisztika(EuElemek) {
    var csatlakozasiEvek = [];
    for (var i = 0; i < EuElemek.length; i++) {
        var szerepelE = false;
        for (var j = 0; j < csatlakozasiEvek.length; j++) {
            if (csatlakozasiEvek[j] == EuElemek[i].csatlakozas.substring(0, 4)) {
                szerepelE = true;
                break;
            }
        }
        if (!szerepelE) {
            csatlakozasiEvek.push(EuElemek[i].csatlakozas.substring(0, 4));
        }
    }
    // Évek sorba rendezése
    csatlakozasiEvek.sort();
    // Segédtömb létrehozás és feltöltés
    var csatlakozasiEvekSeged = [];
    for (var i = 0; i < csatlakozasiEvek.length; i++) {
        csatlakozasiEvekSeged.push(0);
    }
    // Kiválogatott évek megszámlálása
    for (var i = 0; i < EuElemek.length; i++) {
        for (var j = 0; j < csatlakozasiEvek.length; j++) {
            if (csatlakozasiEvek[j] == EuElemek[i].csatlakozas.substr(0, 4)) {
                csatlakozasiEvekSeged[j]++;
            }
        }
    }
    for (var i = 0; i < csatlakozasiEvek.length; i++) {
        console.log(csatlakozasiEvek[i] + ":" + csatlakozasiEvekSeged[i]);
    }
}
var statisztika1 = Statisztika(EuropaiUnio);
