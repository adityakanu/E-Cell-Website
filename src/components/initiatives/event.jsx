import React from 'react';
import { motion, useScroll, useTransform, cubicBezier } from 'framer-motion';

const TimelineEvent = ({ date, title, description }) => {
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
		<div className='relative' ref={childRef}>
			<div
				className='absolute top-5 -left-[0.75rem] bg-white h-[20px] w-[20px] rounded-full border-[4px] border-[#010106]'
				title={title}
			></div>

			<motion.div className='pl-10 text-white' style={{ opacity }}>
				<span className='text-xs font-bold tracking-widest !text-gray-100 opacity-40'>
					{date}
				</span>
				<h3 className='mb-2 text-2xl font-semibold tracking-wide'>{title}</h3>
				<p className='text-md'>{description}</p>
			</motion.div>
		</div>
	);
};

export default TimelineEvent;
