import { Component, OnInit, EventEmitter } from '@angular/core'
import { Router } from '@angular/router'
import { LayoutService } from 'projects/eamode/eang/src/services/layout.service'
import { MenuTreeItem } from '@eamode/eang'

@Component({
  selector: 'eangio-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  constructor(
    public router: Router,
    public layout: LayoutService
  ) {}

  menu = SIDE_MENU;
  activated: EventEmitter<MenuTreeItem> = new EventEmitter<MenuTreeItem>();

  shouldCloseDrawer() {
    if (this.layout.isDrawerOverlay) {
      this.layout.drawerState$.next('closed')
    }
  }

  onActivate(e, scrollContainer) {
    document.getElementsByTagName('ea-main')[0].scrollTop = 0
  }

  ngOnInit() {
    this.activated.subscribe(
      (item: MenuTreeItem) => {
        this.router.navigate([item.data.link]);
      })
  }
}

const SIDE_MENU = {
  name: 'Main menu',
  isHidden: true,
  children: [
    {
      name: 'Layout',
      icon: 'layout',
      data: {
        link: '/layout'
      }
    },
    {
      name: 'Cards',
      icon: 'layers',
      iconStyle: 'negative',
      data: {
        link: '/card'
      }
    },
    {
      name: 'Buttons',
      icon: 'button-icon',
      data: {
        link: '/button'
      }
    },
    {
      name: 'Icons',
      icon: 'grid',
      iconStyle: 'negative',
      data: {
        link: '/icon'
      }
    },
    {
      name: 'Navigation',
      icon: 'hamburger-menu',
      iconStyle: 'negative',
      data: {
        link: '/nav'
      }
    }
  ]
}