import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  EventEmitter
} from '@angular/core'
import { MenuTreeItem } from './menu'
import { TabComponent } from './tab'

@Component({
  selector: 'ea-tabs',
  template: `
  <ea-menu [node]="menu" [activateEvents]="activated">
  </ea-menu> 
  <ng-content select="ea-tab"></ng-content>
  `,
  styles: []
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>

  menu: MenuTreeItem = {
    name: 'Main',
    horizontal: true,
    isHidden: true,
    children: []
  }
  activated = new EventEmitter<MenuTreeItem>()

  constructor() {}

  activateTab(tab: TabComponent) {
    this.tabs.forEach(tab => (tab.activeAttr = null))
    tab.activeAttr = ''
  }

  ngAfterContentInit() {
    if (this.tabs.length > 0) {
      this.tabs.forEach(tab => {
        console.log(tab)
        this.menu.children.push({ name: tab.name })
      })

      this.menu.children[0].isActive = true
      this.activateTab(this.tabs.first)
    }

    this.activated.subscribe((activatedItem: MenuTreeItem) => {
      const tab = this.tabs.find(tab => tab.name === activatedItem.name)
      this.activateTab(tab)
    })
  }
}
