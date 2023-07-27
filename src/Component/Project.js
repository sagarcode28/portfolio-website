import { Projectdata } from "../Data/Project-data";

export default function project() {
    return (
        <>
            {Projectdata.map(project => (
                <div className="project">
                    <div className="head">
                        <h4>{project.name}</h4>
                        <div className="skill-used">
                            <ul>
                                {project.skillused.map(skill => (
                                    <li>{skill.skill}</li>
                                ))}
                            </ul>
                        </div>
                        <p>{project.content}</p>
                    </div>

                    <div className="links">
                        <a href={project.src}>View Source</a>
                    </div>

                </div>
            ))}
        </>
    );
}