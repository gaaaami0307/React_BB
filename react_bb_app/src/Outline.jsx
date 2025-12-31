
function Outline() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ヘッダー */}
      <header className="bg-[#edfffd] h-24 min-w-screen relative overflow-hidden">
      {/* 斜めの装飾 */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#7fffd4] 
          transform skew-x-[-20deg] translate-x-20"></div>
    </header>
      
      <div className="flex flex-1">
        {/* サイドバー */}
        <aside className="bg-white w-24">

          <div className="w-12 bg-[#00aa00] min-h-screen">

          </div>

          {/* 影枠 */}
          <div className="w-24 bg-[#aa0000] min-h-screen">

          </div>
          
        </aside>
      
        {/* メインコンテンツ */}
        <main className="flex-1 bg-[#fafafa] p-4">
          テスト
        </main>
      </div>
    </div>
  )
}

export default Outline