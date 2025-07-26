import '../styles/CrisisAccommodation.css'
import FramedLabel from './FramedLabel'
import House from './image_components/House'

function CrisisAccommodation() {

  return (

    <div className="crisis-accommodation">

        <FramedLabel text="Krízis Szálló"/>

        <div className="crisis-accommodation-container">

            <p>
                A társasház négy lakásos.<br/>
                Emeletenként 2-2 lakással. Berendezve bútorokkal, alap háztartási eszközökkel (mosógép, hűtő, mikró, tűzhely)<br/>
                A fszt/1. lakás 66nm 4 férfi kollégánk elhelyezése megoldható itt. (2 egyszemélyes, 1 kétszemélyes szoba)<br/>
                A fszt/2. lakás hölgyek által lakott. 54,3 nm, 3 férőhelyes. (1 egyszemélyes, 1 kétszemélyes szoba)<br/>
                Az I/3. lakás szintén női rész, 69nm, 4 férőhelyes. (2 egyszemélyes, 2 kétszemélyes szoba)<br/>
                Az I/4. lakás szintén női, 72, 5nm, 4 férőhelyes. (Ebben a lakásban most lakik egy nem-látó kolléganő vakvezető munkakutyával és egy egyedülálló anyuka a kislányával egyszemélyes szobákban + 2 kolléganő a kétszemélyes szobában.)
                15 lakó elhelyezésére van lehetőség a Jávorka utcai Krízis szállón.<br/>
                Külön egyszemélyes szobában 7 fő: 23 160 Ft/fő havonta.<br/>
                Kétszemélyes szobában 8 fő: 19 300 Ft/fő havonta + rezsi.<br/>
                A lakások külön mérőórákkal felszereltek, a lakók közösen fizetik az elhasznált víz, gáz és áram után a számlákat.<br/>
            </p>

            <House/>

        </div>

    </div>
  )
}

export default CrisisAccommodation