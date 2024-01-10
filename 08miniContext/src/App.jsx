
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
 

function App() {
  

  return (
    <>
       
       <UserContextProvider>
       <h3>Hii This is context api crash course</h3>
       <Login/>
       <Profile/>
       </UserContextProvider>
       
       
       
    </>
  )
}

export default App
