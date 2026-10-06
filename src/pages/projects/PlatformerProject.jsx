import ProjectPage from "../../components/ProjectPage";

export default function PlatformerProject() {
  return (
    <ProjectPage
      title="2-D Platformer Prototype"
      subtitle="Custom movement and gameplay systems in Godot"
      bullets={[
        "Developed a 2-D platformer prototype in Godot 4 using GDScript.",
        "Implemented custom character movement, physics, and collision behavior rather than relying solely on default movement logic.",
        "Structured player behavior around a state-based system to manage movement and gameplay transitions."
      ]}
      technologies={[
        "Godot 4",
        "GDScript",
        "Game Physics",
        "State Machines"
      ]}
    />
  );
}