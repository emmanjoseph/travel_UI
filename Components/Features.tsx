import { FEATURES } from "@/app/Constants"
import Image from "next/image"

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-no-repeat py-24 ">
      <div className="max-container padding-container relative w-full flex justify-end">
      <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className='relative'>
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid md:grid-cols-2 gap-6">
            {FEATURES.map((feature)=>(
              // <h1>{feature.title}</h1>
              <FeatureItem 
              
              key={feature.title}
              icon={feature.icon}
              title={feature.title} 
              variant = {feature.variant}
              description={feature.description}
              />
            
            ))}
          </ul>
          </div>

      </div>      
    </section>
  )
}

export default Features

type FeatureItem = {
  title:string,
  icon:string,
  variant:string,
  description:string
}

const FeatureItem =({title,icon,variant,description}:FeatureItem)=>
  {
    return <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-3 lg:p-6 bg-green-50">
        <Image src={icon} alt="map" width={25} height={25}/>
      </div>
      <div>
      <h1 className="bold-20 lg:bold-32 mt-5 capitalize ">{title}</h1>
      <p className="regualr-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">{description}</p>
      </div>

    </li>
  }
