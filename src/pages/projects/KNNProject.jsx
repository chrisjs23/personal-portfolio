import ProjectPage from "../../components/ProjectPage";

export default function KNNProject() {
  return (
    <ProjectPage
      title="K-Nearest Neighbors and Edited NN"
      subtitle="Nonparametric classification and regression"
      bullets={[
        "Implemented K-Nearest Neighbors and Edited Nearest Neighbor for classification and regression across six UCI datasets.",
        "Built support for Minkowski distance, Value Difference Metric categorical distances, Gaussian kernel weighting, normalization,\
         and task-specific preprocessing.",
        "Used a 5x2 cross-validation design for hyperparameter selection; classification accuracy exceeded 90% across all three \
        classification datasets while editing substantially reduced reference-set size with minimal performance loss."
      ]}
      technologies={[
        "Python",
        "pandas",
        "NumPy",
        "KNN",
        "Edited Nearest Neighbor",
        "Cross-Validation"
      ]}
    />
  );
}