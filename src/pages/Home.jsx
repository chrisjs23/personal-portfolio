import "./Home.css";

import profilePic from "../assets/images/office-concept.gif"

const profileDetails = [
    { label: "Focus", value: "AI/ML · Software Engineering" },
    { label: "School", value: "Johns Hopkins University" },
    { label: "Degree", value: "M.S. Computer Science · Artificial Intelligence" },
    { label: "Location", value: "Columbia, Maryland" }
];

const concepts = [
    "Object-Oriented Programming",
    "Data Structures & Algorithms",
    "Software Design",
    "Testing & Debugging",
    "Machine Learning",
    "Natural Language Processing",
    "Model Evaluation & Validation",
    "Computer Graphics"
];

const technologyGroups = [
    {
        name: "Languages",
        technologies: [
            "Python",
            "C",
            "C++",
            "C#",
            "Java",
            "SQL",
            "Bash"
        ]
    },
    {
        name: "ML / Data",
        technologies: [
            "NumPy",
            "pandas",
            "scikit-learn",
            "PyTorch",
            "Hugging Face",
            "matplotlib"
        ]
    },
    {
        name: "Development",
        technologies: [
            "React",
            "Git",
            "GitHub",
            "Linux",
            "MongoDB"
        ]
    },
    {
        name: "Graphics / Game Dev",
        technologies: [
            "SDL3",
            "OpenGL",
            "Godot",
            "Unity"
        ]
    }
];

export default function Home() {
    return (
        <div className="home-page">
            <div className="home-profile">
                <section className="home-panel portrait-panel">
                    <img 
                      className="portrait-image"
                      src={profilePic}
                      alt="Christopher J. Snelling"
                    />
                </section>

                <section className="home-panel profile-info-panel">
                    <div className="panel-heading">
                        <span>PROFILE</span>
                    </div>

                    <div className="profile-details">
                        {profileDetails.map((detail) => (
                            <div
                                className="profile-detail"
                                key={detail.label}
                            >
                                <span className="detail-label">
                                    {detail.label}
                                </span>

                                <span className="detail-value">
                                    {detail.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <section className="home-panel concepts-panel">
                <div className="panel-heading">
                    <span>SKILLS / CONCEPTS</span>
                </div>

                <div className="concept-grid">
                    {concepts.map((concept) => (
                        <div className="concept-item" key={concept}>
                            <span className="concept-marker">◆</span>
                            <span>{concept}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="home-panel technologies-panel">
                <div className="panel-heading">
                    <span>TECHNOLOGIES</span>
                </div>

                <div className="technology-groups">
                    {technologyGroups.map((group) => (
                        <div
                            className="technology-group"
                            key={group.name}
                        >
                            <h3>{group.name}</h3>

                            <div className="technology-badges">
                                {group.technologies.map((technology) => (
                                    <span
                                        className="technology-badge"
                                        key={technology}
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="current-quest">
                <div className="quest-title">
                    CURRENT QUEST
                </div>

                <div className="quest-content">
                    <strong>Computer Graphics</strong>
                    <span>
                        Building graphics applications with C++, SDL3,
                        and OpenGL while completing the final course of
                        my M.S. program.
                    </span>
                </div>
            </section>
        </div>
    );
}