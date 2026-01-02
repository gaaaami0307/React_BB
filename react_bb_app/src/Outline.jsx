
function Outline() {
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
        <aside className="bg-[#ffffff] w-24 max-h-screen relative z-100 overflow-hidden">
          {/* 斜め装飾*/}
          <div className="absolute bg-[#cccccc] left-0 w-24 h-1/2 transform skew-y-[60deg] translate-y-150 z-130"></div>
          <div className="absolute bg-[#dddddd] left-0 w-24 h-1/2 transform skew-y-[40deg] translate-y-130 z-120"></div>
          <div className="absolute bg-[#e5e5e5] left-0 w-24 h-1/2 transform skew-y-[20deg] translate-y-112 z-110"></div>
          
          {/* 影 */}
          <div className="absolute bg-[#cacaca] left-23 w-2 h-full z-200"></div>

          {/* サイドアイコン */}
          <div className="relative w-24 h-90 flex-col">
            <div className="w-24 h-24 bg-[#ffffff]">
              <img src="/images/thread.png" alt="Thread Icon" className="absolute w-24 h-24 p-3"></img>
            </div>

          </div>

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