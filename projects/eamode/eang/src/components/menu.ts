import {
  Component,
  Input,
  EventEmitter,
  OnInit,
  ViewEncapsulation
} from '@angular/core'

export interface MenuTreeItem {
  id?: any
  name: string
  icon?: string
  iconStyle?: string
  depth?: number
  horizontal?: boolean
  isActive?: boolean
  isOpen?: boolean
  parent?: MenuTreeItem
  children?: MenuTreeItem[]
  data?: any
}
@Component({
  selector: 'ea-menu',
  template: `
  <div class="node"
    [class.has-children]="node.children?.length > 0"
    [style.padding-left]="node.depth * 15 + 'px'"
    [attr.active]="node.isActive ? '' : null">
      <ng-container *ngIf="node.icon">
        <button *ngIf="node.children?.length > 0; else noChildren" (click)="onToggle()" class="node-toggle" custom>
          <span icon class="{{node.icon}} {{node.iconStyle}}"></span>
        </button>
        <ng-template #noChildren>
          <button class="node-toggle" custom disabled>
            <span icon class="{{node.icon}} {{node.iconStyle}}"></span>
          </button>
        </ng-template>
      </ng-container>
      <button *ngIf="!node.icon && node.children?.length > 0" (click)="onToggle()" class="node-toggle" custom>
          <span icon chevron-down *ngIf="node.isOpen" role="icon" style="margin: 0">
          </span>
          <span icon chevron-right *ngIf="!node.isOpen" role="icon" style="margin: 0">
          </span>
      </button>
      <span (click)="onActivate()" class="name">
        {{node.name}}
      </span>
    <aside>
      <ng-container *ngIf="controlPanelTemplate"
        [ngTemplateOutlet]="controlPanelTemplate"
        [ngTemplateOutletContext]="{node: node}">
      </ng-container>
    </aside>
</div>
<div *ngIf="node.children?.length > 0 && node.isOpen" class="ea-tree-children" [class.horizontal]="!!node.horizontal">
  <ea-menu
    *ngFor="let child of node.children; trackBy: track.bind(node)" 
    [node]="child"
    [toggleEvents]="toggleEvents"
    [activateEvents]="activateEvents"
    [controlPanelTemplate]="controlPanelTemplate"></ea-menu>
</div>`,
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  @Input()
  node
  @Input()
  controlPanelTemplate
  @Input()
  toggleEvents: EventEmitter<MenuTreeItem>
  @Input()
  activateEvents: EventEmitter<MenuTreeItem>
  
  constructor() {
    console.log(this)
  }
  ngOnInit(): void {
    console.log(this)
  }
  onToggle() {
    if (this.node.children.length > 0) {
      this.node.isOpen = !this.node.isOpen
    }
    if (this.toggleEvents) {
      this.toggleEvents.emit(this.node)
    }
  }

  onActivate() {
    this.node.isActive = true
    
    if (this.activateEvents) {
      this.activateEvents.emit(this.node)
    }

    if (!this.node.parent){
      return
    }
    for(let sibling of this.node.parent.children) {
        if (sibling.name == this.node.name) {
          continue
        }
        sibling.isActive = false
    }
  }

  track(index, currentNode) {
    return currentNode.parent = this
  }
}