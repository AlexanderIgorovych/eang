import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent implements OnInit {
  node = {
    name: 'Main menu',
    orientation: 'horizontal',
    data: {
      link: '/stub'
    },
    children: [
    {
      name: 'Card',
      data: {
        link: '/card',
        iconName: 'card'
      }
    },
    {
      name: 'Layout',
      data: {
        link: '/layout',
        iconName: 'layout'
      }
    },
    {
      name: 'Icons',
      data: {
        link: '/icon' ,
        iconName: 'x'
      },
      children: [
        {
          name: 'Special',
          data: {
            link: '/special',
            iconName: 'x'
          }
        }
      ]
    }
    ]
  }

  constructor() {}

  ngOnInit() {}

}
