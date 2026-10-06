import ProjectPage from "../../components/ProjectPage";

export default function DecisionTreeProject() {
  return (
    <ProjectPage
      title="Decision Tree Learning"
      subtitle="Classification, regression, and reduced-error pruning"
      bullets={[
        "Implemented univariate decision trees for both classification and regression using gain ratio and mean-squared error as \
        splitting criteria.",
        "Added reduced-error pruning using a held-out validation subset to remove unnecessary branches and reduce overfitting.",
        "Pruning substantially reduced average tree depth and lowered MSE across every regression dataset while maintaining similar\
         classification performance."
      ]}
      technologies={[
        "Python",
        "Decision Trees",
        "Gain Ratio",
        "Regression",
        "Reduced-Error Pruning",
        "Cross-Validation"
      ]}
    />
  );
}