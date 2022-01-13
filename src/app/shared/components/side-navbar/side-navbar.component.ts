import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  @ViewChild("drawer") drawer: MatDrawer;

  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  expandAccount = () => {

  }
}
