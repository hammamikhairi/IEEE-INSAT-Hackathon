
import { motion } from "framer-motion";
import Image from "next/image";
import header from '../../public/images/header.svg';

export default function Hero({  image, scrollAnchorId }) {
	return (
        <section id={scrollAnchorId} className="hero-section">
			<div className="container">
				<div className="row align-items-center">
					<motion.div
					initial={{
						x:   '-10vw',
						y:   0,
						opacity: 0
					}}
					animate={{
						x:0,
						y:0,
						opacity: 1
					}}
					transition={{type:'spring', duration:1.5}}
					className="col-xl-6 col-lg-6 col-md-10">
						<div className="hero-content">
							<h1>Welcome to PEACE</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias earum pariatur sint a nam, fuga deserunt ducimus maiores itaque laborum aspernatur minima rem nobis est. Beatae libero illum eligendi doloremque!</p>

							<a href="/chat" className="main-btn btn-hover">Chat</a>
						</div>
					</motion.div>
					{image &&
						<motion.div
						initial={{
							x:   '10vw',
							y:   0,
							opacity: 0
						}}
						animate={{
							x:0,
							y:0,
							opacity: 1
						}}
						transition={{type:'spring', duration:1.5}}
						className="col-xxl-6 col-xl-6 col-lg-6">
							<div className="hero-image text-center text-lg-end">
								<Image
									src={header}
									height={400}
									width={400}
									alt=""
									sizes="100vw"
									style={{
											width: "100%",
											height: "auto"
									}} />
							</div>
						</motion.div>
					}
				</div>
			</div>
		</section>
    );
}