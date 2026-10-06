import ProjectPage from "../../components/ProjectPage";

export default function KuramotoProject() {
  return (
    <ProjectPage
      title="Kuramoto Associative Memory"
      subtitle="Synchronization-based memory retrieval using coupled oscillators"
      bullets={[
        "Developed an associative-memory system using a network of 64 Kuramoto oscillators representing 8x8 binary image patterns.",
        "Used Hebbian coupling and fourth-order Runge-Kutta integration to study retrieval behavior across different coupling\
         strengths and randomized trials.",
        "Evaluated retrieval using pixel accuracy, overlap, and exact-pattern recovery to investigate how oscillator \
        synchronization can encode and reconstruct stored memories."
      ]}
      technologies={[
        "Python",
        "NumPy",
        "Dynamical Systems",
        "Kuramoto Model",
        "RK4",
        "Associative Memory"
      ]}
    />
  );
}