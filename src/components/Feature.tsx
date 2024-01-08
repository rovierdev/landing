import Image from "next/image";
import { useEffect, useState } from "react";

interface FeatureData {
    topText: string,
    title: string,
    description: JSX.Element,
    imgURL: string

}

const Feature = ({num}: {num: number}) => {
    const [data, setData] = useState<FeatureData>({topText: "", title: "", description: <></>, imgURL:""});

    useEffect(() => {
        if (num === 1) {
            setData({
                topText: "Quick & Easy",
                title: "Order Optimization",
                description: <>Minimize costs and maximize profits for your <span className="font-bold text-primary">entire order</span> across multiple suppliers. Always pay the <span className="font-bold text-primary">lowest price</span> for the quality products you want anytime, anywhere.</>,
                imgURL: "/images/groceries.jpeg" // 770 × 385
            })
        } else if (num === 2) {
            setData({
                topText: "Flexible & Reliable",
                title: "Network Management",
                description: <>Food distributors you want and trust. No vendor lock-in: choose your own network of <span className="font-bold text-primary">trusted brands and suppliers</span> or let Rovier help you identify what is best for your business.</>,
                imgURL: "/images/trucks.jpeg" // 2560 × 1707
            })
        } else {
            setData({
                topText: "Simple & Informed",
                title: "Financial Decisions",
                description: <>No more paperwork. Accessible <span className="font-bold text-primary">financial management</span> 24/7: manage all your orders, invoices, reports, and payments through a single interface.</>,
                imgURL: "/images/finances.avif" // 626 × 417
            })
        }
    }, [num])
    
    return (
        <div className="py-10 px-6 md:px-28 flex flex-col lg:flex-row 2xl:w-2/3 justify-between">
            {num % 2 === 0 && 
                <div className="pt-5 lg:pt-0 basis-1/2 flex-initial">
                    <Image
                        src={data.imgURL}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt=""
                        className="max-w-lg w-full rounded-lg shadow-lg"
                    />
                </div>
            }
            <div className={`${num % 2 === 0 ? 'lg:ml-32' : 'lg:mr-32'} basis-1/2 my-auto`}>
                <h1 className="uppercase text-xs pb-3 text-primary sometype font-bold tracking-widest">{data.topText}</h1>
                <h1 className="anybody text-4xl md:text-5xl pb-6 ">{data.title}</h1>
                <h1 className="inter text-lg">{data.description}</h1>
            </div>
            {num % 2 === 1 && 
                <div className="pt-5 lg:pt-0 basis-1/2 flex-initial">
                    <Image
                        src={data.imgURL}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt=""
                        className="max-w-lg w-full rounded-lg shadow-lg"
                    />
                </div>
            }
        </div>
    )
}

export default Feature;