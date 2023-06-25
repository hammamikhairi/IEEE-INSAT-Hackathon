import { useEffect, useState } from 'react';



export default function TypeWriterWrapper({content = "EMPTY"}) {

  const [finished, setFinished] = useState(false)

  return (
    <div style={{display : "flex", alignItems : "center"}}>
      <TypeWriter content={content} onAnimationEnd={setFinished} />
      {/* {
        !finished &&
        // <Blicky  />
      } */}

    </div>
  )

}

function TypeWriter({content, delay = 100, onAnimationEnd = () => {}}) {
  const [text, setText] = useState('');
  const message = content;


  useEffect(() => {
    let i = 0;
    const type = setInterval(() => {
      setText(message.slice(0, i));
      i++;
      if (i > message.length) {
        clearInterval(type);
        onAnimationEnd(true)
      }
    }, delay);
  }, []);

  return  <>{text}</>
}
