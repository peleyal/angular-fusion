import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from './models/project.model';

@Injectable()
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects() : Observable<Project[]> {
    return this.http.get<Project[]>('assets/all-projects.json');
  }
}