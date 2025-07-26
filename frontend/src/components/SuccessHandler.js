import '../styles/SuccessHandler.css'
import DialogueButton from './DialogueButton'

function SuccessHandler({text, closeButtonSetter}) {

  return (

    <div className="success-handler">

      <p>{text}</p>

      <div className="button-container">

        <DialogueButton
          text="Ok"
          name="okay-button"

          isAvailable={true}
          buttonSetter={() => {

            closeButtonSetter(false)
          }}
        />

      </div>

    </div>
  )
}

export default SuccessHandler