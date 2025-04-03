import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div 
        className="w-full h-[300px] max-lg:h-[250px]" 
        
      >
        
        <div className="bg-gradient-to-tr from-black via-neutral-950 to-neutral-800 h-full w-full flex flex-col gap-3 justify-center items-center max-lg:px-4 text-white text-center">
          <h1 className="font-semibold bg-gradient-to-t from-slate-600 via-slate-50 to-white bg-clip-text text-transparent text-5xl max-lg:text-3xl max-lg:text-start max-lg:leading-10 leading-14 w-6/12 max-lg:w-full">
            Buckle Up! You’ve Just Entered the <br />
            <span className="bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text">
              IP Studios Universe!
            </span>
          </h1>
          <p className="text-[#e7e7e7] text-start max-w-[800px]">
            At IP Studios, we don’t just create – we detonate ideas, bend pixels, and sculpt digital masterpieces that leave the world shook!
          </p>
        </div>
      </div>
      <div className="h-[500px] max-lg:h-fit max-lg:px-3 flex justify-center bg-[#f7f7f7] w-full">
  <div className="max-w-[1200px] py-20 max-lg:py-10 h-full w-full max-lg:grid-cols-1 grid gap-10 grid-cols-2">
    <div className="h-full flex  items-center">
      <h1 className="font-semibold leading-12 max-lg:text-2xl  max-lg:leading-8 text-4xl">
        We are the mad scientists of design, code sorcerers, and content alchemists, 
        fusing art and technology into experiences that slap, pop, and sizzle!
      </h1>
    </div>
    <div className="h-full flex items-center justify-center overflow-hidden">
      <img
        src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className="h-full w-full object-cover hover:scale-105 duration-150"
        
        alt="AI Illustration"
      />
    </div>
  </div>
</div>
      </>
  );
}
