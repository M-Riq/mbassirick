import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden  xl:flex xl:max-w-non  ">
       <Image src={'/RickB.png'} width={237} height={378} className="translate-z-0 w-full h-full"/>
    </div>
  )
};

export default Avatar;
