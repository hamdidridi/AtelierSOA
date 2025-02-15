import { Component, OnInit } from '@angular/core';
import { LogementService } from '../../services/logement.service';

@Component({
  selector: 'app-logement-list',
  templateUrl: './logement-list.component.html',
  styleUrls: ['./logement-list.component.css']
})
export class LogementListComponent implements OnInit {
  logements: any[] = [];

  constructor(private logementService: LogementService) {}

  ngOnInit(): void {
    this.logementService.getLogements().subscribe(data => {
      this.logements = data;
    });
  }
}
