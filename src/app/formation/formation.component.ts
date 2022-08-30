import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const menu = document.querySelector(".menu")
    const navLinks = document.querySelector(".nav-links")
    if(menu && navLinks){
    menu.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
    })
  }
  }
}
