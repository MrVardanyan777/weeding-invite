import React from "react";
import ProgramData from "../constants";
import ProgramCard from "../components/ProgramCard";

const Schedule = () => {
  return (
    <section className="w-full paddings flex justify-center items-center flex-col gap-5">
      <h1 className="text-[50px] text-brown font-thin text-center">Օրվա Ծրագիրը</h1>
      <div className="w-[1px] h-[100px] bg-brown" />

      <div className="flex flex-col justify-center items-center gap-5">
        {ProgramData.map((card) => (
          <ProgramCard
            key={card.id}
            name={card.name}
            place={card.place}
            time={card.time}
            city={card.city}
            addressLink={card.addressLink}
            image={card.image}
          />
        ))}
      </div>
      <p className="text-[30px] md:text-[50px] text-brown my-5 tracking-wider font-semibold font-sacramento">
        Սիրով սպասում ենք Ձեզ
      </p>
    </section>
  );
};

export default Schedule;
