export default function Hero() {
	return (
		<section className='h-[700px]'>
			<section className='relative'>
				<div className='text-[64px] absolute'>💡</div>
				<div className='text-[64px] absolute'>🎨</div>
				<div className='text-[64px] absolute'>💻</div>
				<div className='text-[64px] absolute top-[-20px]'>🧩</div>
				<div className='text-[64px] absolute'>🤖</div>
				<div className='text-[64px] absolute'>💭</div>
				<div className='text-[64px] absolute'>🎶</div>
				<div className='text-[64px] absolute'>✍🏼</div>
				<div className='text-[64px] absolute'>🚀</div>
				<div className='text-[64px] absolute'>📽</div>
				<div className='text-[64px] absolute'>🕹️</div>
			</section>
			<div className='relative'>
				<h1 className='z-10 flex items-baseline justify-center text-center text-[48px] font-extrabold flex-shrink-0'>
					kre
					<span>
						{/* Mobile Nasi Lemak */}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='42'
							height='35'
							viewBox='0 0 42 35'
							fill='none'
						>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M18.6375 34.488C19.7028 35.0917 20.8808 35.1319 21.8932 34.7636C22.389 34.7048 22.8871 34.5477 23.3627 34.278L33.4987 28.5338L19.2866 20.4929L19.1362 20.5778L18.9861 20.3229L6.63369 13.3342L1.04326 19.1692C-0.653883 20.9404 -0.223826 23.799 1.92229 25.0153L18.6375 34.488ZM10.2412 9.56891L18.0605 1.40764C18.2241 1.23699 18.3963 1.08583 18.5753 0.953519C20.0255 -0.286903 22.3807 -0.429267 23.9396 1.19771L30.6846 8.23797L19.2866 14.6865L10.2412 9.56891ZM34.2921 12.0029L24.4178 17.5897L38.4535 25.531L38.281 25.8236L40.0778 24.8053C42.224 23.5891 42.6537 20.7305 40.9569 18.9593L34.2921 12.0029Z'
								fill='#E2C196'
							/>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M31.4588 8.65869L19.3948 15.441L9.88232 10.0935L18.2205 1.4455C18.3896 1.27026 18.5675 1.11503 18.7525 0.979168C20.2511 -0.29462 22.6851 -0.440814 24.2961 1.22992L31.4588 8.65869Z'
								fill='#69BB44'
							/>
						</svg>
					</span>
					te
				</h1>
				<p className='text-[48px] font-extrabold'>= create</p>
				<div className='absolute left-[-70px] top-5 bg-gradient-to-r from-[#E2C196B2] to-[#69BB44B2] rounded-[431px] blur-[75px] mix-blend-screen opacity-70 h-[99px] w-[431px]'></div>
			</div>
		</section>
	);
}
