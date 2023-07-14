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
		<div className='max-w-screen-md mx-auto !font-Poppins px-4 md:px-0'>
			<div className='my-8 text-white text-[2rem] lg:text-[3rem] font-semibold'>
				Initiatives
			</div>
			<div ref={scrollRef}>
				<div className='flex flex-row pb-16 mt-3 ml-2 !border-[#414141] space-y-14'>
					<motion.div
						className='w-1 text-transparent origin-top bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500'
						style={{ scaleY: scale }}
						ref={targeRef}
					>
						a
					</motion.div>
					<div className='w-1 -ml-1 text-transparent origin-top border-[#414141] border-[1px] bg-[#414141]'>
						a
					</div>
					<div className='flex flex-col gap-16'>
						{Initiatives.map((initiative, index) => (
							<TimelineEvent {...initiative} key={index} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Initiative;
