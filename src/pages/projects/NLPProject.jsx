import ProjectPage from "../../components/ProjectPage";

export default function NLPProject() {
  return (
    <ProjectPage
      title="ADHD Discourse Classification"
      subtitle="Traditional and contextual NLP methods"
      bullets={[
        "Built a binary text-classification pipeline using 5,439 Reddit posts labeled as ADHD or control, comparing TF-IDF \
        features against contextual MiniLM embeddings.",
        "Used LinearSVC for both representations and added a keyword-masking experiment to measure how strongly each approach \
        relied on explicit ADHD terminology.",
        "Achieved 0.990 test macro-F1 with MiniLM embeddings, which retained 0.982 macro-F1 after keyword masking compared \
        with 0.967 for the TF-IDF model."
      ]}
      technologies={[
        "Python",
        "scikit-learn",
        "Sentence Transformers",
        "TF-IDF",
        "MiniLM",
        "LinearSVC"
      ]}
    />
  );
}