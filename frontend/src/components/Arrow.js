import styled from 'styled-components'

function Arrow({index, flexDirection,

                div1Background,
                div1Width, div1Height,
                div1BorderTop, div1BorderBottom,
                div1BorderLeft, div1BorderRight,
                div1Rotate,
                div1PositionTop, div1PositionLeft,
                
                div2Background,
                div2Width, div2Height,
                div2BorderTop, div2BorderBottom,
                div2BorderLeft, div2BorderRight,
                div2Rotate,
                div2PositionTop, div2PositionLeft
}){

    const ArrowDiv0 = styled.div`
    
        display: flex;
        flex-direction: ${flexDirection};
        justify-content: center;
        align-items: center;
    `
    const ArrowDiv1 = styled.div`

        background: ${div1Background};
        width: ${div1Width};
        height: ${div1Height};
        border-top: ${div1BorderTop};
        border-bottom: ${div1BorderBottom};
        border-left: ${div1BorderLeft};
        border-right ${div1BorderRight};
        transform: rotate(${div1Rotate});
        position: relative;
        top: ${div1PositionTop};
        left: ${div1PositionLeft};
    `

    const ArrowDiv2 = styled.div`

        background: ${div2Background};
        width: ${div2Width};
        height: ${div2Height};
        border-top: ${div2BorderTop};
        border-bottom: ${div2BorderBottom};
        border-left: ${div2BorderLeft};
        border-right ${div2BorderRight};
        transform: rotate(${div2Rotate});
        position: relative;
        top: ${div2PositionTop};
        left: ${div2PositionLeft};
    `

  return (

    <ArrowDiv0 className={"arrow" + index}>

        <ArrowDiv1 className={"arrow-div1"}/>
        <ArrowDiv2 className={"arrow-div2"}/>

    </ArrowDiv0>
  )
}

export default Arrow