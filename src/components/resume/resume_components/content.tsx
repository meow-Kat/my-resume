const Content = () => {
    type Info = {
        title: string,
        date: string,
        experience: string,
    }
    const data:Info = {
        title: 'Experience',
        date: '2021 ~ Now',
        experience: 'GCREATE 創意數位科技有限公司'
    }

    return (
        <div className="">
            <h2 className="uppercase text-white text-xl font-bold mb-8">{data.title}</h2>
            <div className='flex items-center gap-4'>
                <p className='text-white flex items-center justify-center w-fit px-4 py-2 bg-red-400 rounded-3xl'>{data.date}</p>
                <span className='w-6 h-6 bg-white rounded-full block' />
                <p className='text-white text-xl'>{data.experience}</p>
            </div>
        </div>
    )
}

export default Content