export default function CV(items) {


    return <div>
        {items.children}
    </div>

};

export function CVItem({ year, title, description }) {

    return <div className="flex items-center my-5">
        
        <span className="w-1/5" >
            <svg focusable="false" height={50} viewBox="0 0 48 48" aria-hidden="true" className="accent text-white">
                <circle data-v-1c1b25d9="" cx="50%" cy="50%" r="24"  className="w-4 h-4" stroke="rgb(98, 0, 238)" stroke-width="1"></circle>
                <text data-v-1c1b25d9="" x="24" y="24" alignment-baseline="central" text-anchor="middle" fill="white">{year}</text>
            </svg>
        </span>


        <div className="w-4/5 ">
            <h2 className="inline-block text-2xl font-bold">{title}</h2>

            <p className="">{description}</p>
        </div>

    </div>
}