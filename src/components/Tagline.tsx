import { RefObject } from "react";


const Tagline = ({featureScroll} : {featureScroll: RefObject<HTMLDivElement>}) => {
    const scrollToFeature = () => {
        if (featureScroll.current){
            featureScroll.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="text-white p-6 md:p-12 w-full h-full flex flex-col justify-between">
            <h1 className="inter font-extralight text-3xl md:text-4xl lg:text-5xl">Our platform provides <span className="nanum font-normal text-primary">restaurants and franchises</span> with a unique and reliable way to procure goods from various suppliers, with <span className="nanum font-normal text-primary">improved efficiency</span> and <span className="nanum font-normal text-primary">low overhead costs.</span></h1>
            
            <button className="pt-6 md:pt-12 w-full" onClick={()=>scrollToFeature()}>
                <div className="flex w-max items-center hover:cursor-pointer stroke-white hover:text-primary hover:stroke-primary transition ease-in-out">
                    <h1 className="uppercase font-extralight text-sm sm:text-md md:text-lg lg:text-xl ">how we do it</h1>
                    <svg className="mt-3 sm:mt-4 md:mt-5 ml-2 sm:ml-3 w-5 sm:w-6 md:w-7" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8007 1.39027L13.8007 0.846753L13.8007 1.39027ZM28.934 18.7916L28.3905 18.7916L28.3905 18.7916L28.934 18.7916ZM28.5497 27.176C28.762 27.3882 29.1061 27.3882 29.3184 27.1759L32.7773 23.717C32.9895 23.5048 32.9895 23.1606 32.7773 22.9484C32.565 22.7361 32.2209 22.7361 32.0086 22.9484L28.934 26.023L25.8594 22.9484C25.6472 22.7361 25.303 22.7361 25.0908 22.9484C24.8785 23.1606 24.8785 23.5048 25.0908 23.717L28.5497 27.176ZM28.9341 16.5237L29.4776 16.5237L29.4776 16.5237L28.9341 16.5237ZM23.6249 5.01258L23.2721 5.426L23.6249 5.01258ZM8.04416e-07 1.93387L13.8007 1.93379L13.8007 0.846753L-6.40269e-06 0.846837L8.04416e-07 1.93387ZM28.3905 18.7916L28.3905 26.7916L29.4776 26.7916L29.4775 18.7916L28.3905 18.7916ZM28.3905 16.5237L28.3905 18.7916L29.4775 18.7916L29.4776 16.5237L28.3905 16.5237ZM23.2721 5.426C26.52 8.19799 28.3906 12.2537 28.3905 16.5237L29.4776 16.5237C29.4776 11.9356 27.4677 7.57768 23.9778 4.59916L23.2721 5.426ZM13.8007 1.93379C17.2728 1.93376 20.6311 3.172 23.2721 5.426L23.9778 4.59916C21.14 2.17723 17.5315 0.846731 13.8007 0.846753L13.8007 1.93379Z" fill="#EA4026"/>
                    </svg>
                </div>                 
            </button>
        </div>
    )
}


export default Tagline;