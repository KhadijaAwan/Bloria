import Link from 'next/link';
import Image from 'next/image';
import { socialLinks } from '@/utils/home';
import { ModeToggle } from '../ui/modeToggle';
import AuthLink from './authLink';
import { fontMedium } from '../style';

export default function MainNav() {
    return (
        <nav className="hidden lg:flex justify-between items-center py-3">
            <div className='flex'>
                {socialLinks.map((socialLink) => (
                    <Link key={socialLink.id} href={socialLink.href} aria-label="Social button">
                        <Image src={socialLink.image} alt={socialLink.alt} width={30} height={30} className='mr-2' />
                    </Link>
                ))}
            </div>

            <h2 className={`${fontMedium.className} text-purple-800 dark:text-purple-500 text-2xl tracking-wide dark:tracking-wider`}>Bloria Corner</h2>

            <div className='flex items-center'>
                <ModeToggle />
                <Link href="/" aria-label="Home button" className={`${fontMedium.className} ml-3 mr-6 text-sm lg:text-base text-purple-900 dark:text-purple-500 tracking-wider`}>Home</Link>
                <AuthLink />
            </div>
        </nav>
    )
}