import '../styles/PasswordChanger.css'
import { useState } from 'react'
import PasswordInput from './PasswordInput'
import DialogueButton from './DialogueButton'

function PasswordChanger({ userId, paramGetter, dataGetter, successSetter, closeButtonSetter }) {

    const [presentPasswordVisibility, setPresentPasswordVisibility] = useState(false)
    const [newPasswordVisibility, setNewPasswordVisibility] = useState(false)
    const [confirmNewPasswordVisibility, setConfirmNewPasswordVisibility] = useState(false)

    const [presentPasswordInput, setPresentPasswordInput] = useState("")
    const [newPasswordInput, setNewPasswordInput] = useState("")
    const [confirmNewPasswordInput, setConfirmNewPasswordInput] = useState("")

    const [passwordData, setPasswordData] = useState(null);



    const path = "/passwordchange"

    const userIdParam = paramGetter("userId", [userId], true)
    const presentPasswordParam = paramGetter("presentPassword", [presentPasswordInput], false)
    const newPasswordParam = paramGetter("newPassword", [newPasswordInput], false)
    const confirmNewPasswordParam = paramGetter("confirmNewPassword", [confirmNewPasswordInput], false)

    const paramPath = path + userIdParam + presentPasswordParam + newPasswordParam + confirmNewPasswordParam

    const submitPasswordChange = () => {

        dataGetter(paramPath, setPasswordData)
    }



    const isData = passwordData !== null
    const presentPasswordVerified = isData && passwordData[0]
    const newPasswordConfirmed = isData && passwordData[1]
    const newPasswordNotEmpty = isData && passwordData[2]
    const passwordChangeSuccessful = isData && passwordData[3] !== undefined && passwordData[3]

    console.log(passwordChangeSuccessful);

    if (presentPasswordVerified && newPasswordConfirmed && newPasswordNotEmpty) {

        closeButtonSetter(false)
        successSetter(true)
    }



    return (

        <div className="password-changer-container">

            <div className="display-container">

                <h4>Jelszócsere</h4>

            </div>

            <div className="error-container">

                {isData && !presentPasswordVerified && (

                    <p className="error-message">Hibás jelenlegi jelszó!</p>
                )}

                {isData && presentPasswordVerified && !newPasswordConfirmed && (

                    <p className="error-message">Az új jelszavak nem egyeznek!</p>
                )}

                {isData && presentPasswordVerified && newPasswordConfirmed && !newPasswordNotEmpty && (

                    <p className="error-message">Az új jelszó nem lehet üres!</p>
                )}

                {isData && presentPasswordVerified && newPasswordConfirmed && newPasswordNotEmpty && !passwordChangeSuccessful && (

                    <p className="error-message">Hiba történt, próbálja újra!</p>
                )}

            </div>

            <div className="password-input-container">

                <p>Jelenlegi jelszó:</p>

                <PasswordInput
                    passwordInputSetter={setPresentPasswordInput}
                    passwordInputSubmitter={() => { }}

                    isPasswordVisible={presentPasswordVisibility}
                    passwordVisibilitySetter={setPresentPasswordVisibility}
                />

            </div>

            <div className="password-input-container">

                <p>Új jelszó:</p>

                <PasswordInput
                    passwordInputSetter={setNewPasswordInput}
                    passwordInputSubmitter={() => { }}

                    isPasswordVisible={newPasswordVisibility}
                    passwordVisibilitySetter={setNewPasswordVisibility}
                />

            </div>

            <div className="password-input-container">

                <p>Új jelszó megerősítése:</p>

                <PasswordInput
                    passwordInputSetter={setConfirmNewPasswordInput}
                    passwordInputSubmitter={() => { }}

                    isPasswordVisible={confirmNewPasswordVisibility}
                    passwordVisibilitySetter={setConfirmNewPasswordVisibility}
                />

            </div>

            <div className="button-container">

                <DialogueButton
                    name="replace-button"
                    text="Csere"
                    isAvailable={true}
                    buttonSetter={() => {

                        submitPasswordChange()
                    }}
                />

                <DialogueButton
                    name="cancel-button"
                    text="Mégse"
                    isAvailable={true}
                    buttonSetter={() => {

                        closeButtonSetter(false)
                    }}
                />

            </div>

        </div>
    )
}

export default PasswordChanger