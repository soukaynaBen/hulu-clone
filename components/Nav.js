import requests from "../utils/request"
import {useRouter} from "next/router"
function Nav() {
    const router=useRouter();
    return (
        <nav className='relative'>
            <div className="mx-4 sm:mx-0 scrollbar-hide overflow-scroll  flex  justify-around items-center text-sm sm:text-lg md:text-xl lg:text-2xl ">
                {Object.entries(requests).map(([key,{title}])=>(
                    <h2 onClick={()=>{router.push(`/?genre=${key}`)}} className="last:pr-2 first:pl-2 md:last:pr-0 md:first:pl-0 px-1 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500" key={key} >{title}</h2>
                ))
                }
            </div>
        </nav>
    )
}

export default Nav
