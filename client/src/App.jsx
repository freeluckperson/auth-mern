import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer, Home, Login, Logout, NavBar, Profile, Register, TaskForm, Tasks,
} from "./components";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoutes from "./ProtectedRoutes";
import { TaskProvider } from "./context/TaskContext";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <TaskProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/add-task" element={<TaskForm />} />
                <Route path="/add-task/:id" element={<TaskForm />} />
              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </TaskProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
