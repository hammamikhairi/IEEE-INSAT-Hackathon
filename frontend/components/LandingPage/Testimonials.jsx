import { useEffect } from "react";

import Testimonial from "./Testimonial";

const TESTIMONIALS=  [
  {
    quote : "I got so well after finding out about this.",
    name : "Khairi Hammami",
    title : "CTO"
  },
  {
    quote : "I got so well after finding out about this.",
    name : "Mahdi Said",
    title : "CEO"
  },
  {
    quote : "I got so well after finding out about this.",
    name : "Khlaf Hamza",
    title : "CEO"
  }
]


export default function Testimonials({  scrollAnchorId }) {


	useEffect(() => {
		import('tiny-slider').then(({tns}) => {
			tns({
				container: '.testimonial-active',
				autoplay: true,
				autoplayTimeout: 5000,
				autoplayButtonOutput: false,
				mouseDrag: true,
				gutter: 0,
				nav: false,
				navPosition: "bottom",
				controls: true,
				controlsText: [
					'<i class="lni lni-chevron-left"></i>',
					'<i class="lni lni-chevron-right"></i>',
				],
				items: 1,
			});
		});
	})

	return (
		<section id={scrollAnchorId} className="testimonial-section mt-100" >
			<div className="container"

			>
				<div className="row justify-content-center">
					<div className="col-xl-7 col-lg-9">
						<div className="testimonial-active-wrapper">

							<div className="section-title text-center">
								<h2 className="mb-20">What our customers say</h2>
							</div>

							<div className="testimonial-active">

								{TESTIMONIALS.map((testimonial, index) => (
									<Testimonial
										key={index}
										quote={testimonial.quote}
										name={testimonial.name}
										title={testimonial.title}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}