import { useState, useEffect } from 'react';
import Layout from './Layout';

function Show() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const params = new URLSearchParams(window.location.search);
  const thread_id = params.get('id');
  const thread_title = params.get('title');

  console.log(thread_id);

  useEffect(() => {
    const offset = (currentPage - 1) * 10;
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts?offset=${offset}`)
    .then(response => response.json())
    .then(data => {
      setPosts(data.posts || []);
      console.log(data);
    })
    .catch(error => console.error('Error:', error));
  }, [currentPage]); // currentPageが変化したらデータ取得

  return (
    <Layout>
      {/* スレッドタイトル */}
      <h1 className="text-2xl font-bold mb-6 text-center">{"["}{thread_title}{"]"}</h1>

      {/* コメント一覧 */}
      <ul className="space-y-2 mb-4">
        {posts.map(post => (
            <li key={post.id} className="p-3">
              <p className="text-gray-500 text-sm">ID: {post.id}</p>
              <p>{post.post}</p>
            </li>
        ))}
      </ul>

      {/* ページを変える */}
      <div className="flex justify-center gap-5">

        <button 
          onClick={() => setCurrentPage( currentPage - 1 )} 
          disabled={currentPage === 1}
          style={{
            backgroundColor: currentPage === 1 ? '#d1d5db' : 'white',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
          }}
          className="px-1 py-1 rounded shadow font-bold-lg"
        >
          {'<'}
        </button>

        <div className="px-3 py-1 rounded bg-white text-black shadow font-bold-lg border-black place-content-center">
          {currentPage}
        </div>

        <button onClick={() => setCurrentPage( currentPage + 1 )} className="px-1 py-1 rounded text-black shadow font-bold-lg" style={{backgroundColor:"white"}}>
          {'>'}
        </button>

      </div>
    </Layout>
  )
}

export default Show