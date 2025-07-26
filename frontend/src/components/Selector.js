import '../styles/Selector.css'
import Button from './Button'

function Selector({orientation, buttons, buttonIndexes, currentButtons, buttonsSetter, isMultipleButtons, extraElements}) {

  return (

    <div className={orientation + "-selector"}>

        {buttons.map((button, idx) => {

            return( 

                <Button
                  key={idx} index={buttonIndexes === undefined ? idx : buttonIndexes[idx]} name={button}
                  currentButtons={currentButtons} buttonsSetter={buttonsSetter} isMultipleButtons={isMultipleButtons}
                />
            )
        })}

        {extraElements}

    </div>
  )
}

export default Selector