import shoe from '../assets/image-product-1-thumbnail.jpg'
import { ReactComponent as IconDelete } from '../assets/icon-delete-1.svg'

export default function Cart() {
    return (
        <div className="absolute top-0 right-0 w-[calc(100%-16px)] h-auto bg-white m-[8px] rounded-[10px] md:w-[420px] lg:shadow-[0px_30px_50px_rgba(0,0,0,0.3)]">
            <div className="p-[24px] border-b border-b-[hsl(219,9%,45%)]">
                Cart
            </div>
            <div className="p-[24px] flex items-center justify-between mb-[25px]">
                <div className="flex items-center gap-[16px]">
                    <img
                        src={shoe}
                        alt="Product"
                        className="rounded-[4px] w-[50px] h-[50px]"
                    />
                    <p>
                        Autumn Limited Edition...
                        <br />
                        $125.00 x 3
                    </p>
                </div>
                <IconDelete className="cursor-pointer" />
            </div>
            <div className="px-[24px] pb-[24px]">
                <button
                    type="button"
                    className="bg-[#ff7d1a] text-white text-[16px] font-bold font-kumbh flex items-center justify-center gap-[15px] w-full rounded-[10px] py-[18px]"
                >
                    Checkout
                </button>
            </div>
        </div>
    )
}
