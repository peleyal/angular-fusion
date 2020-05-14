export interface Workflow {
  id: string;
  steps: Step[];
}

export interface Step {
  name: string;
  stepType: string;
}