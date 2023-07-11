import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentPage: "colleghi" | "home" | "login" | "ristoranti" | "" = "";
  statusMenu: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public changeMenu(): void{
    this.statusMenu = !this.statusMenu;
  }

  public clickedLink(link: string): void{
    let node: HTMLElement | null = document.getElementById(link);
    if(node){
      node?.classList.add("activeLink");
    }
  }

}
