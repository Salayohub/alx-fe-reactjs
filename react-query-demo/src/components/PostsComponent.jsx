// src/components/PostsComponent.jsx
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const fetchPosts = async (page) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

export default function PostsComponent() {
  const [page, setPage] = useState(1)

  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ['posts', page],
    queryFn: () => fetchPosts(page),
    keepPreviousData: true,     // 👈 keeps old data during page change
    cacheTime: 1000 * 60 * 5,   // 👈 cache persists for 5 minutes
    refetchOnWindowFocus: true, // 👈 refetches when window/tab gains focus
    staleTime: 5000,            // 👈 optional, avoids too frequent refetching
  })

  if (isLoading) return <p>Loading posts...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Posts (Page {page})</h2>

      {isFetching && <p className="text-gray-500">Updating...</p>}

      <ul className="space-y-2">
        {posts?.map(post => (
          <li key={post.id} className="border p-2 rounded shadow">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setPage(old => Math.max(old - 1, 1))}
          disabled={page === 1}
          className="bg-gray-500 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <button
          onClick={() => setPage(old => old + 1)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Next
        </button>
      </div>
    </div>
  )
}
