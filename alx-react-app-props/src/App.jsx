import { useState } from 'react'

import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile'
import Footer from './components/Footer'
import Button from './components/buttonstyle'
import ButtonIn from './components/inlinebutttonstyle'
import Counter from './components/stateusage'
import ExampleComponent from './components/usestatehooks'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <WelcomeMessage /> 
      <Button />
      <Header />
      <MainContent />
      <ButtonIn />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Counter />
      <ExampleComponent />
      <Footer />
    </>
  )
}

export default App
