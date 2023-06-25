
import '@vercel/examples-ui/globals.css';
import '../../css/chat.css';


function App({ Component, pageProps }) {

  return (
    <div className='chat-section'>
      <Component {...pageProps} />
    </div>
  )
}

export default App
