import{useState} from 'react'
//import components
import TweetList  from './Components/TweetList'
import CreateTweet from './Components/CreateTweet'
import style from './Style/tweet.scss'

function App() {
  const [name , setName]= useState('Amir Ahmed')
  const message='Hellow elenmask'
    //state
    const[textInput, setTextInput]= useState('')
    const [tweets, setTweets]= useState([])

  return (
    <div className="App">
      <h1 className='title'>Twitter Light</h1>
        <CreateTweet
         textInput={textInput} 
         setTextInput={setTextInput} 
         tweets={tweets}
         setTweets={setTweets}/>
      <TweetList name={name}  tweets={tweets} setTweets={setTweets}/>
      
   
    </div>
  );
}

export default App;
