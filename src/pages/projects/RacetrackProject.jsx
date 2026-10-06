import ProjectPage from "../../components/ProjectPage";

export default function RacetrackProject() {
  return (
    <ProjectPage
      title="Racetrack Reinforcement Learning"
      subtitle="Comparing model-based and model-free control"
      bullets={[
        "Implemented a stochastic racetrack environment with position and velocity states, nine acceleration actions, probabilistic \
        action failure, and Bresenham-based collision detection.",
        "Compared Value Iteration, Q-Learning, and SARSA across three racetrack layouts using both nearest-position and full-restart \
        crash penalties.",
        "Found that Value Iteration produced the shortest and most stable policies, while SARSA generally behaved more conservatively\
         and Q-Learning was more sensitive to severe crash penalties."
      ]}
      technologies={[
        "Python",
        "Reinforcement Learning",
        "Value Iteration",
        "Q-Learning",
        "SARSA"
      ]}
    />
  );
}