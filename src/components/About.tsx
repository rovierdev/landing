import Image from "next/image";
import { RefObject } from "react";



const About = ({contactRef}: {contactRef: RefObject<HTMLDivElement>}) => {


    return (
        <div className="px-6 md:px-28 flex md:flex-row flex-col justify-center items-center mt-10 mb-16">
            <div className="basis-1/2 sm:pr-10">
                <div className="pt-12 2xl:w-4/6 flex flex-row space-x-6">
                    <Image src="/images/rovier-button.png" alt="" width={0} height={0} sizes="100vw" className="w-14 h-14 hover:scale-90 transition-all ease-linear" />
                    <h1 className="text-3xl sm:text-5xl anybody pt-1.5">About Rovier</h1> 
                </div>
                <h1 className="text-lg pt-8 font-light tracking-wide">Rovier is the worldwide leader in efficient electronic procurement using mathematical optimization. Rovier’s Click and Optimize technology combines the power of state-of-the-art mathematical optimization, advanced data analytics, and smart mobile technology. Our team consists of worldwide leaders in the fields of information technology, mathematical optimization, and hotel/restaurant management. Our pioneering work in mathematical optimization has won the INFORMS Computing Society Prize and the Beale-Orchard-Hays Prize, two of the most prestigious international awards.</h1>
            </div>
            <div ref={contactRef} className="basis-1/2 shadow-lg rounded-lg mt-10 md:pt-0">
                {/* <div data-tf-live="01HJS4NV5WRHJZW0BQX6DN6Q7E"></div><script src="//embed.typeform.com/next/embed.js"></script> */}
                <div className="bg-primary min-w-full min-h-full"></div>
            </div>
        </div>
    )
}

export default About;