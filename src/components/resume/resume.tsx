import profileImage from '../../assets/imgs/head.jpg';
import Contact from './resume_components/contact';
import Content from './resume_components/content';
import Skill from './resume_components/skill';
import Directions from './resume_components/directions';
import Collections from '../collections/collections';

export const Resume = () => {
    type info = {
        name: string,
        job: string,
        profile: [string, string],
        education: {
            school: string,
            date: string
        },
    }

    const data:info = {
        name: '鄭凱文',
        job: 'Web Developer',
        profile: [
            '我之前是藥物分析研究員，在藥廠工作五年，負責新藥開發的分析工作。在工作中，我培養了嚴謹的邏輯思維和問題解決能力，以及良好的團隊合作精神。兩年前，我決定轉職成為網頁工程師。目前，我在創意數位科技公司擔任全端開發工程師，在兩年裡，我參與了多個大型專案，從無到有開發了多個系統。',
            '我熱愛程式開發，並且一直在不斷學習和成長。我相信，我的專業能力和個人特質能夠勝任貴公司的職位。我希望有機會與您深入交流，並為貴公司做出貢獻。'
        ],
        education: {
            school: '嘉南藥理科技大學',
            date: '2008 ~ 2012'
        },
    }


    return (
        <div className="grid grid-cols-3 gap-4">
            <div className='bg-kevin-blue py-16 px-8 flex flex-col gap-14'>
                <div className="">
                    <div className='border-slate-900 border-solid rounded-full relative mb-12'>
                        <img className='rounded-full border-4 border-white border-solid relative top-0 right-4' src={profileImage} alt="head" />
                        <span className='absolute w-full h-full rounded-full bg-transparent border-4 border-slate-50 border-solid top-3 left-4' />
                    </div>
                    <h1 className="uppercase text-white text-center text-5xl font-bold">{data.name}</h1>
                    <p className="uppercase text-white text-center text-2xl text-slate-500">Web Developer</p>
                </div>

                <Contact/>

                <div className="">
                    <h2 className="uppercase text-white text-xl font-bold mb-8">Profile</h2>
                    {data.profile.map( profileText => (
                        <p className='text-white'>{profileText}</p>
                    ))}
                </div>
                <div className="">
                    <h2 className="uppercase text-white text-xl font-bold mb-8">Education</h2>
                    <div className='flex items-center gap-4'>
                        <p className='text-white flex items-center justify-center w-fit px-4 py-2 bg-red-400 rounded-3xl'>{data.education.date}</p>
                        <span className='w-6 h-6 bg-white rounded-full block' />
                        <p className='text-white text-xl'>{data.education.school}</p>
                    </div>
                </div>
            </div>
            <div className="col-span-2 bg-kevin-blue px-8 py-16 flex gap-8 flex-col">
                <Skill/>
                <Content/>
                <Directions/>
                <Collections/>
            </div>
        </div>
    )
}

export default Resume