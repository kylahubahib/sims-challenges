import { useState } from 'react';
import challenges from './challengeData/challenges.json';
import plumbobImg from './assets/plumbob.png';


export default function Homepage() {
  const [challenge, setChallenge] = useState<string | null>(null);
  const [popKey, setPopKey] = useState(0);

  const randomize = () => {
    const random = challenges[Math.floor(Math.random() * challenges.length)];
    setChallenge(random);
    setPopKey((k) => k + 1); // This retrigger the pop-in animation each click
  };

  return (

    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-6 font-nunito bg-linear-gradient">

      <main className="flex flex-col items-center justify-center w-full max-w-xl flex-1 text-center">
        
       <div>
        <img src={plumbobImg} alt="Plumbob" className="mb-4 drop-shadow-lg w-25 h-auto animate-bounce" />
       </div>

       <h1 className="text-6xl text-white leading-tight font-baloo font-extrabold drop-shadow-lg [text-shadow:0_3px_0_rgba(0,0,0,0.15)]">
        Challenge Generator
        </h1>
        <p className="mt-3 text-white/80 text-base">
          Can't think of a challenge? See what fate has planned for your Sim.
        </p>

        <button
          onClick={randomize}
          className="
            mt-8
            cursor-pointer
            group
            relative
            px-8
            py-4
            rounded-full
            text-white
            text-lg
            font-baloo
            font-bold
            bg-[#8BC53F]
            shadow-[0_6px_0_#5C8A22,0_8px_14px_rgba(0,0,0,0.25)]
            hover:scale-105
            active:translate-y-1
            active:shadow-[0_2px_0_#5C8A22,0_3px_8px_rgba(0,0,0,0.25)]
            transition-transform
        "
          onMouseDown={(e) => (e.currentTarget.style.boxShadow = '0 2px 0 #5C8A22, 0 3px 8px rgba(0,0,0,0.25)')}
          onMouseUp={(e) => (e.currentTarget.style.boxShadow = '0 6px 0 #5C8A22, 0 8px 14px rgba(0,0,0,0.25)')}
        >
          Randomize
        </button>

        <div className="mt-8 w-full min-h-[1px]">
          {challenge && (
            <div key={popKey} className="relative mt-2 p-6 rounded-2xl text-left animate-[popIn_0.35s_ease-out] bg-[#FDF8EC] border-3 border-dashed border-[#8BC53F] text-[#24313D]">

              {/* Result */}
             <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#FF7A59] rounded-[8px_0_0_0] [clip-path:polygon(0_0,_100%_0,_0_100%)]" />

              <h2 className="text-sm tracking-wide font-baloo mb-1 font-[700] text-[#5C8A22] drop-shadow-[0_1px_0_rgba(0,0,0,0.15)]">
                Your Challenge
              </h2>
              <p className="mt-2 text-xl leading-snug font-nunito font-[600]">
                {challenge}
              </p>

            </div>
          )}
        </div>
      </main>
    </div>
  );
}