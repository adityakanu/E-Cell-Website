import ECellAbout from '../assets/grp.webp';

export default function About() {
	return (
		<section
			id='about-us'
			className='py-16 bg-yellow-600 xl:py-48 font-Poppins'
		>
			<div className='flex flex-col items-center xl:flex-row'>
				<div className='AboutUsText'>
					<p className='font-Montserrat font-bold  text-white xl:-rotate-90 p-0.5 mr-8 text-[2rem] xl:text-xl my-4 xl:my-0'>
						About&nbsp;Us
					</p>
				</div>
				<div className='p-5 mx-8 rounded-xl bg-black/25 transform-gpu'>
					<img
						src={ECellAbout}
						className='rounded-xl max-w-[36rem] md:min-w-[38rem] lg:min-w-[22rem] xl:min-w-[36rem] 2xl:min-w-[46rem] w-full'
						alt='bg'
						width={700}
						height={500}
					/>
				</div>
				<div className='flex flex-col items-center mx-8 sm:mx-20 xl:items-start'>
					<div className='py-10 text-s[1rem] font-bold text-justify font-Montserrat md:text-xl xl:text-xl 2xl:text-2xl'>
						The Entrepreneurship Cell is a non-profit organization run by the
						students of National Institute of Technology Agartala that aims at
						manifesting the latent entrepreneurial spirit of the young students.
						E-Cell aims at promoting the startup culture in Agartala as well as
						North-East India. With various undergoing projects, few successful
						startups, a lot of failures, and the flagship Carpediem E-Summit,
						E-Cell has transformed itself from a small community established by
						budding entrepreneurs in 2017 to a full-fledged organization with
						multi-talented like-minded people striving to solve the various
						problem with an entrepreneurial minsdset
					</div>
					<a href='/'>
						<button className='px-4 py-2 font-bold text-white bg-black rounded-full w-fit hover:text-black hover:bg-white drop-shadow-xl text-[1rem] md:text-xl !transition-all duration-300 ease-in-out'>
							Meet the team
						</button>
					</a>
				</div>
			</div>
		</section>
	);
}
