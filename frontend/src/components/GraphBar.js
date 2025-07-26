import '../styles/GraphBar.css'

function GraphBar({value, columnLength, maxColumnLength, maxGraphBarHeightInEm, graphValueHeightInEm, zeroIndex}) {

  const signedNumberValue = value === undefined || value === "" ? value : parseInt(value.replaceAll(" ", ""))
  const unsignedNumberValue = Math.abs(signedNumberValue)

  const graphBarHeightInRatio = (unsignedNumberValue / maxColumnLength)
  const graphBarHeightInEm = maxGraphBarHeightInEm * graphBarHeightInRatio
  const graphBarHeight = graphBarHeightInEm + "em"

  const columnFractionHeightInEm = (maxGraphBarHeightInEm / (columnLength - 1) )
  let graphBarBottomInEm = (zeroIndex * columnFractionHeightInEm)
  graphBarBottomInEm = signedNumberValue < 0 ? graphBarBottomInEm - graphBarHeightInEm : graphBarBottomInEm
  const graphBarBottom = graphBarBottomInEm + "em"

  const graphPictureStyle = {

    height: graphBarHeight,
    bottom: graphBarBottom
  }

  const graphValueBottomInEm =
    signedNumberValue < 0 ?
    graphBarBottomInEm - graphValueHeightInEm :
    graphBarBottomInEm + graphBarHeightInEm

  const graphValueBottom = graphValueBottomInEm + "em"

  const graphValueStyle = {

    bottom: graphValueBottom
  }

  return (

    <div className="graph-bar">

        <p className="graph-value" style={graphValueStyle}>{value}</p>
        <div className="graph-picture" style={graphPictureStyle}></div>

    </div>
  )
}

export default GraphBar