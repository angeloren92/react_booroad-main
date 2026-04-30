
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./Context/GlobalContext"
import LayoutDefault from "./Layout/LayoutDefault"
import AdminLayout from "./Layout/AdminLayout"
import AdminPage from "./Pages/AdminPage"
import Trip from "./Pages/Trip"
import Home from "./Pages/Home"

// App entry component
// Purpose: wire up GlobalProvider and application routes.
// Structure: public routes use `LayoutDefault`; admin routes use `AdminLayout`.
function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutDefault />}>
            <Route index element={<Home />} />
            <Route path="/viaggio/:id" element={<Trip />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
