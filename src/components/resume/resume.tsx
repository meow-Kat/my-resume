import profileImage from '../../assets/imgs/head.jpg';
import Contact from './resume_components/contact';
import Content from './resume_components/content';
import Skill from './resume_components/skill';

export const Resume = () => {
    type info = {
        name: string,
        job: string,
        profile: string,
        education: string,
    }

    const data:info = {
        name: 'Kevin Cheng',
        job: 'Web Developer',
        profile: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, saepe. Mollitia veritatis soluta obcaecati nulla officiis dolorum, magnam nobis quis. Eos, nemo animi? Quisquam impedit unde laboriosam deserunt quam perspiciatis.',
        education: 'Chia Nan University of Pharmacy ＆ Science',
    }


    return (
        <div className="grid grid-cols-3 gap-4">
            <div className='bg-slate-900 py-16 px-8 flex flex-col gap-14'>
                <div className="">
                    <div className='border-slate-900 border-solid rounded-full relative mb-12'>
                        <img className='rounded-full border-4 border-white border-solid relative top-0 right-4' src={profileImage} alt="head" />
                        <span className='absolute w-full h-full rounded-full bg-transparent border-4 border-slate-50 border-solid top-3 left-4' />
                    </div>
                    <h1 className="uppercase text-white text-center text-5xl font-bold">Kevin Cheng</h1>
                    <p className="uppercase text-white text-center text-2xl text-slate-500">Web Developer</p>
                </div>

                <Contact/>

                <div className="">
                    <h2 className="uppercase text-white text-xl font-bold mb-8">Profile</h2>
                    <p className='text-white'>{data.profile}</p>
                </div>
                <div className="">
                    <h2 className="uppercase text-white text-xl font-bold mb-8">Education</h2>
                    <p className='text-white'>{data.education}</p>
                </div>
            </div>
            
            <div className="col-span-2 bg-slate-900 px-8 py-16 flex gap-8 flex-col">
                <Skill/>
                <Content/>
            </div>
        </div>
    )
}

export default Resume