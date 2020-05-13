import { Workflow } from './workflow.model'

export interface Project {
  id: string;
  workflows: Workflow[];
}