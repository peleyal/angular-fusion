import { Component, OnInit } from '@angular/core';

import { Project } from '../models/project.model';
import { Workflow } from '../models/workflow.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[];
  // TODO(peleyal): I should have 2 different components and use Input-Output
  // to communicate between them.
  selectedProject: Project
  selectedWorkflow: Workflow

  constructor(private projectsService : ProjectsService) {
  }

  ngOnInit() {
    this.projectsService.getProjects().subscribe(
      (data: Project[]) => this.projects = data);
  }

  onSelectProject(project: Project): void {
    this.selectedProject = project;
    this.selectedWorkflow = null;
  }

  onSelectWorkflow(workflow: Workflow): void {
    this.selectedWorkflow = workflow;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/