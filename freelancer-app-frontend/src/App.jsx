import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import CompleteProfile from './pages/CompleteProfile';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import OwnerDashboard from './pages/OwnerDashboard';
import AppLayout from './ui/AppLayout';
import Projects from './pages/Projects';
import Project from './pages/Project';


function App() {
  const queryClient = new QueryClient();

  return (

    <>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/complete-profile' element={<CompleteProfile />} />
          <Route path='/owner' element={<AppLayout />}>
            <Route index element={<Navigate to="dashboard" replace={true} />} />
            <Route path='dashboard' element={<OwnerDashboard />} />
            <Route path='projects' element={<Projects />} />
            <Route path='projects:id' element={<Project />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App;