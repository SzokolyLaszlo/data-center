import '../styles/ProfileBar.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfilePicture from './image_components/ProfilePicture'
import ActionList from './ActionList'
import { signOut } from '../pages/LoginPage'

function ProfileBar({
    userData,
    
    loginPath,
    dataDeleter,
    
    passwordChangeSetter,
    signOutSetter
}) {

    const [isClicked, setClicked] = useState(false)


    const isUserData = userData !== null

    const username = isUserData ? userData[1] : ""
    const accessLevel = isUserData ? userData[2] : -1

    const rank = getRankFromAccessLevel(accessLevel)

    let navigate = useNavigate()



    const changePassword = () => {

        passwordChangeSetter(true)
    }

    const signOutAndGoToLogin = () => {

        navigate(loginPath)
        signOut(dataDeleter, signOutSetter)
    }


    const buttons = [

        "Jelszócsere",
        "Kijelentkezés"
    ]

    const buttonSetters = [

        changePassword,
        signOutAndGoToLogin
    ]

    return (

        <div className="profile-bar-container">

            <div
                className="profile-bar"

                onClick={() => {

                    setClicked(!isClicked)
                }}
            >

                <div className="profile-picture-container">

                    <ProfilePicture
                        username={username}
                    />

                </div>

                <div className="profile-data-container">

                    <p>{username}</p>
                    <p>{rank}</p>

                </div>

            </div>

            <ActionList

                buttons={buttons}
                buttonSetters={buttonSetters}

                isExtended={isClicked}
            />

        </div>
    )
}

function getRankFromAccessLevel(accessLevel) {

    let rank

    switch (accessLevel) {

        case 0:
            rank = "Vállalati felhasználó"
            break;
        case 1:
            rank = "Telephelyi felhasználó"
            break;
        case 2:
            rank = "Központi felhasználó"
            break;
        case 3:
            rank = "Rendszergazda"
            break;
        default:
            rank = "Felhasználó"
    }

    return rank;
}

export default ProfileBar
export { getRankFromAccessLevel }