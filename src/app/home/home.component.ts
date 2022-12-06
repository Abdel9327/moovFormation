import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home2.component.css']
})
export class HomeComponent implements OnInit {

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
