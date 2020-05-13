import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Workflow } from '../models/workflow.model';
import { WorkflowsService } from '../workflows.service';


@Component({
  selector: 'app-workflow-details',
  templateUrl: './workflow-details.component.html',
  styleUrls: ['./workflow-details.component.css']
})
export class WorkflowDetailsComponent implements OnInit {
  workflowId: string;
  workflow: Workflow;

  constructor(private route: ActivatedRoute,
              private workflowsService: WorkflowsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { this.workflowId = 
      params.get('id') });

    this.workflowsService.getWorkflow(this.workflowId).subscribe(
      (data : Workflow) => this.workflow = data);
  }
}