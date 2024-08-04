import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import CompleteProfile from './pages/CompleteProfile';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import OwnerDashboard from './pages/OwnerDashboard';
import Projects from './pages/Projects';
import Project from './pages/Project';
import { DarkModeProvider } from './context/DarkModeContext';
import OwnerLayout from './features/owner/OwnerLayout';


function App() {
  const queryClient = new QueryClient();

  return (

    <>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Routes>
            <Route path='/auth' element={<Auth />} />
            <Route path='/complete-profile' element={<CompleteProfile />} />
            <Route path='/owner' element={<OwnerLayout />}>
              <Route index element={<Navigate to="dashboard" replace={true} />} />
              <Route path='dashboard' element={<OwnerDashboard />} />
              <Route path='projects' element={<Projects />} />
              <Route path='projects/:id' element={<Project />} />
            </Route>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </QueryClientProvider>
      </DarkModeProvider>
    </>
  )
}

export default App;