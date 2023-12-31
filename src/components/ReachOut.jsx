import ECell from '../assets/Logo.png';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import Linkedin from '../assets/linkedin.svg';
import Twiter from '../assets/twitter.svg';
export default function ReachOut() {
	return (
		<section className='py-8 text-gray-600 bg-gray-900' id='reach-out'>
			<div className='flex flex-col max-w-full gap-8 p-6 mx-auto md:flex-row min-h-max sm:p-16 '>
				<div className='relative flex items-end justify-center p-0 overflow-hidden bg-gray-300 rounded-lg lg:w-2/3 md:w-1/2 min-h-[28rem] '>
					<iframe
						width='100%'
						height='100%'
						className='absolute insert-0'
						title='map'
						allowFullScreen=''
						src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11478.237253748302!2d91.42539092431079!3d23.841928747701942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753ed686722f717%3A0x18d822d15feb14af!2sE-CELL%2C%20NIT%20Agartala!5e0!3m2!1sen!2sin!4v1691181754822!5m2!1sen!2sin'
					></iframe>
					<div className='relative flex flex-col gap-4 p-2 px-6 mx-4 bg-gray-900 rounded-lg shadow-md md:flex-row sm:py-6 bottom-10 sm:mx-0'>
						<div className=''>
							<h2 className='text-[14px] sm:text-[1rem] font-semibold tracking-wide text-gray-300 underline-4 title-font'>
								ADDRESS
							</h2>
							<p className='text-gray-300 text-[12px] sm:text-[0.875rem]'>
								E-CELL, RIC Center, Computer Science Department, NIT, Agartala,
								Tripura 799046
							</p>
						</div>
						<div className='flex flex-col gap-4 lg:w-1/2'>
							<div>
								<h2 className='text-[14px] sm:text-[1rem] font-semibold tracking-widest text-gray-300'>
									E-MAIL
								</h2>
								<a href='mailto:ecellnita@gmail.com'>
									<p className='text-indigo-500 text-[12px] sm:text-[0.875rem]'>
										ecellnita@gmail.com
									</p>
								</a>
							</div>
							<div>
								<h2 className='text-[14px] sm:text-md font-semibold tracking-widest text-gray-300'>
									PHONE
								</h2>
								<p className='text-gray-300 text-[12px] sm:text-md'>
									+91 88809 89098
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col bg-gray-900 lg:w-1/3 md:w-1/2'>
					<h2 className='mt-6 mb-1 text-lg font-medium text-center text-gray-300 underline title-font sm:mt-0'>
						Mail Us
					</h2>
					<div className='relative mb-4'>
						<label
							htmlFor='name'
							className='leading-7 text-gray-300 underline text-md'
						>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							placeholder='Enter your name'
							className='w-full px-3 py-1 text-base leading-8 text-gray-900 placeholder-gray-900 transition-colors duration-200 ease-in-out bg-gray-300 border border-gray-300 rounded-md outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
						/>
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='email'
							className='leading-7 text-gray-300 underline text-md'
						>
							E-mail
						</label>
						<input
							type='text'
							id='email'
							name='email'
							placeholder='Enter e-mail address'
							className='w-full px-3 py-1 text-base leading-8 text-gray-900 placeholder-gray-900 transition-colors duration-200 ease-in-out bg-gray-300 border border-gray-300 rounded-md outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 '
						/>
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='message'
							className='leading-7 text-gray-300 underline text-md'
						>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							placeholder='Enter your message'
							className='w-full h-32 px-3 py-1 text-base leading-6 text-gray-900 placeholder-gray-900 transition-colors duration-200 ease-in-out bg-gray-300 border border-gray-300 rounded-md outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
						></textarea>
					</div>
					<button className='max-w-[12rem] w-full mx-auto px-6 py-2 text-lg text-gray-300 bg-indigo-500 mb-5 rounded-full focus:outline-none hover:bg-indigo-600 font-medium'>
						Submit
					</button>

					<span className='text-lg text-center text-gray-300 underline'>
						Reach Us At
					</span>
					<div className='flex justify-center gap-4 py-4 item-center socialMedia'>
						<a
							href='https://www.facebook.com/ecellnita/'
							className='transition duration-500 transform hover:scale-125'
							target='_blank'
							rel='noreferrer'
						>
							<img src={Facebook} alt='' />
						</a>
						<a
							href='https://www.instagram.com/ecellnita/'
							className='transition duration-200 transform hover:scale-125 '
							target='_blank'
							rel='noreferrer'
						>
							<img src={Instagram} alt='' />
						</a>
						<a
							href='https://www.linkedin.com/company/ecellnita/'
							className='transition duration-500 transform hover:scale-125 '
							target='_blank'
							rel='noreferrer'
						>
							<img src={Linkedin} alt='' />
						</a>
						<a
							href='https://twitter.com/ecellnita'
							className='transition duration-500 transform hover:scale-125 '
							target='_blank'
							rel='noreferrer'
						>
							<img src={Twiter} alt='' />
						</a>
					</div>

					<img src={ECell} className='max-w-[7rem] mx-auto' />
				</div>
			</div>
		</section>
	);
}
