import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
