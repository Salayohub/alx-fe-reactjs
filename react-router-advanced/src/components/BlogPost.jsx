// src/pages/BlogPost.jsx
import { useParams } from 'react-router-dom'

export default function BlogPost() {
  const { id } = useParams()
  return <h1 className="p-4">Showing Blog Post #{id}</h1>
}
