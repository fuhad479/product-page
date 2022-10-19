import { ReactComponent as IconMenu } from '../assets/icon-menu.svg'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { ReactComponent as IconCart } from '../assets/icon-cart.svg'
import avatar from '../assets/image-avatar.png'

export default function Header() {
    return (
        <header className="w-full px-5 flex items-center lg:max-w-[1100px] lg:mx-auto lg:px-0">
            <nav className="w-full h-[80px] flex items-center md:border-b border-b-[hsl(219,9%,45%)]">
                <div className="flex items-center gap-5">
                    <IconMenu className="cursor-pointer md:hidden" />
                    <Logo className='h-[24px]' />
                </div>
                <ul className="hidden ml-[50px] md:flex gap-[30px]">
                    <li className="cursor-pointer py-[40px]">Collections</li>
                    <li className="cursor-pointer py-[40px]">Men</li>
                    <li className="cursor-pointer py-[40px]">Women</li>
                    <li className="cursor-pointer py-[40px]">About</li>
                    <li className="cursor-pointer py-[40px]">Contact</li>
                </ul>
                <div className="ml-auto flex items-center gap-5">
                    <IconCart className="cursor-pointer" />
                    <img
                        src={avatar}
                        alt="Avatar"
                        className="w-7 cursor-pointer"
                    />
                </div>
            </nav>
        </header>
    )
}
