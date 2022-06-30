import './/App.css';
import Sidebar from './components/Sidebar'
import Reviews from './components/Reviews'
import AverageRating from './components/AverageRating'
import SentimentAnalysis from './components/SentimentAnalysis'
import WebsiteVisitors from './components/WebsiteVisitors'

//App Component

function App() {
  
  return(
  <div className="App">
    <Sidebar/>
    <Reviews/>
    <AverageRating/>
    <SentimentAnalysis/>
    <WebsiteVisitors/>
  </div>
  )
  }

export default App;