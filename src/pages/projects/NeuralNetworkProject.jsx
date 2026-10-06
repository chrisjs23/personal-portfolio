import ProjectPage from "../../components/ProjectPage";

export default function NeuralNetworkProject() {
  return (
    <ProjectPage
      title="Neural Networks and Autoencoder Pretraining"
      subtitle="Comparing linear, feedforward, and pretrained models"
      bullets={[
        "Implemented linear and logistic baselines, two-hidden-layer feedforward neural networks, and networks initialized \
        using autoencoder pretraining.",
        "Evaluated all three architectures across six classification and regression datasets using 5x2 cross-validation and \
        tuned learning rates, epochs, and hidden-layer sizes.",
        "Feedforward networks produced major gains on nonlinear classification tasks, while autoencoder pretraining performed \
        especially well on the noisy Forest Fires regression problem."
      ]}
      technologies={[
        "Python",
        "Neural Networks",
        "Backpropagation",
        "Autoencoders",
        "Classification",
        "Regression"
      ]}
    />
  );
}