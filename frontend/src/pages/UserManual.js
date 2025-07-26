import '../styles/UserManual.css'
import BlankInfoPage from '../components/BlankInfoPage'
import FramedParagraph from '../components/FramedParagraph'
import FramedButton from '../components/FramedButton'
import CompanyInfoImage from '../components/image_components/CompanyInfoImage'
import Logo from '../components/image_components/Logo'
import Arrow from '../components/Arrow'

function UserManual({type, subtitle, mainPath, menupointSetter, destinationMenupoints}) {

    const content1 = []
    const content2 = []
    const content3 = []

    const p1 = "Választó fülek:"
    const p2 = "A választó fülek segítségével lehet navigálni az adattípusok között. A világoskék szín jelöli, hogy éppen melyik fül adatait látjuk."
    const p3 = "A fülek felépítésének struktúrája megegyezik. Minden fülön legfölül látható egy cégszűrő, hónapválasztó illetve a legfontosabb adatok. A fülekre kattintva navigálhatunk a kívánt oldalra."
    const p4 = "Középen találhatóak a szakterületi mutatók havi bontásban. A fenti cégszűrővel lehet módosítani."
    const p5 = "A legalsó harmadban láthatóak a szakterülethez tartozó adatok grafikus megjelenítésben. A grafikon módosítható a mellette lévő szeletelővel, illetve a fenti cégszűrővel."

    const p6 = "Javasolt lépések a használathoz:"
    const p7 = "A fogalomtár a gombra kattintva érhető el. Ezen a felületen le van írva, hogy hogyan képződik az adott mutató."
    const p8 = "A fogalomtárból vissza lehet ugrani az általános adatok fülre."
    const p9 = "A tovább gombra kattintva érhető el az általános információk fül, ahonnan a bal oldalon található fülek segítségével lehet tovább navigálni."

    const p10 = "Az utolsó frissítés dátumát mindig jobb felül jelöljük."

    content1.push(p1)
    content1.push(p2)
    content1.push(p3)
    content1.push(p4)
    content1.push(p5)

    content2.push(p6)
    content2.push(p7)
    content2.push(p8)
    content2.push(p9)

    content3.push(p10)

    return (

        <div className="user-manual">

        <BlankInfoPage
          type={type}
          subtitle={subtitle}
        />

            <div className="user-manual-large-container">

                <div className="user-manual-left-container">

                    <FramedParagraph
                        content={content1}
                    />

                    <FramedButton
                        name="Fogalomtár"
                        destination={`${mainPath}/fogalomtar`}
                        buttonSetter={menupointSetter}
                        newButton={destinationMenupoints[0]}
                    />

                    <FramedParagraph
                        content={content2}
                    />

                </div>

                <div className="user-manual-middle-container">

                    <CompanyInfoImage/>

                    <FramedButton
                        name="Tovább"
                        destination={`${mainPath}/altalanosinformaciok`}
                        buttonSetter={menupointSetter}
                        newButton={destinationMenupoints[1]}
                    />

                </div>

                <div className="user-manual-right-container">

                    <Logo/>

                    <FramedParagraph
                        content={content3}
                    />

                </div>

                <Arrow
                    index="0" flexDirection="row"

                    div1Background="rgb(91, 155, 213)"
                    div1Width="20px" div1Height="10px"
                    div1BorderTop="none" div1BorderBottom="none"
                    div1BorderLeft="none" div1BorderRight="none"
                    div1Rotate="0deg"
                    div1PositionTop="0" div1PositionLeft="0"

                    div2Background="none"
                    div2Width="0" div2Height="0"
                    div2BorderTop="10px solid transparent" div2BorderBottom="10px solid transparent"
                    div2BorderLeft="15px solid rgb(91, 155, 213)" div2BorderRight="none"
                    div2Rotate="0deg"
                    div2PositionTop="0" div2PositionLeft="0"
                />

                <Arrow
                    index="1" flexDirection="row"

                    div1Background="rgb(91, 155, 213)"
                    div1Width="162px" div1Height="10px"
                    div1BorderTop="none" div1BorderBottom="none"
                    div1BorderLeft="none" div1BorderRight="none"
                    div1Rotate="-34deg"
                    div1PoisitionTop="0" div1PositionLeft="0"

                    div2Background="none"
                    div2Width="0" div2Height="0"
                    div2BorderTop="10px solid transparent" div2BorderBottom="10px solid transparent"
                    div2BorderLeft="15px solid rgb(91, 155, 213)" div2BorderRight="none"
                    div2Rotate="-34deg"
                    div2PositionTop="-49px" div2PositionLeft="-16px"
                />

                <Arrow
                    index="2" flexDirection="row"

                    div1Background="rgb(91, 155, 213)"
                    div1Width="139px" div1Height="10px"
                    div1BorderTop="none" div1BorderBottom="none"
                    div1BorderLeft="none" div1BorderRight="none"
                    div1Rotate="-15deg"
                    div1PositionTop="0" div1PositionLeft="0"

                    div2Background="none"
                    div2Width="0" div2Height="0"
                    div2BorderTop="10px solid transparent" div2BorderBottom="10px solid transparent"
                    div2BorderLeft="15px solid rgb(91, 155, 213)" div2BorderRight="none"
                    div2Rotate="-15deg"
                    div2PositionTop="-19.5px" div2PositionLeft="-4px"
                />

                <Arrow
                    index="3" flexDirection="row"

                    div1Background="rgb(91, 155, 213)"
                    div1Width="136px" div1Height="10px"
                    div1BorderTop="none" div1BorderBottom="none"
                    div1BorderLeft="none" div1BorderRight="none"
                    div1Rotate="11deg"
                    div1PositionTop="0" div1PositionLeft="0"

                    div2Background="none"
                    div2Width="0" div2Height="0"
                    div2BorderTop="10px solid transparent" div2BorderBottom="10px solid transparent"
                    div2BorderLeft="15px solid rgb(91, 155, 213)" div2BorderRight="none"
                    div2Rotate="11deg"
                    div2PositionTop="14px" div2PositionLeft="-3px"
                />

                <Arrow
                    index="4" flexDirection="row"

                    div1Background="rgb(91, 155, 213)"
                    div1Width="10px" div1Height="47px"
                    div1BorderTop="none" div1BorderBottom="none"
                    div1BorderLeft="none" div1BorderRight="none"
                    div1Rotate="0deg"
                    div1PositionTop="0" div1PositionLeft="-0.5px"

                    div2Background="none"
                    div2Width="0" div2Height="0"
                    div2BorderTop="10px solid transparent" div2BorderBottom="10px solid transparent"
                    div2BorderLeft="15px solid rgb(91, 155, 213)" div2BorderRight="none"
                    div2Rotate="-90deg"
                    div2PositionTop="-30px" div2PositionLeft="-12.55px"
                />

                <Arrow
                    index="5" flexDirection="row"

                    div1Background="rgb(91, 155, 213)"
                    div1Width="346px" div1Height="10px"
                    div1BorderTop="none" div1BorderBottom="none"
                    div1BorderLeft="none" div1BorderRight="none"
                    div1Rotate="-30deg"
                    div1PositionTop="0" div1PositionLeft="0"

                    div2Background="none"
                    div2Width="0" div2Height="0"
                    div2BorderTop="10px solid transparent" div2BorderBottom="10px solid transparent"
                    div2BorderLeft="15px solid rgb(91, 155, 213)" div2BorderRight="none"
                    div2Rotate="-30deg"
                    div2PositionTop="-89.5px" div2PositionLeft="-25px"
                />

                <Arrow
                    index="6" flexDirection="row"

                    div1Background="rgb(91, 155, 213)"
                    div1Width="305px" div1Height="10px"
                    div1BorderTop="none" div1BorderBottom="none"
                    div1BorderLeft="none" div1BorderRight="none"
                    div1Rotate="26deg"
                    div1PositionTop="0" div1PositionLeft="0"

                    div2Background="none"
                    div2Width="0" div2Height="0"
                    div2BorderTop="10px solid transparent" div2BorderBottom="10px solid transparent"
                    div2BorderLeft="15px solid rgb(91, 155, 213)" div2BorderRight="none"
                    div2Rotate="206deg"
                    div2PositionTop="-69px" div2PositionLeft="-302px"
                />

            </div>

        </div>
    )
}

export default UserManual