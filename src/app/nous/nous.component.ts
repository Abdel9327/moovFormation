import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nous',
  templateUrl: './nous.component.html',
  styleUrls: ['./nous.component.css']
})
export class NousComponent implements OnInit {

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
