import '../styles/FramedParagraph.css'

function FramedParagraph({content}) {

  return (

    <div className="framed-paragraph">

        {content.map((c, idx) => {

            return (
                <p key={idx}>
                    {c}
                </p>
            )
        })}

    </div>
  )
}

export default FramedParagraph