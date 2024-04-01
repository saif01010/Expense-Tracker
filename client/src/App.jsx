import { Navigate, Route, Routes } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import TransectionPage from "./pages/TransectionPage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"
import Header from "./components/ui/Header.jsx"
import { Get_Current_User } from "./graphql/queries/user.query.js"
import { useQuery } from "@apollo/client"
import {Toaster} from 'react-hot-toast';

function App() {

  const {data,loading} = useQuery(Get_Current_User);

  if(loading) return <div>Loading...</div>

  
  return (
    <div>
    {data?.currentUser && <Header/>}
    {console.log(data)}
    <Routes>
        <Route path="/" element={data?.currentUser? <HomePage/> : <Navigate to='/login'/> } />
        <Route path="/signup" element={ !data?.currentUser?<SignUpPage/> : <Navigate to='/'/> } />
        <Route path="/login" element={!data?.currentUser? <LoginPage/>: <Navigate to='/'/>} />
        <Route path="/transection/:id" element={data?.currentUser?<TransectionPage/> : <Navigate to='/login'/>} />
        <Route path="*" element={<NotFoundPage/>} />
    </Routes>
    <Toaster/>
    </div>
  )
}

export default App
