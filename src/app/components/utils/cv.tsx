import { Divider } from "@nextui-org/divider"

export default function CV(items) {


    return <div>
        {items.children}
    </div>

};

export function CVItem({ year, title, description }) {

    return <div className="flex items-top my-5 gap-10">

        <div className="flex flex-col items-start" >
            <div className="flex flex-col items-center h-full"> 
                <svg focusable="false" height={50} viewBox="0 0 50 50" aria-hidden="true" className="accent text-white">
                    <circle data-v-1c1b25d9="" cx="50%" cy="50%" r="24" className="w-4 h-4" stroke="rgb(98, 0, 238)" strokeWidth="1"></circle>
                    <text data-v-1c1b25d9="" x="25" y="25" alignmentBaseline="central" textAnchor="middle" fill="white" className="text-sm">{year}</text>
                </svg>

                <Divider orientation="vertical" className="white my-1 w-px h-4 grow"></Divider>

            </div>
        </div>


        <div className="grow ">
            <h2 className="inline-block text-2xl font-bold">{title}</h2>

            <p className="">{description}</p>
        </div>

    </div>
}