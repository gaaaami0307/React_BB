import { useState, useEffect } from 'react';
import Layout from './Layout';

function Threads() {
  const [threads, setThreads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const offset = (currentPage - 1) * 10;
    fetch(`https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`)
    .then(response => response.json())
    .then(data => {
      setThreads(data)
      console.log(data);
    })
    .catch(error => console.error('Error:', error));
  }, [currentPage]); // currentPageが変化したらデータ取得

  return (
    <Layout>
      {/* スレッド一覧 */}
      <ul className="space-y-2 mb-4">
        {threads.map(thread => (
          <li key={thread.id} className="bg-white p-3 rounded shadow">
            {thread.title}
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

export default Threads