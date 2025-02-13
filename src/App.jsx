import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import JobPage from "./pages/JobPage"
import AddJobPage from "./pages/AddJobPage"

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job" element={<JobPage />} />
        <Route path="/addjob" element={<AddJobPage />} />
      </Routes>
    </>
  )
}
export default App