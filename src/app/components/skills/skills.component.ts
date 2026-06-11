import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Angular Ecosystem',
      icon: 'cube',
      color: 'red',
      skills: ['Angular 16', 'Angular Material', 'RxJS', 'NgRx', 'TypeScript']
    },
    {
      title: 'Frontend Fundamentals',
      icon: 'code',
      color: 'blue',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Backend Integration',
      icon: 'server',
      color: 'emerald',
      skills: ['REST APIs', 'FastAPI', 'Node.js']
    },
    {
      title: 'Databases',
      icon: 'database',
      color: 'orange',
      skills: ['SQL Server', 'MongoDB']
    },
    {
      title: 'Tools & DevOps',
      icon: 'cog',
      color: 'slate',
      skills: ['GitHub', 'Postman', 'SSMS', 'Visual Studio', 'Power BI']
    }
  ];
}
