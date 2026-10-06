import ProjectPage from "../../components/ProjectPage";

export default function BERTProject() {
  return (
    <ProjectPage
      title="BERT Robustness Under Domain Shift"
      subtitle="Evaluating sentiment classification across changing domains"
      bullets={[
        "Fine-tuned BERT for binary sentiment classification on IMDb reviews and evaluated its ability to generalize to \
        Amazon Reviews Polarity data.",
        "Compared full fine-tuning with layer freezing, stronger regularization, and synonym-replacement data augmentation to \
        study robustness and calibration under domain shift.",
        "Achieved 92.19% accuracy on IMDb and 91.69% on Amazon; layer freezing improved calibration in some configurations,\
         while augmentation did not improve cross-domain robustness."
      ]}
      technologies={[
        "Python",
        "PyTorch",
        "Hugging Face Transformers",
        "BERT",
        "NLP"
      ]}
    />
  );
}