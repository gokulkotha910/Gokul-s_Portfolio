import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit, AfterViewInit {
  yearsExperience = 0;
  enterpriseModules = 0;
  featuresDelivered = 0;
  industryDomains = 0;
  
  hasAnimated = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.hasAnimated) {
        this.animateCounters();
        this.hasAnimated = true;
      }
    }, { threshold: 0.3 });
    
    observer.observe(this.el.nativeElement);
  }

  animateCounters() {
    this.animateValue('yearsExperience', 0, 4, 1500);
    this.animateValue('enterpriseModules', 0, 20, 2000);
    this.animateValue('featuresDelivered', 0, 100, 2500);
    this.animateValue('industryDomains', 0, 5, 1500);
  }

  animateValue(prop: 'yearsExperience' | 'enterpriseModules' | 'featuresDelivered' | 'industryDomains', start: number, end: number, duration: number) {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      this[prop] = Math.floor(easeProgress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
}
