import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import JobPage from "./pages/JobPage"
import AddJobPage from "./pages/AddJobPage"
import SingleJobPage from "./pages/SingleJobPage"

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job" element={<JobPage />} />
        <Route path="/addjob" element={<AddJobPage />} />
        <Route path="/job/:id" element={<SingleJobPage />} />
      </Routes>
    </>
  )
}
export default App