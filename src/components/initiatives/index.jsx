import React from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import TimelineEvent from './event';

import { Initiatives } from '../../utils';

const Initiative = () => {
	const scrollRef = React.useRef();
	const targeRef = React.useRef();

	const { scrollYProgress } = useScroll({
		target: targeRef,
		offset: ['start end', 'end start'],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<div className='w-full h-full px-8 mx-auto sm:px-16 font-Poppins mb-[8rem]'>
			<div className='my-16 text-5xl font-semibold text-center text-white md:text-7xl'>
				Initiatives
			</div>
			<div ref={scrollRef}>
				<div className='flex flex-row-reverse lg:flex-row  justify-end lg:justify-center h-full gap-[4rem] xl:gap-[8rem] w-full'>
					<div className='flex-col justify-around hidden gap-24 lg:flex'>
						{Initiatives.map((initiative, index) => {
							if (index % 2 == 0) {
								return <TimelineEvent {...initiative} key={index} />;
							} else
								return (
									<img
										key={index}
										src={initiative.image}
										alt='abc'
										className='object-cover max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md rounded-2xl max-h-84 sm:max-h-96 xl:max-h-[20rem]'
									/>
								);
						})}
					</div>
					<div className='flex flex-col justify-around gap-24 lg:hidden'>
						{Initiatives.map((initiative, index) => (
							<TimelineEvent {...initiative} key={index} />
						))}
					</div>
					<div className='flex flex-row'>
						<motion.div
							className='z-[100] w-[10px] h-full text-transparent origin-top bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500'
							style={{ scaleY: scale }}
							ref={targeRef}
						/>
						<div className='relative -translate-x-[10px]  w-[10px] text-transparent  border-[#414141] border-[1px] bg-[#414141] h-full origin-top' />
						<div className='relative h-full -translate-x-[31px] flex flex-col z-[10000] justify-around'>
							{Array(5)
								.fill(0)
								.map((_, index) => (
									<div
										key={index}
										className='top-5 bg-white h-8 w-8 rounded-full border-[8px] border-[#010106] translate-y-10'
										title={''}
									/>
								))}
						</div>
					</div>

					<div className='flex-col justify-around hidden gap-24 lg:flex w-fit'>
						{Initiatives.map((initiative, index) => {
							if (index % 2 == 0) {
								return (
									<img
										key={index}
										src={initiative.image}
										alt='abc'
										className='object-cover max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md rounded-2xl max-h-84 sm:max-h-96 xl:max-h-[20rem]'
									/>
								);
							} else return <TimelineEvent {...initiative} key={index} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Initiative;
