import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCodeCompare } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const transPhone = (phone: string) => {
        return '+886' + phone.slice(1);
    };

    const data: {
        mail: { info: string; icon: any; href: string; };
        phone: { info: string; icon: any; href: string; };
        github: { info: string; icon: any; href: string; };
    } = {
        mail: {
            info: '',
            icon: null,
            href: '',
        },
        phone: {
            info: '',
            icon: null,
            href: '',
        },
        github: {
            info: '',
            icon: null,
            href: '',
        },
    };

    data.mail = {
        info: 'kangle7891@gmail.com',
        icon: faEnvelope,
        href: `mailto:${data.mail.info}`,
    };

    data.phone = {
        info: '0933241178',
        icon: faPhone,
        href: `tel:${transPhone(data.phone.info)}`,
    };

    data.github = {
        info: 'meow-Kat',
        icon: faCodeCompare,
        href: `https://github.com/${data.github.info}`,
    };

    return (
        <div>
            <h2 className="uppercase text-white text-xl font-bold mb-8">Contact</h2>
            {Object.entries(data).map(([key, item]) => (
                <a
                    key={key}
                    href={item.href}
                    className='text-white flex items-center gap-4 text-lg mb-4'
                >
                    <div className='w-12 h-12 rounded-full border-2 border-white border-solid flex items-center justify-center'>
                        <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <span>{item.info}</span>
                </a>
            ))}
        </div>
    );
};

export default Contact;