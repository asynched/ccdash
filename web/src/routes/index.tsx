import { BrowserRouter, Routes, Route } from 'react-router-dom'

import IndexPage from '@/pages/IndexPage'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  )
}
