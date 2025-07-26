import '../styles/FilterSelector.css'
import FilterSelectorHeadButton from './FilterSelectorHeadButton'
import SelectMultiple from './image_components/SelectMultiple'
import DeleteFilter from './image_components/DeleteFilter'
import HorizontalLine from './HorizontalLine'
import Selector from './Selector'

function FilterSelector({
    className, name, orientation,
    
    buttons, buttonIndexes,

    currentFilterButtons,
    filterButtonsSetter,

    currentFilterHeadButtons,
    filterHeadButtonsSetter
})
{

    const filterClickedEvent = (newButtons, newIndex) => {

        newButtons = newButtons === undefined ? [] : newButtons
        const isClicked = currentFilterButtons.indexOf(newIndex) > -1

        if (isClicked) {

            newButtons = currentFilterButtons
            newButtons.splice(newButtons.indexOf(newIndex), 1)
        }

        filterButtonsSetter(newButtons)
        setFilterHeadButton(1, newButtons)
    }

    const setFilterHeadButton = (filterHeadIndex, filterIndeces) => {

        let isClicked = currentFilterHeadButtons[filterHeadIndex]
        const newButtons = [...currentFilterHeadButtons]

        if (filterHeadIndex === 1) {

            if (filterIndeces.length === 0) {

                isClicked = false
            }
            else {

                isClicked = true
            }
        }
        else {

            isClicked = !isClicked
        }

        newButtons[filterHeadIndex] = isClicked
        
        filterHeadButtonsSetter(newButtons)
    }

  return (

    <div className={className}>

        <div className="filter-selector-header">

            <div className='filter-selector-mini-header'>

                <h4>{name}</h4>

                <div className="filter-head-button-container">

                    <FilterSelectorHeadButton
                        index={0}
                        imageComponent={<SelectMultiple/>}
                        currentButton={currentFilterHeadButtons[0] ? 0 : -1}
                        buttonSetter={setFilterHeadButton}
                    />
                    
                    <FilterSelectorHeadButton
                        index={1}
                        imageComponent={<DeleteFilter/>}
                        currentButton={currentFilterHeadButtons[1] ? 1 : -1}
                        buttonSetter={filterClickedEvent}
                    />

                </div>

            </div>

            <HorizontalLine/>

        </div>

        <div className="filter-selector-body">

            <Selector
                orientation={orientation}
                buttons={buttons}
                buttonIndexes={buttonIndexes}
                currentButtons={currentFilterButtons}
                buttonsSetter={filterClickedEvent}
                isMultipleButtons={currentFilterHeadButtons[0]}
            />

        </div>

    </div>
  )
}

export default FilterSelector