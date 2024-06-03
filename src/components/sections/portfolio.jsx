import React, { useState } from 'react';
import { RiArrowRightUpLine } from '@remixicon/react';
import Title from '../ui/title';
import { projectsData } from '../../utlits/fackData/projectsData';

const animations = ['slideIn', 'fadeIn', 'scaleUp'];

const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

const Portfolio = () => {
    const [category, setCategory] = useState('All');
    const [animationClass, setAnimationClass] = useState('');

    const handleCategoryClick = (item) => {
        setCategory(item);
        const randomAnimation = getRandomAnimation();
        setAnimationClass(randomAnimation);
    };

    // ------ filter unique category
    const filteredCategory = ["All"];
    projectsData.forEach(({ category }) => {
        if (!filteredCategory.includes(category)) {
            filteredCategory.push(category);
        }
    });
    // ------ filter unique category

    const filteredProjects = category === 'All' ? projectsData : projectsData.filter(project => project.category === category);

    return (
        <section id="portfolio" className="projects-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>Works</p>
                            <h2>Portfolio</h2>
                        </Title>
                    </div>
                </div>
                <ul className="project-filter filter-btns-one justify-content-left pb-15 wow fadeInUp delay-0-2s">
                    {filteredCategory.map((item, id) => (
                        <li key={id} onClick={() => handleCategoryClick(item)} className={item === category ? "current" : ""}>
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="row project-masonry-active">
                    {filteredProjects.map(({ category, id, src, title, url }) => (
                        <Card key={id} category={category} title={title} src={src} url={url} animationClass={animationClass} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

const Card = ({ category, title, src, url, animationClass }) => {
    return (
        <div className={`col-lg-4 col-md-6 item branding ${animationClass}`}>
            <div className="project-item style-two wow fadeInUp delay-0-2s">
                <div className="project-image">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={src} alt="Project" />
                    </a>
                    <div className="details-btn work-popup">
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            <i><RiArrowRightUpLine /></i>
                        </a>
                    </div>
                </div>
                <div className="project-content">
                    <span className="sub-title">{category}</span>
                    <h3><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h3>
                </div>
            </div>
        </div>
    );
};
