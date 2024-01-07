import { RefObject } from "react";


const Tagline = ({section}: {section: number}) => {
    return (
        <div className="text-white pt-12 2xl:w-4/6 ">
            <h1 className="text-3xl sm:text-5xl lg:leading-none font-extralight pb-12">{
                section === 1 ? <><span className="nanum font-bold text-primary-900">Efficient procurement</span> at your fingertips.</> : 
                section === 2 ? <>Taking financial performance to <span className="nanum font-bold text-primary-900">new heights</span>.</> :
                <>Where <span className="nanum font-bold text-primary-900">vision</span> meets <span className="nanum font-bold text-primary-900">reality</span>.</>
            }</h1>
            <div className="flex pb-12">
                <h1 className="uppercase font-extralight text-md sm:text-lg">{
                    section === 1 ? 'Best products, best prices, best quality':
                    section === 2 ? 'Success through innovation' :
                    'Our Story' 
                }</h1>                
            </div>
        </div>
    )
}


export default Tagline;