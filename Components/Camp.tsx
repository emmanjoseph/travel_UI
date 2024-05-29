
import { PEOPLE_URL } from "@/app/Constants";
import Image from "next/image";
interface CampProps {
  backgroundImage: string;
  title: string;
  subTitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subTitle, peopleJoined }:CampProps) => {
  return (
    <div className={`relative h-full min-w-[1100px]  ${backgroundImage} bg-cover bg-center bg-no-repeat lg:rounded-r-5xl 2xl:rounded-r-3xl `}>
      <div className="h-full p-6 md:px-20 md:py-10 flex flex-col justify-between bg-black/30  lg:rounded-r-5xl 2xl:rounded-r-3xl">
        <div className="flex gap-2">
          <div className="w-[50px] h-[50px] rounded-full bg-green-50 p-4">
            <Image
            src="/folded-map.svg"
            alt="folded"
            width={25}
            height={25}
            />
           
          </div>
          <div className="flex flex-col gap-1 ml-3">
              <p className="text-white bold-18">{title}</p>
              <p className="text-white regualr-14">{subTitle}</p>

            </div>
        </div>

        <div className="text-white flex items-center space-x-2 oveflow-hidden">
          <span>
          {PEOPLE_URL.map((url)=>(
            <Image
            className="inline-block w-10 h-10"
            key={url}
            src={url}
            alt="person"
            width={50}
            height={50}
            
            />

          ))}
          </span>
          <p className="bold-16 md:bold-20">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="xl:max-container relative flex flex-col py-10 mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[304px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage='bg-bg-img-1'
          title="Putuk Truno Camp"
          subTitle="Prigen Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage='bg-bg-img-2'
          title="Mountain view"
          subTitle="Somewhere in the wilderness"
          peopleJoined="30+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>

    </section>
  );
};

export default Camp;

