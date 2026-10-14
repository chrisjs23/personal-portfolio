import ProjectPage from "../../components/ProjectPage";

import triviagpt1 from '../../assets/images/triviagpt1.png'
import triviagpt2 from '../../assets/images/triviagpt2.png'

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
      images={[
        {
          src: triviagpt1,
          alt: "TriviaGPT home screen"
        },
        {
          src: triviagpt2,
          alt: "Example question and answer screen from gameplay"
        }
      ]}
    />
  );
}