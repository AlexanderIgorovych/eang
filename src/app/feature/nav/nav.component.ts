import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent implements OnInit {
  node = {
    name: 'Main menu',
    icon: 'hamburger-menu',
    iconStyle: 'negative',
    //horizontal: true,
    depth: 0,
    children: [
    {
      name: 'Notification',
      icon: 'bell',
      iconStyle: 'aqua',
      depth: 1,
      data: {
        link: '/card'
      }
    },
    {
      name: 'Cards',
      icon: 'layers',
      iconStyle: 'AntiqueWhite',
      depth: 1,
      data: {
        link: '/card'
      }
    },
    {
      name: 'Library',
      icon: 'align-right',
      iconStyle: 'aliceblue',
      depth: 1,
      data: {
        link: '/icon'
      },
      children: [
        {
          name: 'Book',
          icon: 'bookmark',
          depth: 2,
          data: {
            link: '/special'
          }
        }
      ]
    }
    ]
  }

  nodeHorizontal = {
    name: 'Main menu',
    icon: 'hamburger-menu',
    horizontal: true,
    depth: 0,
    children: [
    {
      name: 'Notification',
      icon: 'bell',
      depth: 1,
      data: {
        link: '/card'
      }
    },
    {
      name: 'Cards',
      icon: 'layers',
      depth: 1,
      data: {
        link: '/card'
      }
    },
    {
      name: 'Library',
      icon: 'align-right',
      depth: 1,
      data: {
        link: '/icon'
      },
      children: [
        {
          name: 'Book',
          icon: 'bookmark',
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