import '../styles/LoginPage.css'
import Background from '../components/image_components/Background'
import LogoWhite from '../components/image_components/LogoWhite'
import Mail from '../components/image_components/Mail'
import HorizontalLine from '../components/HorizontalLine'
import PasswordInput from '../components/PasswordInput'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const path = "/login"

function LoginPage({ paramGetter, dataGetter, userData, userDataSetter}) {

    const [isPasswordVisible, setPasswordVisibility] = useState(false)


    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")


    const submitLoginInput = (username, password) => {

        username = username === undefined ? usernameInput : username
        password = password === undefined ? passwordInput : password

        const usernameParam = paramGetter("username", [username], true)
        const passwordParam = paramGetter("password", [password], false)

        const paramPath = path + usernameParam + passwordParam

        dataGetter(paramPath, userDataSetter, true)
    }


    const isData = userData !== null
    const userNotFound = isData && userData.length === 0

    let navigate = useNavigate()

    if (isData && !userNotFound) {

        const firstLogin = userData[3]
        const isSiteUser = userData[2] === 1

        const destination = (

            firstLogin ?
            "/joginyilatkozat" :
            (
                !isSiteUser ?
                "/via" :
                "/tia"
            )
        )

        navigate(destination)
    }


    return (

        <div className="login-container">

            <Background />

            <div className="login-window">

                <LogoWhite />

                <h1>Adatközpont</h1>

                <div className="contact-container">

                    <div className="contact-subcontainer">

                        <Mail />

                        <label className="email" for="username">tt@kezmu.hu</label>

                    </div>

                    <HorizontalLine />

                </div>

                <div className="input-container">

                    <div className="error-container">

                        {userNotFound && (

                            <p className="error-message">Hibás felhasználónév vagy jelszó!</p>
                        )}

                    </div>

                    <div className="input-subcontainer">

                        <p>Felhasználónév:</p>

                        <input
                            className="login-username-input"
                            id="username"
                            name="username"
                            aria-label="username"
                            type="text"
                            spellCheck="false"
                            autoComplete="off"
                            autoFocus

                            onChange={(e) => {

                                setUsernameInput(e.target.value)
                            }}

                            onKeyDown={(e) => {

                                if (e.key === "Enter") {

                                    submitLoginInput(e.target.value)
                                }
                            }}
                        />

                    </div>

                    <div className="input-subcontainer">

                        <p>Jelszó:</p>

                        <PasswordInput
                            passwordInputSetter={setPasswordInput}
                            passwordInputSubmitter={submitLoginInput}

                            isPasswordVisible={isPasswordVisible}
                            passwordVisibilitySetter={setPasswordVisibility}
                        />

                    </div>

                </div>

                <button
                    className="login-button"

                    onClick={() => {

                        submitLoginInput()
                    }}

                >Belépés</button>

            </div>

        </div>
    )
}

function signOut(dataDeleter, signOutSetter) {

    dataDeleter(path)
    signOutSetter(true)
}

export default LoginPage
export { signOut }