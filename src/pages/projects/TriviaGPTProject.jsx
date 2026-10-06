import ProjectPage from "../../components/ProjectPage";

export default function TriviaGPTProject() {
  return (
    <ProjectPage
      title="TRIVIAGPT"
      subtitle="AI-generated trivia game with persistent backend services"
      bullets={[
        "Developed a full-stack trivia game using Java and libGDX with dynamically generated trivia questions provided\
         through the OpenAI API.",
        "Integrated a REST-based backend with MongoDB for persistent application data and game services.",
        "Collaborated in a six-person development team to design and integrate the game client, AI-generated content, \
        backend services, and data persistence."
      ]}
      technologies={[
        "Java",
        "libGDX",
        "OpenAI API",
        "MongoDB",
        "REST APIs"
      ]}
    />
  );
}