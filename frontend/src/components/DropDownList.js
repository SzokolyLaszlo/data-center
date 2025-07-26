import '../styles/DropDownList.css'

function DropDownList({itemType, items, currentItem, itemSetter}) {

  return (

    <select
      name="drop-down-list"
      className={itemType + "-selector"}
      value={currentItem}
      onChange={(e) => {

        itemSetter(e.target.value)
      }}
    >
        {items.map((item, idx) => {

            return (

                <option value={idx}>{item}</option>
            )
        })}

    </select>
  )
}

export default DropDownList