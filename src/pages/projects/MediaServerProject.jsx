import ProjectPage from "../../components/ProjectPage";

export default function MediaServerProject() {
  return (
    <ProjectPage
      title="Personal Media Server"
      subtitle="Automated home media ingestion and streaming"
      bullets={[
        "Built a Raspberry Pi-based personal media server using Jellyfin to organize and stream a local media library.",
        "Automated disc-ripping and media-ingestion workflows using MakeMKV, Linux utilities, and Bash scripting.",
        "Developed an automated workflow for organizing encoded H.264 media into a consistent library structure for \
        playback through Jellyfin."
      ]}
      technologies={[
        "Linux",
        "Raspberry Pi",
        "Jellyfin",
        "MakeMKV",
        "Bash"
      ]}
    />
  );
}