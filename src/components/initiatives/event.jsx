import React from 'react';
import { motion, useScroll, useTransform, cubicBezier } from 'framer-motion';

const TimelineEvent = ({ date, title, description, image }) => {
	const childRef = React.useRef();

	const { scrollYProgress: eventScrollProgress } = useScroll({
		target: childRef,
		offset: ['start end', 'end start'],
	});
	const opacity = useTransform(
		eventScrollProgress,
		[0, 0.5, 1],
		[0.2, 1, 0.5],
		{
			ease: cubicBezier(0.8, 0, 0.2, 1),
		}
	);

	return (
		<motion.div
			className='relative flex flex-col-reverse items-start gap-16 lg:flex-row'
			ref={childRef}
			style={{ opacity }}
		>
			<img
				src={image}
				alt='abc'
				className='object-cover w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl max-h-84 sm:max-h-96 lg:hidden'
			/>

			<div className='max-w-md text-white min-w-fit'>
				<span className='text-[1rem] font-bold tracking-widest !text-gray-100 opacity-40'>
					{date}
				</span>
				<h3 className='mb-2 text-4xl font-semibold tracking-wide'>{title}</h3>
				<p className='text-lg sm:text-2xl'>{description}</p>
			</div>
		</motion.div>
	);
};

export default TimelineEvent;
