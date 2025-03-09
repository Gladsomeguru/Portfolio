import { Component } from '@angular/core';
import { SliderComponent } from "../directives/slider/slider.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  skillSet: any = [
    {
      category: 'Web Development',
      skills: 'HTML, CSS, PHP, JavaScript, Angular Js, React Js and Bootstrap'
    },
    {
      category: 'Programming Languages',
      skills: 'Java and C'
    },
    {
      category: 'Databases',
      skills: 'MySql, PostgreSql and Firebase'
    },
    {
      category: 'Design Tools',
      skills: 'Figma and Adobe Photoshop'
    },
    {
      category: 'Android',
      skills: 'Low-Code Android Development'
    },
  ]

  slides: any = [
    {
      assets: ['eye-can-image1.png', 'eye-can-image2.png'],
      logo: 'eyecan-logo.jpg',
      title: 'Eye Can',
      description: 'A voice-enabled exam application developed using Android for the visually challenged candidates to independently take exams without the need for a scribe. It utilizes speech-to-text and text-to-speech functions for user input and responses. Developed for a social cause with a team of 4 members, this project received recognition and an honor from the Honorable CM of Tamil Nadu in 2022. It holds a published patent with application number 202241035046.'
    },
    {
      assets: ['sidhdhars-image1.png', 'sidhdhars-image2.png'],
      logo: 'sidhdhars-logo.png',
      title: 'Sidhdhars.com',
      description: 'This project involves redesigning a website for a real-time client, focusing on locating living Siddhars and Jeeva Samadhis. It provides concise details, map links (if available), multilingual translation, search, and filters by location, star, and month. Users can explore all Siddhar locations, distinguish between living Siddhars and Jeeva Samadhis, and find the three nearest Siddhars based on their location. A custom content management system ensures real-time data updates.',
      link:'https://www.sidhdhars.com/',
    },
    {
      assets: ['food-guru-image1.png', 'food-guru-image2.png'],
      logo: 'food-guru-logo.png',
      title: 'Restaurant Site Mockup',
      description: 'A mock up website created by myself to showcase my design skills in modern web page development. It\'s a single-page responsive website with all the necessary sections for a restaurant website, featuring eye-catching visuals and engaging UX. It incorporates smooth animations, an intuitive navigation bar, and a dynamic menu section to enhance user engagement.',
      link:'https://gladsomeguru.github.io/Restaurant_Website/#home',
    },
  ]
}
