import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { Workflow } from './models/workflow.model';

@Injectable()
export class WorkflowsService {

  constructor(private http: HttpClient) { }

  getWorkflows() : Observable<Workflow[]> {
    return this.http.get<Workflow[]>('assets/all-workflows.json');
  }

  getWorkflow(id: string) : Observable<Workflow> {
    return this.getWorkflows().map(workflows => {
      return workflows.find(w => w.id == id);
    });
  }
}