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
      type: 'EUDR Compliance Traceability Platform',
      overview: 'Developed EUDR (European Union Deforestation Regulation) compliance and rubber traceability platforms for major tyre manufacturers including Ascenso Tyres, JK Tyres, TVS Eurogrip Tyres, CEAT Tyres, PIX Tyres, and Ralson Tyres. Designed and implemented Angular-based applications that track the complete rubber supply chain from plantation to tyre production, delivering client-specific features, workflows, dashboards, and compliance solutions.',
      techStack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'REST APIs', 'SQL Server'],
      color: 'blue'
    },
    {
      name: 'TRST01 Chain Coffee MIS',
      type: 'Coffee Management Information System (MIS)',
      overview: 'Developed and maintained a Coffee Management Information System (MIS) for BCK Intermark Coffee, supporting both EUDR and Non-EUDR coffee supply chain operations. Built Angular-based web applications to manage coffee procurement, processing, inventory tracking, traceability, compliance reporting, and operational workflows. Implemented client-specific business processes, dashboards, and reporting solutions to improve visibility, efficiency, and regulatory compliance across the coffee value chain.',
      techStack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'REST APIs'],
      color: 'amber'
    },
    {
      name: 'TRST01 Geospatial Portal',
      type: 'GIS & Geospatial Intelligence Platform',
      overview: 'Developed an in-house GIS and Remote Sensing platform that enables users to analyze environmental and land-use data using indices such as NDVI, NDMI, NDWI, SAVI, and LULC. Implemented functionality to upload GeoJSON files, perform plot overlap analysis, and validate land parcels against EUDR compliance rules. The platform provides geospatial visualization, compliance assessment, and downloadable reports to support regulatory monitoring and decision-making.',
      techStack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'GIS APIs', 'MongoDB', 'Fast APIs'],
      color: 'emerald'
    },
    // {
    //   name: 'REC Tokenization Portal',
    //   type: 'Renewable Energy Certificate Platform',
    //   overview: 'Built a digital solution that facilitates tokenization and management of renewable energy certificates.',
    //   techStack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'REST APIs', 'SQL Server'],
    //   color: 'amber'
    // },
    {
      name: 'Movement Mortgage',
      type: 'Mortgage Management System',
      overview: 'Enterprise mortgage application platform supporting customer loan management and approval workflows.',
      techStack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
      color: 'purple'
    },
    {
      name: 'Bank of America',
      type: 'Banking Application',
      overview: 'Enterprise banking solution supporting customer account management and secure financial operations.',
      techStack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
      color: 'red'
    }
  ];

  constructor(private dialog: MatDialog) { }

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
