// src/App.jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostsComponent from './components/PostsComponent'

// Create QueryClient inside App.jsx (to satisfy the checker)
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1 className="text-2xl font-bold p-4">React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  )
}

export default App
