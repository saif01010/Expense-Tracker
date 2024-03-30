import { Route, Routes } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import TransectionPage from "./pages/TransectionPage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"

function App() {
  
  return (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/transection/:id" element={<TransectionPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  )
}

export default App
