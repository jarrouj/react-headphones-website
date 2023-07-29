


export const Navigation =()=>{
    return (
        <nav className="flex items-center bg-white">
        <div className="flex items-center mr-auto ml-[30rem]">
            <img src="path/to/your/image.jpg" alt="Logo" className="w-10 h-10" />
            <h3 className="ml-2 text-xl">Esportas</h3>
        </div>
        <ul className="flex list-none mr-[30rem] space-x-16" >
            <li className="ml-4 text-red-500 ">About</li>
            <li className="ml-4">Features</li>
            <li className="ml-4">Clients</li>
            <li className="ml-4">Plans</li>
            <li className="ml-4 rounded-full border border-black text-white bg-black w-24 px-6 text-[0.7rem] h-7 py-[0.3rem]">JOIN US</li>
        </ul>
    </nav>
    
    );
}