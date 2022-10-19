import { ReactComponent as IconMenu } from '../assets/icon-menu.svg'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { ReactComponent as IconCart } from '../assets/icon-cart.svg'
import avatar from '../assets/image-avatar.png'

export default function Header() {
    return (
        <header className="px-5 flex items-center">
            <nav className="w-full h-20 flex items-center md:border-b border-b-black">
                <div className="flex items-center gap-5">
                    <IconMenu className="cursor-pointer" />
                    <Logo className='h-[24px]' />
                </div>
                <ul className="hidden ml-[50px] md:flex gap-[30px]">
                    <li className="cursor-pointer">Collections</li>
                    <li className="cursor-pointer">Men</li>
                    <li className="cursor-pointer">Women</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Contact</li>
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
