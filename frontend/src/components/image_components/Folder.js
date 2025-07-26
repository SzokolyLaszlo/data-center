import FolderImg from '../../assets/folder.png'

function Folder({text}) {

  return (

    <img id="folder" src={FolderImg} alt={text} title={text}/>
  )
}

export default Folder