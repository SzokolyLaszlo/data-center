import ProfilePictureImg from '../../assets/profile_picture.png'

function ProfilePicture({username}) {

  return (

    <img id="profile-picture" src={ProfilePictureImg} alt={username} title={username}/>
  )
}

export default ProfilePicture