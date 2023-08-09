import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ecellWhite from '../assets/Logo-White.png';

const navLinks = [
	{
		name: 'Home',
		href: '#home',
	},
	{
		name: 'About Us',
		href: '#about-us',
	},
	{
		name: 'Initiatives',
		href: '#initiatives',
	},
	{
		name: 'Gallery',
		href: '#gallery',
	},
	{
		name: 'Reach out',
		href: '#reach-out',
	},
];

export default function Navbar() {
	const [hamburgerOpen, setHamburgerOpen] = React.useState(false);

	return (
		<>
			<AnimatePresence>
				{hamburgerOpen && (
					<motion.div
						className='h-full z-[100000] absolute text-white  w-full bg-black'
						initial={{ y: 80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.5 }}
						exit={{
							opacity: 0,
							y: 90,
							transition: {
								ease: 'easeInOut',
								delay: 0.8,
							},
						}}
					>
						<div className='relative flex flex-col items-center justify-center my-48'>
							<div className='flex flex-col items-center gap-12 text-4xl font-medium text-[#FBBF24]'>
								{navLinks.map((link, index) => (
									<motion.div
										key={index}
										className='hover:underline decoration-2'
										onClick={() => {
											setHamburgerOpen(false);
										}}
										initial={{ y: 80, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.8 - index * 0.1 }}
										exit={{
											opacity: 0,
											y: 90,
											transition: {
												ease: 'easeInOut',
												delay: 1 - index * 0.2,
											},
										}}
									>
										{link.name}
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<div className='flex flex-row justify-between text-[#FBBF24] !bg-transparent font-medium relative p-8'>
				<div
					className={`z-[100000] flex rounded-full min-w-[60px] min-h-[60px] md:hidden items-center justify-center ${
						hamburgerOpen && 'bg-white'
					}`}
				>
					<button onClick={() => setHamburgerOpen(!hamburgerOpen)}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 256 256'
							fill={hamburgerOpen ? '#000000' : '#fff'}
							width={36}
						>
							<path d='M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z' />
						</svg>
					</button>
				</div>

				<div className='max-w-[4rem]'>
					<img src={ecellWhite} alt='E-Cell Logo White' />
				</div>
				<div className='flex-row items-center hidden gap-6 md:flex'>
					{navLinks.map((link, index) => (
						<a href={link.href} key={index}>
							<div className='hover:underline decoration-2'>{link.name}</div>
						</a>
					))}
				</div>
			</div>
		</>
	);
}
