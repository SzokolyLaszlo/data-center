import ButtonWithIcon from "./ButtonWithIcon"

function FilterSelectorHeadButton({index, imageComponent, currentButton, buttonSetter}) {

    const filterButtonSetter = (input) => {

        const isDeleteFilterButton = input === 1;
        input = isDeleteFilterButton ? undefined : input

        buttonSetter(input)
    }

    return (

        <ButtonWithIcon
            index={index}
            imageComponent={imageComponent}
            currentButton={currentButton}
            buttonSetter={filterButtonSetter}
        />
    )
}

export default FilterSelectorHeadButton