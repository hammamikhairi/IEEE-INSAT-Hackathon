
// this page is built


export default function Feature({ headline, description, icon, index, cardsInView }) {
	return (
		<div
			style={{
				opacity: cardsInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				transitionDelay : "2s"
			}}

		className="col-lg-6 col-md-6">
			<div className="single-feature">
				<div className="feature-icon">
					{/* {icon && <Image
                        src={icon}
                        alt=""
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover"
                        }} />} */}
				</div>
				<div className="feature-content">
					<h4>{headline}</h4>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}