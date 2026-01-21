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

  {/* ボタンの処理 */}
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!content.trim()) {
      setMessage('内容を入力してください');
      return;
    }

    setMessage('');

    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ threadId:thread_id, post:content }),
    })
    .then(response => {
      if (response.ok) {
        setContent('');
        window.location.href = `/threads/show?id=${thread_id}&title=${thread_title}`;
      } else {
        setMessage('エラーが発生しました');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      setMessage('エラーが発生しました');
    })
  };

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

      {/* コメント投稿 */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* スレッドタイトル */}
        <div>
          <label htmlFor="content" className="block mb-2 font-medium">
            コメントを入力
          </label>
          <input
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="コメントを入力..."
            className="w-full p-5 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7fffd4]"
          />
        </div>

        {/* 投稿ボタン */}
        <button
          type="submit"
          style={{
            backgroundColor: '#7fffd4'
          }}
          className="px-6 py-2 rounded shadow font-medium"
        >
          投稿する
        </button>

        {message && (
          <p className={"mt-2 text-red-500"}>
            {message}
          </p>
        )}
      </form>
    </Layout>
  )
}

export default Show