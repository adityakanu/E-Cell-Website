// import back from "../assets/backimg.svg";
import ThreeScene from './3d/ThreeScene';
// import Rocket from "./3d/rocket";
export default function Home() {
	return (
		<section id='home' className='overflow-y-hidden bg-black font-Poppins'>
			<div className='flex items-center justify-center'>
				{/* <ThreeScene /> */}
				{/* <img
                    src={back}
                    className="w-[100%] overflow-y-hidden opacity-50"
                    alt=""
                /> */}

				<div style={{ width: '100%', height: '100vh' }}>
					<ThreeScene />
				</div>
				<div className='absolute z-10 flex flex-col items-center justify-center px-10 py-2 font-bold md:px-5 md:text-4vl text-3vl font-Montserrat'>
					<h1 className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 from-30% via-white via-60% to-amber-400 to-70%'>
						The Entrepreneurship Cell
					</h1>
					<h1 className='text-transparent bg-clip-text bg-gradient-to-r from-amber-100 from-5% via-amber-500 via-20% to-amber-100 to-80%'>
						NIT Agartala
					</h1>
				</div>
			</div>
		</section>
	);
}
