import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import Squares from "./components/Squares/Squares";
import DecryptedText from "./components/DecryptedText/DecryptedText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import GooeyNav from "./components/GooeyNav/GooeyNav";
import FadeContent from "./components/FadeContent/FadeContent";

export default function Home() {

  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="https://nextjs.org/icons/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="https://nextjs.org/icons/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
    <div className="min-h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full">
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#222'
          hoverFillColor='#fff'
        />
      </div>
      <FadeContent blur={true} duration={1000} easing={'ease-in-out'} initialOpacity={0}>
        <div className="absolute flex items-center justify-center w-screen h-[80px] mt-10">
          <GooeyNav
            items={items}
            animationTime={600}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            timeVariance={300}
          />
        </div>
      </FadeContent>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-6 content-center">
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={false}
              config={{ tension: 50, friction: 25 }}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
            >
              <div className="text-3xl grid font-semibold transition-all gap-4">
                <DecryptedText
                  text="Hello World!"
                  animateOn={'view'}
                  revealDirection={'start'}
                  speed={60}
                  maxIterations={10}
                  sequential={true} />
                <DecryptedText
                  text="I'am Satrio Adhi Purbo"
                  animateOn={'view'}
                  revealDirection={'start'}
                  speed={60}
                  maxIterations={10}
                  sequential={true} />
                <DecryptedText
                  text="Website Developer"
                  animateOn={'view'}
                  revealDirection={'start'}
                  speed={60}
                  maxIterations={10}
                  sequential={true} />
                <DecryptedText
                  text="<The portofolio web, still development.../>"
                  animateOn={'view'}
                  revealDirection={'start'}
                  speed={60}
                  maxIterations={10}
                  sequential={true}
                />
              </div>
            </AnimatedContent>
          </div>
          <div className="col-span-6 text-center"><Lanyard position={[0, 0, 18]} /></div>
        </div>
      </div>
    </div>
  );
}
