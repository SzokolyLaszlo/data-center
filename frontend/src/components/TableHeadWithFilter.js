import '../styles/TableHeadWithFilter.css'
import ButtonWithIcon from './ButtonWithIcon'
import Down from './image_components/Down'

function TableHeadWithFilter({index, name, currentTableHeadFilterButton, tableHeadFilterButtonSetter}) {

  return (

    <div className="table-head-with-filter">

        <p>
            {name}
        </p>

        <ButtonWithIcon
          index={index} imageComponent={<Down/>}
          currentButton={currentTableHeadFilterButton}
          buttonSetter={tableHeadFilterButtonSetter}
        />

    </div>
  )
}

export default TableHeadWithFilter