import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function TwoColumnWithImage({title, description,img, imagePosition, scrollAnchorId }) {

	const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


	return (
    <section id={scrollAnchorId} className="cta-section" ref={ref}>
			<div className="container">
				<div
					style={{
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
						transitionDelay : "2s"
					}}
					className="row">
					{ (imagePosition === "left") && (
						<div className="col-lg-6 order-last order-lg-first">
							<div className="left-image cta-image ">
								<Image
                                    src={img}
                                    height={400}
                                    width={600}
                                    alt=""
                                    sizes="100vw"
                                    style={{
                                        width: "100%",
                                        height: "auto"
                                    }} />
							</div>
						</div>
					)}
					<div className="col-lg-6">
						<div className="cta-content-wrapper">
							<div className="section-title">
								<h2 className="mb-20">{title}</h2>
								<div/>{description}</div>
								{
									(imagePosition === "right") &&
									<a href={"die"} className="main-btn btn-hover border-btn mt-30">Schedule a Meeting</a>
								}
						</div>
					</div>
					{ (imagePosition === "right") && (
						<div className="col-lg-6">
							<div className="right-image cta-image text-lg-end">
								<Image
                                    src={img}
                                    height={400}
                                    width={600}
                                    alt=""
                                    sizes="100vw"
                                    style={{
                                        width: "100%",
                                        height: "auto"
                                    }} />
							</div>
						</div>
					)}
				</div>
			</div>
		</section >
    );
}