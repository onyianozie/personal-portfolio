import React from 'react'
import { RiGlobalFill, RiQuillPenLine, RiPantoneFill } from '@remixicon/react'
import Title from '../ui/title'
import ZoomIn from '../animations/zoomIn'

const servicesList = [
    {
        id: 1,
        icon: <RiGlobalFill size={65} />,
        service_name: "Website Development",
        service_description: "Building custom, responsive websites that empower clients to easily manage and scale their online presence. Ensuring a secure and accessible website while complying to WCAG."
    },
    {
        id: 2,
        icon: <RiPantoneFill size={65} />,
        service_name: "Figma to Weblfow Development",
        service_description: "Ethically coding you figma or Adobe XD design files into clean rersposnive, secure website while adhering and complaning to WCAG ADODA accessibility standards."
    },
    {
        id: 3,
        icon: <RiQuillPenLine size={65} />,
        service_name: "Web Design + UI/UX Design",
        service_description: "Crafting engaging and intuitive web designs that prioritize user experience, I blend aesthetics with functionality to create seamless digital environments. "
    },
    // {
    //     id: 4,
    //     icon: <RiPantoneFill size={65} />,
    //     service_name: "Digital Transformation + Marketing",
    //     service_description: "I harness the latest technologies and strategies to elevate your brand's digital presence and drive measurable growth. By integrating innovative marketing solutions, I help businesses adapt, thrive, and lead in the evolving digital landscape."
    // },

]
const Services = () => {
    return (
        <section id="services" className="services-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>Expertise</p>
                            <h2>Areas of Specialization</h2>
                        </Title>
                    </div>
                </div>
                <div className="row">
                    {
                        servicesList.map(({ icon, id, service_description, service_name }) => {
                            return (
                                <div key={id} className="col-lg-4 col-md-6">
                                    <ZoomIn id={id}>
                                        <div className="service-item">
                                            {icon}
                                            <h4>{service_name}</h4>
                                            <p>{service_description}</p>
                                        </div>
                                    </ZoomIn>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services