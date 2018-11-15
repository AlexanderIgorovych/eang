import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent implements OnInit {
  node = {
    name: 'Main menu',
    icon: 'grid',
    children: [
    {
      name: 'Card',
      icon: 'bell',
      data: {
        link: '/card',
        iconName: 'card'
      }
    },
    {
      name: 'Layout',
      icon: 'bell-off',
      data: {
        link: '/layout',
        iconName: 'layout'
      }
    },
    {
      name: 'Icons',
      icon: 'link-2',
      data: {
        link: '/icon' ,
        iconName: 'x'
      },
      children: [
        {
          name: 'Special',
          icon: 'arrow-down',
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