import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import PrivacyPolicy from './pages/PrivacyPolicy'
import DeleteAccount from './pages/DeleteAccount'
import NotFound from './pages/NotFound'
import Support from './pages/Support'
import AgeSuitability from './pages/AgeSuitability'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/age-suitability" element={<AgeSuitability />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
