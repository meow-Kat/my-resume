const Collections = () => {
    type Collection = {
        title: string,
        link: string,
        img: string,
        text: string,
    }

    const data:Collection[] = [
        {
            title: '台積電家庭日後台',
            link: '',
            img: '',
            text: '家庭日一系列資料流串接 api 開發 + 後台統計圖表資訊',
        },
        {
            title: '鹿角巷飲料店後台',
            link: '',
            img: '',
            text: '電商功能串接 api',
        },
        {
            title: '碳排放三合一網站',
            link: '',
            img: '',
            text: 'wordpress 客製化 elementor',
        },
        {
            title: '碳足跡網站',
            link: '',
            img: '',
            text: '計算碳排放及圖表功能',
        },
        {
            title: '統一佳佳影音頻道網站',
            link: '',
            img: '',
            text: '影音頻道串接',
        },
        {
            title: 'GWS',
            link: '',
            img: '',
            text: '形象網站客製化前端效果',
        },
        {
            title: 'tki',
            link: '',
            img: '',
            text: '售票網站 mantal 前端 + 開發抽獎系統',
        },
        {
            title: '任你玩遊戲營運後台',
            link: '',
            img: '',
            text: '遊戲管理串接 api 加後台統計圖表資訊',
        },
        {
            title: '關浦國小',
            link: '',
            img: '',
            text: 'wordpress 客製化報名課程報名系統',
        },
        {
            title: '遠雄房屋',
            link: '',
            img: '',
            text: 'wordpress 維護',
        },
        {
            title: '大新長照',
            link: '',
            img: '',
            text: '獨立開發前後端',
        },
        // {
        //     title: '玩露趣',
        //     link: '',
        //     img: '',
        //     text: '露營訂房網站維護',
        // },
    ]
        

    return (
        <div className=''>
            <h2 className="uppercase text-white text-xl font-bold mb-8">Collection</h2>
            {data.map( collection => (
                <div className='flex items-center gap-4'>
                    <span className='w-3 h-3 bg-white rounded-full block' />
                    <p className='text-white text-lg'>{collection.title}&nbsp;-&nbsp;{collection.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Collections