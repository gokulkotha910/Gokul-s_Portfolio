import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'TRST01 Chain Mees',
      type: 'Enterprise Client Management Platform',
      overview: 'Developed and maintained a centralized Angular platform serving five different client websites using a single codebase architecture.',
      techStack: ['Angular', 'TypeScript', 'REST APIs', 'MongoDB', 'SQL Server'],
      color: 'blue'
    },
    {
      name: 'TRST01 Remote Sensing Portal',
      type: 'GIS & Geospatial Intelligence Platform',
      overview: 'Developed a web-based platform that provides geospatial intelligence and environmental monitoring capabilities.',
      techStack: ['Angular', 'TypeScript', 'GIS APIs', 'MongoDB', 'REST APIs'],
      color: 'emerald'
    },
    {
      name: 'REC Tokenization Portal',
      type: 'Renewable Energy Certificate Platform',
      overview: 'Built a digital solution that facilitates tokenization and management of renewable energy certificates.',
      techStack: ['Angular', 'TypeScript', 'REST APIs', 'SQL Server'],
      color: 'amber'
    },
    {
      name: 'Movement Mortgage',
      type: 'Mortgage Management System',
      overview: 'Enterprise mortgage application platform supporting customer loan management and approval workflows.',
      techStack: ['Angular', 'RxJS', 'REST APIs', 'Bootstrap'],
      color: 'purple'
    },
    {
      name: 'Bank of America',
      type: 'Banking Application',
      overview: 'Enterprise banking solution supporting customer account management and secure financial operations.',
      techStack: ['Angular', 'TypeScript', 'REST APIs', 'Bootstrap'],
      color: 'red'
    }
  ];

  constructor(private dialog: MatDialog) {}

  openProjectModal(project: any) {
    this.dialog.open(ProjectModalComponent, {
      data: project,
      width: '90%',
      maxWidth: '800px',
      panelClass: 'glass-modal-panel',
      backdropClass: 'blur-backdrop'
    });
  }
}
