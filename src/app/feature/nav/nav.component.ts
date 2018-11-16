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
    isHidden: true,
    children: [
    {
      name: 'Notification',
      icon: 'bell',
      iconStyle: 'aqua',
      data: {
        link: '/card'
      }
    },
    {
      name: 'Cards',
      icon: 'layers',
      iconStyle: 'AntiqueWhite',
      data: {
        link: '/card'
      }
    },
    {
      name: 'Library',
      icon: 'align-right',
      iconStyle: 'aliceblue',
      data: {
        link: '/icon'
      },
      children: [
        {
          name: 'Book',
          icon: 'bookmark',
          data: {
            link: '/special'
          }
        },
        {
          name: 'Book2',
          icon: 'bookmark',
          data: {
            link: '/special2'
          }
        }
      ]
    }
    ]
  }

  nodeHorizontal;

  constructor() {}

  ngOnInit() {
    this.nodeHorizontal = JSON.parse(JSON.stringify(this.node));
    this.nodeHorizontal.horizontal = true;
  }

}