import Dashboard from "./pages/Dashboard";
import Post from "./pages/Post";
import Friends from "./pages/Friends";
import Message from "./pages/Message";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";
import Error from "./pages/Error";
import Login_Page from "./components/login/Login _Page";
import Register from "./components/login/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protected from "./components/login/Protected";
// import Layout from "./pages/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected Component={Dashboard} />} />
          <Route path="/dashboard" element={<Protected Component={Dashboard} />} />
          <Route path="/post" element={<Protected Component={Post} />} />
          <Route path="/message" element={<Protected Component={Message} />} />
          <Route path="/friends" element={<Protected Component={Friends} />} />
          <Route path="/notifications" element={<Protected Component={Notification} />} />
          <Route path="/settings" element={<Protected Component={Settings}/>} />

          <Route path="login" element={<Login_Page/>} />
          <Route path="/register" element={<Register/>}/>
          
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
