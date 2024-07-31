import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import CompleteProfile from './pages/CompleteProfile';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";


function App() {
  const queryClient = new QueryClient();

  return (

    <>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <div className="container xl:max-w-screen-xl">
          <Routes>
            <Route path='/auth' element={<Auth />} />
            <Route path='/complete-profile' element={<CompleteProfile />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App;