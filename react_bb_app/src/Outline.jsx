import { useState, useEffect } from 'react';

function Outline() {
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
    <div className="min-h-screen flex flex-col">
      {/* ヘッダー */}
      <header className="bg-[#edfffd] h-24 min-w-screen relative overflow-hidden">
        <div className="absolute bg-[#eaeaea] top-23 h-1 w-full z-200"></div>
        {/* 斜めの装飾 */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#7fffd4] 
            transform skew-x-[-20deg] translate-x-20 z-100"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#5fdfb4] 
          transform skew-x-[-20deg] translate-x-17 z-90"></div>

      </header>
      
      <div className="flex flex-1">
        {/* サイドバー */}
        <aside className="bg-[#ffffff] w-24 min-h-screen relative z-100 overflow-hidden">
          {/* 斜め装飾*/}
          <div className="absolute bg-[#cccccc] left-0 top-0 w-24 h-1/2 transform skew-y-[60deg] translate-y-150 z-130"></div>
          <div className="absolute bg-[#dddddd] left-0 top-0 w-24 h-1/2 transform skew-y-[40deg] translate-y-130 z-120"></div>
          <div className="absolute bg-[#e5e5e5] left-0 top-0 w-24 h-1/2 transform skew-y-[20deg] translate-y-112 z-110"></div>
          
          {/* 影 */}
          <div className="absolute bg-[#cacaca] left-23 w-2 h-full z-200"></div>

          {/* サイドアイコン */}
          <div className="relative w-24 h-90 flex-col">
            <a href="/" className="w-24 h-24 bg-[#ffffff] hover:bg-[#e0e0e0] block cursor-pointer transition-colors">
              <img src="/images/thread.png" alt="Thread Icon" className="absolute w-24 h-24 p-3 pl-2"></img>
            </a>
            <a href="/threads/new" className="w-24 h-24 bg-[#ffffff] hover:bg-[#e0e0e0] block cursor-pointer transition-colors">
              <img src="/images/post.png" alt="Post Icon" className="absolute w-24 h-24 p-3 pl-2"></img>
            </a>
          </div>

        </aside>
      
        {/* メインコンテンツ */}
        <main className="flex-1 flex-col bg-[#f8f8f8] p-4">
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
        </main>
      </div>
    </div>
  )
}

export default Outline