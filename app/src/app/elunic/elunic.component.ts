import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elunic',
  templateUrl: './elunic.component.html',
  styleUrls: ['./elunic.component.scss']
})
export class ElunicComponent implements OnInit {
  constructor(private readonly router: Router) {  }

  microservicesInfo = [
    { 
      title: 'Asset & Configuration Management 💼:',
      data: `shopfloor.io creates a digital representation of all assets and staff within the production hierarchy and provides
      insight into all relevant data, processes and events.` 
    },
    {
      title: 'Asset Task & Issue Tracking 📝:',
      data: `The centralized task management for users and operators allows you to track overdue, open and completed tasks on
      machine, employee and team level.`
    },
    {
      title: 'Machine Learning & Predictive Maintenance 🤖:',
      data: `Machine learning algorithms can consume the collected data for forecasting, process support and process automation. For
      instance, necessary maintenance can be detected early by data-supported, predictive measures preventing downtime
      proactively.`
    },
    {
      title: 'Asset Identity & Access Management 🧑‍🤝‍🧑:',
      data: `QR code stickers on machines make accessing the right machine data a breeze. Scan the code with your tablet and get to
      the entity's dashboard in an instant. No hassle of typing IDs. No manual search effort. Right on the spot`
    },
    {
      title: 'Asset Condition Monitoring  🔎:',
      data: `Digitizing and connectingyour organization's critical assets improves scalability, efficiency, and utilization of your facilities. We support you in finding real opportunities and implementing solutions that seamlessly complement your existing IT.`
    },
  ]

  tabs = ['Elunic', 'Radency']

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onPdfClick() {
    const pdfUrl = "https://drive.google.com/file/d/1scLEkPPCaSn-dFoDI8GgXr6de7pN0t-n/view?usp=sharing";
    window.open(pdfUrl, '_blank');
  }
}
