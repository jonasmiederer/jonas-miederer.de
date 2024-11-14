import { Roboto_Mono } from 'next/font/google'

const modak = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: 'swap',
  })


export default function Section({ title, content }) {

    return (
        <div className="flex flex-wrap  w-4/5 center my-8">
            {/* shadow-sm shadow-gray-800 p-3.5 border border-slate-800 */}
            <div className="box-left w-full xl:w-1/5">
                {/* <h1 className="font-bold bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 text-8xl" >{title}</h1> */}
                <h1 className={"font-bold tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A] text-3xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b break-words " + modak.className} >{title}</h1>

            </div>

            <div className="box-right flex-1 flex flex-wrap">
                {content}
            </div>
        </div>
    )
};