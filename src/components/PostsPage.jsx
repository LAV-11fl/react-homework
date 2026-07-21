import { useEffect, useState } from 'react'

const POSTS_PER_PAGE = 10
const TOTAL_POSTS = 100

function PostsPage() {
  const [posts, setPosts] = useState([])
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${visiblePosts}`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }, [visiblePosts])

  function loadMore() {
    setVisiblePosts((currentValue) => currentValue + POSTS_PER_PAGE)
  }

  return (
    <main className="posts-page py-5">
      <div className="container">
        <header className="posts-header mb-4">
          <p className="text-primary fw-semibold mb-2">JSONPlaceholder API</p>
          <h1 className="display-5 fw-bold mb-2">Latest posts</h1>
          <p className="lead text-body-secondary mb-0">Posts are loaded in groups of ten.</p>
        </header>

        <section className="row g-3" aria-label="Posts">
          {posts.map((post) => (
            <div className="col-md-6 col-lg-4 col-xxl-3" key={post.id}>
              <article className="card h-100 post-card">
                <div className="card-body p-3">
                  <span className="post-number">#{post.id}</span>
                  <h2 className="h6 card-title mt-2">{post.title}</h2>
                  <p className="card-text small text-body-secondary mb-0">{post.body}</p>
                </div>
              </article>
            </div>
          ))}
        </section>

        <div className="text-center mt-5">
          {posts.length < TOTAL_POSTS ? (
            <button className="btn btn-primary px-5" type="button" onClick={loadMore}>
              Load more
            </button>
          ) : (
            <p className="text-body-secondary">All posts are loaded</p>
          )}
        </div>
      </div>
    </main>
  )
}

export default PostsPage