import {BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Post from "./pages/Post";
import Friends from "./pages/Friends";
import Message from "./pages/Message";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";
import Error from "./pages/Error";
import Login_Page from "./components/login/Login _Page"
import Register from "./components/login/Register";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="post" element={<Post />} />
          <Route path="message" element={<Message />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/*" element={<Error />} />
          <Route path="login" element={<Login_Page/>} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
