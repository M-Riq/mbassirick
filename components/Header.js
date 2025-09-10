
import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";
import {motion} from "framer-motion"

const Header = () => {
  return (
    <div>
      <header className="absolute z-30 w-full items-center px-16 xl:px-0 xl:h-[90px]">
      
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
         <Link href={'/'}>
            {/* <Image src={'/logo.svg'}
                width={220}
                height={30}
                alt=""
                priority = {true}
            /> */}
            <h1 className="text-3xl w-10"> Mbassi <br/> <span className="text-accent">Rick</span></h1>
         </Link>
         {/* socials */}
         <Socials/>
        </div>
      </div>
    </header>
    </div>
  );
}; 

export default Header;
