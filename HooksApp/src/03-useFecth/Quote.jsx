

export const Quote = ({author,quote}) => {

    

  return (
    <blockquote className="blockquote text-center">
                    <p className="mb-3">{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  )
}
