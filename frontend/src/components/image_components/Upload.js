import UploadImg from '../../assets/upload.png'

function Upload({text}) {

  return (

    <img id="upload" src={UploadImg} alt={text} title={text}/>
  )
}

export default Upload