import { useState } from 'react';
import Layout from './Layout';

function Post() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setMessage('タイトルを入力してください');
      return;
    }

    setMessage('');

    fetch('https://railway.bulletinboard.techtrain.dev/threads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    })
    .then(response => {
      if (response.ok) {
        setTitle('');
        window.location.href = '/';
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
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">新しいスレッドを投稿</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* スレッドタイトル */}
          <div>
            <label htmlFor="title" className="block mb-2 font-medium">
              スレッドのタイトルを入力
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="タイトルを入力..."
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
      </div>
    </Layout>
  )
}

export default Post