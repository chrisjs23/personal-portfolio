import ProjectPage from "../../components/ProjectPage";

export default function ClueLessProject() {
  return (
    <ProjectPage
      title="Clue-Less Multiplayer Board Game"
      subtitle="Networked multiplayer game development in Godot"
      bullets={[
        "Developed a networked multiplayer board game inspired by Clue using Godot 4 and C#.",
        "Implemented gameplay systems for multiplayer interaction and synchronized game state between connected players.",
        "Collaborated as part of a five-person development team to integrate gameplay, networking, interface, and game-state systems."
      ]}
      technologies={[
        "Godot 4",
        "C#",
        "Multiplayer Networking",
        "Game Development"
      ]}
    />
  );
}