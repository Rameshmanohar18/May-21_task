import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import ApiPage from "./pages/apipage";
import FormPage from "./pages/formpage";
import SearchPage from "./pages/searchpage";
import InfiniteScrollPage from "./pages/infinitescorllpage";
import ParentChildPage from "./pages/parentchildpage";
import ChildParentPage from "./pages/childparentpage";
import CounterPage from "./pages/counterpage";
import PerformancePage from "./pages/performancepage";
import ProtectedRoute from "./components/protectedroute";

import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/api" element={<ApiPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/scroll" element={<InfiniteScrollPage />} />
          <Route path="/parent-child" element={<ParentChildPage />} />
          <Route path="/child-parent" element={<ChildParentPage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/performance" element={<PerformancePage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
