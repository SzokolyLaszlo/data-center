import '../styles/PasswordVisibilityToggle.css'
import ButtonWithIcon from './ButtonWithIcon'
import Eye from './image_components/Eye'
import EyeCrossed from './image_components/EyeCrossed'

function PasswordVisibilityToggle({isPasswordVisible, passwordVisibilitySetter}) {

    const buttonSetter = () => {

        passwordVisibilitySetter(!isPasswordVisible)
    }

  return (

    <div className="password-visibility-toggle">

        {
            isPasswordVisible ?

            <ButtonWithIcon
                index={0}
                imageComponent={<EyeCrossed/>}

                buttonSetter={buttonSetter}
            /> :

            <ButtonWithIcon
                index={0}
                imageComponent={<Eye/>}

                buttonSetter={buttonSetter}
            /> 
        }

    </div>
  )
}

export default PasswordVisibilityToggle