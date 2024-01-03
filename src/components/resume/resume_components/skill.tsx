

const Skill = () => {
    const skills = {
        Frondend: [
            'HTML',
            'CSS',
            'JavaScript',
            'Vue',
            'React',
            'Typescript',
            'Tailwind',
            'GSAP',
        ],
        Backend: [
            'php',
            'Laravel',
        ],
        DB: [
            'MySQL',
        ],
        Other: [
            'Linux',
            'Git',
            'NewbPay',
            '三竹簡訊'
        ]
    }


    return (
        <div className=''>
            <h2 className='uppercase text-white text-2xl font-bold mb-8'>Skill</h2>
            <div className='flex justify-between'>
                {
                    Object.entries(skills).map( ([title , skillItems]) => (
                        <ul className='text-white ps-4'>
                            <li className='text-white text-xl font-bold mb-4'>{title}</li>
                            { skillItems.map( (skill) => 
                                <li className='ms-4 mb-2 list-disc'>{skill}</li>
                            )}
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}

export default Skill