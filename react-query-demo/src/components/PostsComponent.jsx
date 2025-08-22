// src/PostsComponent.jsx
import { useQuery } from '@tanstack/react-query'

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

export default function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5000, // 5 seconds, prevents frequent refetching
    cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
    refetchOnWindowFocus: true, // auto refetch when window gains focus
  })

  if (isLoading) return <p>Loading posts...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Posts</h2>

      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-3 py-1 rounded mb-4"
      >
        Refetch Posts
      </button>

      {isFetching && <p className="text-gray-500">Updating...</p>}

      <ul className="space-y-2">
        {posts.slice(0, 10).map(post => (
          <li key={post.id} className="border p-2 rounded shadow">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
