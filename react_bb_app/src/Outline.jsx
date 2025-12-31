
function Outline() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ヘッダー */}
      <header className="bg-[#edfffd] h-24 min-w-screen relative overflow-hidden">
      {/* 斜めの装飾 */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#7fffd4] 
          transform skew-x-[-20deg] translate-x-20 z-100"></div>
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#5fdfb4] 
        transform skew-x-[-20deg] translate-x-17 z-90"></div>

    </header>
      
      <div className="flex flex-1">
        {/* サイドバー */}
        <aside className="bg-[#ffffff] w-24 max-h-screen relative z-100 overflow-hidden">
          <div className="absolute bg-[#eeeeee] left-23 w-2 h-full z-110"></div>
        </aside>
      
        {/* メインコンテンツ */}
        <main className="flex-1 bg-[#f8f8f8] p-4">
          テスト
        </main>
      </div>
    </div>
  )
}

export default Outline