import Image from "next/image";

type DefinePros = {
  icon: string;
  title: string;
  subtitle: string;
  msg: string;
  index: number
};

const Cards = ({ icon, title, subtitle, msg, index }: DefinePros) => {

// const shadowColor = ["bg-[#aedae6]", "bg-[#fff6c9]", "bg-[#fddbdb]"];
//  <div className={`rounded-lg p-6 border-2 border-gray-400 shadow-lg 
//     ${shadowColor[index % shadowColor.length]}`}></div>

const shadowColors = [
  "0 4px 20px rgba(255, 99, 71, 0.5)",    
  "0 4px 20px rgba(60, 179, 113, 0.5)",   
  "0 4px 20px rgba(65, 105, 225, 0.5)",   
  "0 4px 20px rgba(238, 130, 238, 0.5)",  
  "0 4px 20px rgba(255, 215, 0, 0.5)",    
];


  return (
    <div
    style={{ boxShadow: shadowColors[index % shadowColors.length] }}
     className={`rounded-lg p-6 border-2 border-gray-400 shadow-lg`
    }
    >
      <Image src={icon} alt={title} height={30} width={30} />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-sm text-gray-500">{subtitle}</p>
      <p className="text-gray-700">{msg}</p>
    </div>
  );
};

export default Cards;
