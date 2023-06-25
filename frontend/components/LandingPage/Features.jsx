import { useInView } from "framer-motion";
import { useRef } from "react";
import Feature from "./Feature";

const FEATURES = [
	{headline : "Expertise and Professionalism", description : " Our platform brings together a team of highly qualified mental health professionals dedicated to providing the best care."},
	{headline : "Seamless Connectivity", description : "We bridge the gap between doctors and clients, offering a seamless connection that simplifies the process of seeking mental health care."},
	{headline : "Tailored Treatment Plans", description : "We understand that each individual's mental health journey is unique. That's why we prioritize personalized treatment plans tailored to your specific needs. "},
	{headline : "Holistic Approach to Well Being", description : " We believe in a holistic approach to mental health, addressing the multiple dimensions of well-being."}
]


export default function ({ scrollAnchorId }) {

	const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
	
	const reff = useRef(null)
  const cardsInView = useInView(reff, { once: true });

	return (
		<section id={scrollAnchorId} className="feature-section" ref={ref}>
			<div className="container">
				<div className="row">
					<div
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
							transitionDelay : "1s"
						}}
					className="col-lg-5 col-md-10">
						<div className="section-title mb-60">
							<h2 className="mb-20">Why Choose Us</h2>
						</div>
					</div>

					<div className="col-lg-7" style={{delay : 1}} ref={reff}>
						<div className="row">
							{FEATURES.map((feature, index) => (
								<Feature
									key={index}
									headline={feature.headline}
									description={feature.description}
									icon={feature.icon}
									index={index}
									cardsInView={cardsInView}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}