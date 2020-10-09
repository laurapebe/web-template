import { Component, OnInit } from '@angular/core';
import { FrameworkConfigService } from '../services/framework-config.service';

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  configService: FrameworkConfigService;
  constructor(private frameworkConfigService: FrameworkConfigService) { 
    this.configService = frameworkConfigService
  }

  ngOnInit(): void {
  }

}
