const Directions = () => {
    type Directions = {
        title: string,
        text: string,
    }
    const data:Directions[] = [
        {
            title: '技術能力',
            text: '豐富的技術背景，包括前端開發（使用 Vue 等現代框架）、後端開發（使用 laravel 等現代框架，處理API串接、資料庫規劃）、金流串接等多方面技能，展現對於全方位應用開發的熟悉度。'
        },
        {
            title: '問題解決能力',
            text: '以往的經驗中，經常面對高流量和複雜問題，對系統的查詢演算法進行了改進，使其能夠在更短的時間內返回查詢結果。此外，我還對系統的數據存儲方式進行了優化，使其能夠更有效地利用記憶體。'
        },
        {
            title: '用戶體驗追求',
            text: '運用創新的前端動畫效果，不斷提升和優化用戶體驗，展現對於產品設計和用戶滿意度的高度關注。'
        },
        {
            title: '全球化視野',
            text: '在處理多國語系的經驗中，展現了對跨文化和跨地區需求的深刻理解，有能力應對多元國際環境。'
        },
        {
            title: '協作和溝通',
            text: '在多個專案中的協作經驗，強調良好的溝通和協作能力，確保順暢的團隊合作，以達成共同目標。'
        },
        {
            title: '創造商業價值',
            text: '整體經驗反映了不僅僅是技術專業，更強調了解商業價值。透過敏捷開發和高效問題解決，能夠在專案中快速交付並確保最終產品符合商業目標，為企業創造實質價值。'
        },

    ] as Directions[]

    return (
        <div>
            {data.map( (directions, index ) => (
                <div className={index === data.length - 1 ? '' : 'mb-8'} key={index}>
                    <h2 className="text-white text-xl font-bold mb-4">{directions.title}</h2>
                    <p className='text-white text-xl'>{directions.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Directions