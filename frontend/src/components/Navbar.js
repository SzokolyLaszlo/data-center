import '../styles/Navbar.css'
import Menupoint from './Menupoint'

function Navbar({currentButtons, buttonsSetter, menupoints}) {

  return (

    <div className="navbar">

      {
        menupoints.map((menupoint, idx) => {

          return (
            
            <Menupoint key={idx} index={menupoint.index} name={menupoint.name} className={menupoint.className} destination={menupoint.destination}
                       currentButtons={currentButtons} buttonsSetter={buttonsSetter}
            />
          )
        })
      }

    </div>
  )
}

export default Navbar