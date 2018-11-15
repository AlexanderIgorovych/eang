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
    //horizontal: true,
    depth: 0,
    children: [
    {
      name: 'Card',
      icon: 'bell',
      depth: 1,
      data: {
        link: '/card'
      }
    },
    {
      name: 'Layout',
      icon: 'bell-off',
      depth: 1,
      data: {
        link: '/layout'
      }
    },
    {
      name: 'Icons',
      depth: 1,
      data: {
        link: '/icon'
      },
      children: [
        {
          name: 'Special',
          icon: 'arrow-down',
          depth: 2,
          data: {
            link: '/special'
          }
        }
      ]
    }
    ]
  }

  constructor() {}

  ngOnInit() {}

}