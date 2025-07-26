import '../styles/LegalNoticeText.css'

function LegalNoticeText() {

    return (

        <div className="legal-notice-text">

            <h3>Tisztelt Felhasználó!</h3>

            <p>
                Tájékoztatom, hogy a jelen Információs Adatok Webapp megnyitásával minden felhasználó köteles az abban szereplő és tudomására jutott minden tényt, adatot, illetve a táblázatok felépítését érintő, valamint az abban használt technológiai megvalósításokat és valamennyi, a Társaság működését érintő információt, üzleti titokként kezelni, mellyel összefüggésben titoktartási kötelezettség terheli.
            </p>
            <p>
                A felhasználók a táblázatokban szereplő bizalmas információkat harmadik fél tudomására nem hozhatják és a nyilvánosság számára sem tehetik elérhetővé, a hozzáférési jogosultság más arra - egyébként - nem jogosult, illetéktelen személy részére történő biztosítása, átengedése is szigorúan tilos.
            </p>
            <p>
                Tájékoztatom, hogy a fenti kötelezettségek megszegése fegyelmi eljárást vonhat maga után, mely adott esetben akár a munkaviszony megszüntetését és kártérítési felelősséget is eredményezhet.
            </p>

            <p id="last-paragraph">
                A táblázat megnyitásával a fentieket tudomásul veszi a felhasználó és megtartja az abban foglaltakat.
            </p>

        </div>
    )
}

export default LegalNoticeText