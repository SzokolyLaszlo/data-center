import '../styles/PasswordInput.css'
import PasswordVisibilityToggle from './PasswordVisibilityToggle'

function PasswordInput({
    passwordInputSetter,
    passwordInputSubmitter,

    isPasswordVisible,
    passwordVisibilitySetter
}) {

    return (

        <div className="password-container">

            <input
                className="login-password-input"
                name="password"
                aria-label="password"

                type={

                    isPasswordVisible ?
                        "text" :
                        "password"
                }

                spellCheck="false"
                autoComplete="off"

                onChange={(e) => {

                    passwordInputSetter(e.target.value)
                }}

                onKeyDown={(e) => {

                    if (e.key === "Enter") {

                        passwordInputSubmitter(undefined, e.target.value)
                    }
                }}
            />

            <PasswordVisibilityToggle
                isPasswordVisible={isPasswordVisible}
                passwordVisibilitySetter={passwordVisibilitySetter}
            />

        </div>
    )
}

export default PasswordInput