import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import CompleteProfile from './pages/CompleteProfile';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "react-hot-toast";
import OwnerDashboard from './pages/OwnerDashboard';
import Projects from './pages/Projects';
import Project from './pages/Project';
import { DarkModeProvider } from './context/DarkModeContext';
import OwnerLayout from './features/owner/OwnerLayout';
import FreelancerDashboard from './pages/FreelancerDashboard';
import Proposals from './pages/Proposals';
import SubmitedProjects from './pages/SubmitedProjects';
import FreelancerLayout from './features/freelancer/FreelancerLayout';
import ProtectedRoute from './ui/ProtectedRoute';
import AdminLayout from './features/admin/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';



function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster />
          <Routes>
            <Route path='/auth' element={<Auth />} />
            <Route path='/complete-profile' element={<CompleteProfile />} />
            <Route
              path='/owner'
              element={
                <ProtectedRoute>
                  <OwnerLayout />
                </ProtectedRoute>
              }>
              <Route index element={<Navigate to="dashboard" replace={true} />} />
              <Route path='dashboard' element={<OwnerDashboard />} />
              <Route path='projects' element={<Projects />} />
              <Route path='projects/:id' element={<Project />} />
            </Route>
            <Route
              path='/freelancer'
              element={
                <ProtectedRoute>
                  <FreelancerLayout />
                </ProtectedRoute>
              }>
              <Route index element={<Navigate to="dashboard" replace={true} />} />
              <Route path='dashBoard' element={<FreelancerDashboard />} />
              <Route path='proposals' element={<Proposals />} />
              <Route path='projects' element={<SubmitedProjects />} />
            </Route>
            <Route
              path='/admin'
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }>
              <Route index element={<Navigate to="dashboard" replace={true} />} />
              <Route path='dashBoard' element={<AdminDashboard />} />
              <Route path='proposals' element={<Proposals />} />
              <Route path='projects' element={<SubmitedProjects />} />
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