import './styles/experience.css';


function ExperienceImage(){
    return (
        <div className="experience-container1">
            <img src={require('./assets/FullResume.png')} alt="Experience" className="experience-image" />
        </div>
    );
}

function ScrollIndicator(){
    return (
        <div className="scroll-indicator">
            <div className="arrow1"></div>
        </div>
    );
}

function ExperienceRow({ imageSrc, imageAlt, title, subtitle, children, imageOnLeft }){
    return (
        <div className="experience-row">
            <div className={`experience-row-image ${imageOnLeft ? 'left' : 'right'}`}>
                <img src={imageSrc} alt={imageAlt} />
            </div>
            <div className={`experience-row-text ${imageOnLeft ? 'right' : 'left'}`}>
                {title && <h3 className="experience-row-title">{title}</h3>}
                {subtitle && <div className="experience-row-subtitle">{subtitle}</div>}
                <div className="experience-row-body">{children}</div>
            </div>
        </div>
    );
}

export default function Experience(){
    return (
        <div className="experience-full-page">
            <ExperienceImage />
            <ScrollIndicator />
            <div className="experience-container2">
                <div className="experience-content">
                    <div className="title">Experience</div>
                    <ExperienceRow
                        imageSrc={require('./assets/FullResume.png')}
                        imageAlt="UTMB Research"
                        title="Data Science & Bioinformatics Research Intern"
                        subtitle={<><span className="company">UT Medical Branch</span> • <span className="location">Galveston, TX</span> • <span className="date">Jun 2025 - Present</span></>}
                        imageOnLeft={true}
                    >
                        <ul className="experience-details">
                            <li>Led development of analytical pipelines and dashboards.</li>
                            <li>Collaborated across teams to deliver data products on schedule.</li>
                            <li>Automated QA workflows to reduce defects.</li>
                        </ul>
                    </ExperienceRow>

                    <ExperienceRow
                        imageSrc={require('./assets/FullResume.png')}
                        imageAlt="TA"
                        title="Teachers' Assistant"
                        subtitle={<><span className="company">UTRGV Computer Science Department</span> • <span className="location">Edinburg, TX</span> • <span className="date">Jan 2025 - May 2025</span></>}
                        imageOnLeft={false}
                    >
                        <ul className="experience-details">
                            <li>Supported instruction and graded programming assignments.</li>
                            <li>Held office hours and mentored students on coursework.</li>
                            <li>Improved course materials and examples.</li>
                        </ul>
                    </ExperienceRow>

                    <ExperienceRow
                        imageSrc={require('./assets/FullResume.png')}
                        imageAlt="Reybotics"
                        title="Reybotics Instructor Assistant"
                        subtitle={<><span className="company">Reybotics</span> • <span className="location">Brownsville, TX</span> • <span className="date">Jan 2023 - Jun 2023</span></>}
                        imageOnLeft={true}
                    >
                        <ul className="experience-details">
                            <li>Assisted in robotics workshops and curriculum delivery.</li>
                            <li>Maintained lab equipment and assisted with demos.</li>
                            <li>Encouraged STEM engagement among students.</li>
                        </ul>
                    </ExperienceRow>
                </div>
            </div>
        </div>
    );
}
