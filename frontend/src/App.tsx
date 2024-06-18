// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// App.tsx

// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AuthenticatedPage from "./components/AuthenticatedPage";
import { AuthProvider, useAuth } from "./AuthContext";
import ProfileIcon from "./components/ProfileIcon";
import "./index.css";

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses/*" element={<LandingPage />} />
          <Route path="/our-story" element={<LandingPage />} />
          {isAuthenticated && (
            <>
              <Route path="/teleradio" element={<AuthenticatedPage />} />
              <Route path="/archives" element={<AuthenticatedPage />} />
            </>
          )}
        </Routes>
        {/* Example usage of ProfileIcon component */}
        <div className="fixed bottom-4 right-4">
          <ProfileIcon />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
