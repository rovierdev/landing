import Image from "next/image";
import { useEffect, useState } from "react";


interface BenefitType {
    text: JSX.Element;
    imgURL: string;
}

const Benefits = ({isSupplier} : {isSupplier : boolean}) => {
    const [data, setData] = useState<BenefitType[]>([]);

    useEffect(() => {
        if (isSupplier) {
            setData([
                {
                    text: <>Reduce operating costs. <span className="text-zinc-400">Improve daily logistics and streamline your salesforce by 3x.</span></>,
                    imgURL: '/images/cost-report.png',
                },
                {
                    text: <>Increase sales revenue and boost profits. <span className="text-zinc-400">Upsell through targeted advertising.</span></>,
                    imgURL: '/images/finance-leaf.png',
                },
                {
                    text: <>Expand your customer base. <span className="text-zinc-400">Acquire new customers with our optimization algorithms.</span></>,
                    imgURL: '/images/customers.png'
                }
            ])
        } else {
            setData([
                {
                    text: <>Cut costs and boost profits. <span className="text-zinc-400">Optimize your entire order at once, not just specific items.</span></>,
                    imgURL: '/images/order-ipad.png',
                },
                {
                    text: <>Make informed financial decisions. <span className="text-zinc-400">We provide comprehensive financial management at your fingertips.</span></>,
                    imgURL: '/images/expenses-ipad.png',
                },
                {
                    text: <>Save time and effort. <span className="text-zinc-400">Our platform is quick, easy, and personalized for every recommendation.</span></>,
                    imgURL: '/videos/notif-phone.mp4'
                }
            ])
        }
    },[isSupplier]);
    
    return (
        <div className={`flex justify-center items-center flex-col ${!isSupplier && 'bg-gray-100'} pb-8 px-6 2xl:flex`}>
            <h1 className="anybody text-4xl sm:text-5xl pt-16 pb-6 text-center w-2/3 justify-center">Benefits For {isSupplier ? 'Suppliers' : 'Restaurants'}</h1>
            <div className="grid grid-rows-1 md:grid-cols-3 md:grid-rows-none gap-6 py-10">
                {data.map((benefit, i) => (
                    <div key={`${i}-${isSupplier ? 'supplier' : 'restaurant'})}`} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        {benefit.imgURL.split('.')[1] === 'mp4' ? 
                            <div className="aspect-video rounded-t-lg">
                                <video className="rounded-t-lg" autoPlay muted loop playsInline>
                                    <source src={benefit.imgURL} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        :
                            <div className="aspect-video border-b-[0.1px] border-black">
                                <Image src={benefit.imgURL} alt="" width={0} height={0} sizes="100vw" className="rounded-t-lg max-w-lg w-full" />
                            </div>
                        }

                        <div className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">{benefit.text}</h5>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Benefits;