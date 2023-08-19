import React from 'react';
import { motion } from 'framer-motion';
import HomeVideo from '../../public/home.mp4';
import useWindowSize from '../hooks/useWindowSize';

const Home = () => {
	const size = useWindowSize();
	console.log(size);
	let canvas = React.useRef(null);
	React.useEffect(() => {
		let renderingElement = canvas.current;
		let drawingElement = renderingElement.cloneNode();
		let drawingCtx = drawingElement.getContext('2d');
		let renderingCtx = renderingElement.getContext('2d');
		let lastX;
		let lastY;
		let moving = false;

		renderingCtx.globalCompositeOperation = 'source-over';
		renderingCtx.fillStyle = '#000000';
		renderingCtx.fillRect(0, 0, size.width, size.height);

		renderingElement.addEventListener('mouseover', (ev) => {
			moving = true;
			lastX = ev.pageX - renderingElement.offsetLeft;
			lastY = ev.pageY - renderingElement.offsetTop;
		});

		renderingElement.addEventListener('click', (ev) => {
			moving = true;
			lastX = ev.pageX - renderingElement.offsetLeft;
			lastY = ev.pageY - renderingElement.offsetTop;
		});

		renderingElement.addEventListener('mouseup', (ev) => {
			moving = false;
			lastX = ev.pageX - renderingElement.offsetLeft;
			lastY = ev.pageY - renderingElement.offsetTop;
		});

		renderingElement.addEventListener('mousemove', (ev) => {
			if (moving) {
				drawingCtx.globalCompositeOperation = 'source-over';
				renderingCtx.globalCompositeOperation = 'destination-out';
				let currentX = ev.pageX - renderingElement.offsetLeft;
				let currentY = ev.pageY - renderingElement.offsetTop;
				drawingCtx.lineJoin = 'round';
				drawingCtx.moveTo(lastX, lastY);
				drawingCtx.lineTo(currentX, currentY);
				drawingCtx.closePath();
				drawingCtx.lineWidth = 350;
				drawingCtx.stroke();
				lastX = currentX;
				lastY = currentY;
				renderingCtx.drawImage(drawingElement, 0, 0);
			}
		});
	}, []);

	const container = {
		initial: { y: 800 },
		animate: {
			y: 0,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};
	const item = {
		initial: { y: 800 },
		animate: {
			y: 0,
			transition: {
				duration: 1,
				ease: [0.6, 0.05, -0.01, 0.9],
				delay: 1,
			},
		},
	};

	return (
		<div id='home' className='relative w-full h-screen bg-black'>
			<div className='object-cover w-full h-full'>
				<video
					height='100%'
					width='100%'
					loop
					muted
					autoPlay={true}
					src={HomeVideo}
					className='object-cover w-full h-full'
				/>
			</div>
			<canvas
				className='absolute top-0 left-0 block h-full'
				ref={canvas}
				width={size.width}
				height={size.height}
			></canvas>
			<motion.div
				className='absolute top-0 flex flex-col items-center justify-center w-full h-full gap-8 px-24 pointer-events-none font-etna'
				variants={container}
				initial='initial'
				animate='animate'
			>
				<motion.span
					className='block text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6.5rem] 2xl:text-[8rem] font-black text-white text-center tracking-wide'
					variants={item}
				>
					ENTREPRENEURSHIP CELL
				</motion.span>
				<motion.span
					className='block text-[1.5rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4rem] 2xl:text-[5rem] font-black text-white leading-[0.76] tracking-wide'
					variants={item}
				>
					NIT AGARTALA
				</motion.span>
			</motion.div>
		</div>
	);
};

export default Home;
