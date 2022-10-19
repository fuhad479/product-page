import { ReactComponent as IconPlus } from '../assets/icon-plus.svg'
import { ReactComponent as IconMinus } from '../assets/icon-minus.svg'
import { ReactComponent as IconCart } from '../assets/icon-cart-1.svg'
import shoe from '../assets/image-product-1.jpg'

export default function Product() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:gap-[100px] lg:max-w-[1100px] lg:mx-auto lg:py-[90px]">
            <div className="rounded-[15px] overflow-hidden">
                <img
                    src={shoe}
                    alt="Product"
                />
            </div>
            <div className="p-[24px] lg:px-[45px] lg:py-0">
                <h4 className="uppercase text-[12px] tracking-[3px] font-bold text-[#ff7d1a] mb-[10px] lg:text-[14px] lg:mb-[20px]">
                    Sneaker company
                </h4>
                <h2 className="capitalize text-[30px] font-bold leading-[34px] mb-[18px] lg:text-[42px] lg:leading-[48px] lg:mb-[35px]">
                    Fall limited edition sneakers
                </h2>
                <p className="text-[14px] mb-[30px] lg:text-[16px]">
                    These low profile sneakers are your perfect casual wear
                    campanion. Featuring a durable rubber outer sole, they'll
                    withstand everything the weather can offer
                </p>
                <div className="flex items-center justify-between mb-[20px] lg:flex-col lg:items-start">
                    <div className="flex items-center gap-[16px] font-bold text-[30px]">
                        <span>$125.00</span>
                        <span className="text-[16px] text-[#ff7d1a] bg-[hsl(25,100%,94%)] rounded-[10px] py-[1px] px-[10px]">
                            50%
                        </span>
                    </div>
                    <div className="font-bold text-[hsl(219,9%,45%)] line-through">$250.00</div>
                </div>
                <div className="flex flex-col gap-[16px] md:flex-row">
                    <div className="grid items-center grid-cols-3 bg-[hsl(223,64%,98%)] px-[24px] py-[18px] rounded-[10px]">
                        <IconMinus className='cursor-pointer' />
                        <input
                            type="text"
                            name=""
                            id=""
                            value={0}
                            onChange={(event) => event.target.value}
                            className="bg-transparent text-center font-bold w-auto"
                        />
                        <IconPlus className='ml-auto' />
                    </div>
                    <button
                        type="button"
                        className="bg-[#ff7d1a] text-white text-[16px] font-bold font-kumbh flex items-center justify-center gap-[15px] w-full rounded-[10px] py-[18px]"
                    >
                        <IconCart className='cursor-pointer' />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}
