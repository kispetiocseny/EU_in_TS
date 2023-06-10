var EuropaiUnio:EuElem[] = [{
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

interface EuElem{
    orszag:string;
    csatlakozas:string;
}

// 1. feladat: Hány tagja van az Európai Uniónak
function TagallamokSzama(euElemek: EuElem[]): number {
    return euElemek.length;
}

//Frontend megjelenítő
function TagallamokSzamaMegjelenito():void{
  console.log("Az Európai Unió tagállamainak száma: "+TagallamokSzama(EuropaiUnio));
}
//Függvény meghívás
TagallamokSzamaMegjelenito();
  //2. feladat: Hány ország csatlakozott 2007-ben
function CsatlakozottK7(csatlakozott:EuElem[]):number{
	var k7:number=0;
    for(let i:number=0;i<csatlakozott.length;i++)
    {
    	//if(EuropaiUnio[i].csatlakozas.substr(0,4)=="2007")
        if(csatlakozott[i].csatlakozas.substr(0,4)=="2007")
        //if(EuropaiUnio[i].csatlakozas.startsWith("2007"))
        {
        	k7++;
        }
    }
    return k7;
}
//Frontend rész 
function CsatlakozottK7Megjelenito():void{
  console.log("A 2007-ben csatlakozott országok száma: "+CsatlakozottK7(EuropaiUnio));
}
//Frontend függvény meghívása
CsatlakozottK7Megjelenito();

//3. feladat: Csatlakozott-e magyarország, az európai uniohoz?
function CsatlakozottEMagyarorszag(euElemek:EuElem[]):boolean{
	var csatlakozottE:boolean=false;
    for(let i:number=0;i<euElemek.length;i++){
    	if(euElemek[i].orszag==="Magyarország")
        {
        	csatlakozottE=true;
        }
    }
    return csatlakozottE;
}
//Frontend rész 
function CsatlakozottEMagyarorszagMegjelenito(allitas:boolean):void{
  if(allitas==true){
  console.log("Magyarország csatlakozott az EU-hoz.");
}
else{
  console.log("Magyarország NEM csatlakozott az EU-hoz.");
}
}
//Frontend függvény meghívása
CsatlakozottEMagyarorszagMegjelenito(CsatlakozottEMagyarorszag(EuropaiUnio));

//4. feladat: Volt-e májusban csatlakozó az európai unióhoz?
function VoltEMajusiCsatlakozo(majus:EuElem[]):boolean{
	var voltEcsatlakozo:boolean=false;
    for(let i=0;i<majus.length; i++)
    {
    	if(majus[i].csatlakozas.substr(5,2)=="05")
        {
        	voltEcsatlakozo=true;
        }
    }
    return voltEcsatlakozo;
}

//Frontend rész

function VoltEMajusiMegjelenito(allitas:boolean):void{
  if(allitas==true){
  console.log("Volt májusban csatlakozó");
}
else{
  console.log("NEM volt májusban csatlakozó");
}
}
//Frontend függvény meghívása
VoltEMajusiMegjelenito(VoltEMajusiCsatlakozo(EuropaiUnio));

//Extra májusban csatlakozó ország listája
function MajusiCsatlakozok(majus:EuElem[]): string[] {
    var majusiak: string[] = [];
  
    for (let i: number = 0; i < EuropaiUnio.length; i++) {
      if (EuropaiUnio[i].csatlakozas.substr(5, 2) === "05") {
        majusiak.push(EuropaiUnio[i].orszag);
      }
    }
  
    return majusiak;
  }
var majusiOrszagok:string[]=MajusiCsatlakozok(EuropaiUnio);
console.log("A májusban csatlakozott országok: "+majusiOrszagok);


//5. az utolsó csatlakozott ország:
function UtolsoCsatlakozo(utolso: EuElem[]): number {
    var maxIndex: number = 0;
  
    for (let i: number = 0; i < utolso.length; i++) {
      var aktIndexEv: number = Number(utolso[i].csatlakozas.substring(0, 4));
      var maxIndexEv: number = Number(utolso[maxIndex].csatlakozas.substring(0, 4));
      
      if (aktIndexEv > maxIndexEv) {
        maxIndex = i;
      }
    }

    return maxIndex;
  }
//Frontend rész megjelenítő
function UtolsoCsatlakozoMegjelenito(orszagIndex:number):void{
  console.log("Legutolsó csatlakozó ország neve: "+EuropaiUnio[orszagIndex].orszag)
  console.log("Legutolsó csatlakozó ország csatlakozásának dátuma: "+EuropaiUnio[orszagIndex].csatlakozas)
}
//Frontend függvény meghívás
UtolsoCsatlakozoMegjelenito(UtolsoCsatlakozo(EuropaiUnio));

//FÜGGVÉNYEK UNIVERZÁLISSÁ TÉTELE:
function AdottEvbenCsatlakozott(ev: string, euElemek: EuElem[]): number {
    var adottEvbenCsatlakozokSzama: number = 0;
  
    for (let i = 0; i < euElemek.length; i++) {
      if (euElemek[i].csatlakozas.indexOf(ev) ===0) {
        adottEvbenCsatlakozokSzama++;
      }
    }
  
    return adottEvbenCsatlakozokSzama;
  }
  
  const Evbencsatlakozo: number = AdottEvbenCsatlakozott("2004", EuropaiUnio);
  console.log("Az Európai Unióba 2004-ben csatlakozott országok száma: " + Evbencsatlakozo);
  

//Csatlakozott e adott ország:
function CsatlakozottEAdottOrszag(orszag: string, euElemek: EuElem[]): boolean {
    var csatlakozottE: boolean = false;
    for (let i = 0; i < EuropaiUnio.length; i++) {
      if (euElemek[i].orszag === orszag) {
        csatlakozottE = true;
      }
    }
    return csatlakozottE;
  }
  const orszagCsatlakozott: boolean = CsatlakozottEAdottOrszag("Magyarország", EuropaiUnio);
  console.log(orszagCsatlakozott);

  //6. feladat: Statisztika csatlakozási dátumokról
interface StatiszkikaAdat{
  ev:number;
  csatlakozottakSzama:number;
}


  function Statisztika(orszagLista: EuElem[]): StatiszkikaAdat[]{
    var evLista: string[] = [];
    for (let i: number = 0; i < orszagLista.length; i++) {
      var szerepelE: boolean = false;
      for (let j: number = 0; j < evLista.length; j++) {
        if (evLista[j] == orszagLista[i].csatlakozas.substring(0, 4)) {
          szerepelE = true;
        }
      }
      if (szerepelE==false) {
        evLista.push(orszagLista[i].csatlakozas.substring(0, 4));
      }
    }
  
    // Évek sorba rendezése
    evLista.sort();
    // 2. lépés: Csatlakozások megszámolása dátum alapján
    var evListaSeged: number[] = [];
    for(let i:number=0;i<orszagLista.length;i++){
      evListaSeged.push(0);
    }
    for (let i: number = 0; i < orszagLista.length; i++) {
      for(let j:number = 0;j< evLista.length;j++){
      if (evLista[j] == orszagLista[i].csatlakozas.substring(0, 4)) {
        evListaSeged[j]++;
    }
  }
}
//3. létrehozzuk az objektum típusú tömböt
  var EvekStatisztika:StatiszkikaAdat[]=[];
  for(let i:number=0;i<evLista.length;i++){
    var objektumElem:StatiszkikaAdat={
      ev:Number(evLista[i]),
      csatlakozottakSzama:evListaSeged[i]
    };
    EvekStatisztika.push(objektumElem);
  }
  return EvekStatisztika;
}
//Frontend rész
function StatisztikaMegjelenito(megjelenitendoObjektum:StatiszkikaAdat[]):void{
  for(let i:number=0;i<megjelenitendoObjektum.length;i++)
{
  console.log("Csatlakozas eve: "+megjelenitendoObjektum[i].ev+","+megjelenitendoObjektum[i].csatlakozottakSzama+" db ország");
}}
//Megjelenítő
StatisztikaMegjelenito(Statisztika(EuropaiUnio));
