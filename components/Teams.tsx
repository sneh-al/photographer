import Image from "next/image";

const Teams = () => {
  return (
    <div className="py-24 flex items-center justify-center flex-col gap-6">
      <h1 className="text-2xl md:text-4xl">Meet the team</h1>
      <div className="max-w-3xl m-auto pb-10  p-5">
        <Image
          src="/images/lead.jpg"
          className="w-full rounded-xl m-auto "
          alt="snap noamds"
          width={800}
          height={500}
        />
        <div className="flex gap-3 flex-wrap items-center text-xl py-5">
          <h4 className="font-semibold text-4xl">Thom Holmes</h4>
          <p>/ Lead Photogrpaher</p>
        </div>
      </div>

      {/* another team */}
      <div className="max-w-7xl m-auto flex flex-col md:flex-row  gap-6 ">
        {/* memeber 1 */}

        { members.map((member) =>   <div key={member.name} className="card shadow-xl p-5 flex  flex-col items-center justify-center gap-6 relative ">
        <Image
          src={member.image}
          className="max-w-sm w-full h-full rounded-badge "
          alt={member.name}
          width={200}
          height={400}
        />

        <div className="flex  gap-3 flex-col text-xl py-5 prose ">
          <h2 className="font-semibold"> {member.name} </h2>
          <p>{member.post}</p>
        </div>
      </div>)}
      { members.map((member) =>   <div key={member.name} className="card shadow-xl p-5 flex  flex-col items-center justify-center gap-6 relative ">
        <Image
          src={member.image}
          className="max-w-sm w-full h-full rounded-badge "
          alt={member.name}
          width={200}
          height={400}
        />

        <div className="flex  gap-3 flex-col text-xl py-5 prose ">
          <h2 className="font-semibold"> {member.name} </h2>
          <p>{member.post}</p>
        </div>
      </div>)}
    
      </div>
    </div>
  );
};



const members =[
    {
        name:"Angelo Abear",
        post:"Assistant Photogrpaher",
        image:"/images/main.jpg"
    },{
        name:"Amine mouzaoui",
        post:"Videogrpaher",
        image:"/images/video.jpg"
    }
]

export default Teams;
