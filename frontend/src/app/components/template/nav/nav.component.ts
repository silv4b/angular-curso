import { Component, OnInit } from '@angular/core';

// selector == tag que vai ser usada no componente que foi "decorado", nesse caso o NavComponent
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
