import '../styles/HighlightedDataContainer.css'
import HighlightedData from './HighlightedData'

function HighlightedDataContainer({dataNames, data}) {

  return (

    <div className="highlighted-data-container">

      {
        dataNames.map((dataName, idx) => {

          return (

            <HighlightedData key={idx} name={dataName} data={data[idx]}/>
        )})
      }

    </div>
  )
}

export default HighlightedDataContainer