import '../styles/Title.css'

function Title({subtitle, type}) {

  let title = ""

  switch (type)
  {
    case "company-info":
      title="Vállalati Információs Adatok"
      break;
    case "site-info":
      title="Telephelyi Információs Adatok"
      break;
    default:
      break;
  }

  return (

    <div className="title-container">

      <h2 className={type + "-title"}>{title}</h2>
      <h3 className={type + "-subtitle"}>{subtitle}</h3>

    </div>
    
  )
}

export default Title