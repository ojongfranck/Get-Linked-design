export const FAQ = [
    {
      question: "Can i work on a project, i started before the hackathon",
      answer:
        "yes.",
    },
    {
      question: "what happens if i need help during the hackathon",
      answer:
        "we won't help you",
    },
    {
      question: "what happens if i don't have an idea  for a  project ?",
      answer:
        "we will give you one",
    },
    {
      question: "can i join a team or do i have to come with one ?",
      answer:
        "If you don't have one, we will integrate you in a team",
    },
    {
      question:
        "what happens after the hackathon ends",
      answer:
        "we share the prices",
    },
    {
      question: "can i work on a project i stated before the hackathon ?",
      answer:
        "No you can't",
    },
  ].map((data, i) => ({ ...data, isDrop: i === 0 })) satisfies FAQTypes[];

  export type FAQTypes = {
    question: string;
    answer: string;
    isDrop: boolean;
  };

  export const CONTROL_KEYS = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];