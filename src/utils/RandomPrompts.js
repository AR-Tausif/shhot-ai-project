import { surpriseMePrompts } from "../constant/SurpriseMePrompts";

export const RandomPromptsGenerator = () => {
  const promptsGenarate = Math.floor(Math.random() * surpriseMePrompts);
  return surpriseMePrompts[promptsGenarate];
};
