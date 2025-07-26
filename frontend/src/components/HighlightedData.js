import '../styles/HighlightedData.css'

function HighlightedData({name, data}) {

  return (

    <div className="highlighted-data">

        <h3>{name}</h3>
        <p>{data}</p>

    </div>
  )
}

export default HighlightedData