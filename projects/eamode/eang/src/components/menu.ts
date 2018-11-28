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
  horizontal?: boolean
  closeable?: boolean
  isHidden?: boolean
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
    [style.padding-left]="depth * 15 + 'px'"
    [attr.hidden]="node.isHidden ? '' : null"
    [attr.active]="node.isActive ? '' : null">
    <button *ngIf="node.children?.length > 0" (click)="onToggle()" icon flat>
      <span icon chevron-down negative *ngIf="node.isOpen">
      </span>
      <span icon chevron-right negative *ngIf="!node.isOpen">
      </span>
    </button>
    <span (click)="onActivate()" class="name">
      <ng-container *ngIf="nameTemplate; else defaultName"
        [ngTemplateOutlet]="nameTemplate"
        [ngTemplateOutletContext]="{node: node}">
      </ng-container>
      <ng-template #defaultName>
        <ng-container *ngIf="node.icon">
            <span icon class="{{node.icon}} {{node.iconStyle}}"></span>
        </ng-container>
        {{node.name}}
      </ng-template>
    </span>
    <aside>
      <ng-container *ngIf="controlPanelTemplate"
        [ngTemplateOutlet]="controlPanelTemplate"
        [ngTemplateOutletContext]="{node: node}">
      </ng-container>
      <button *ngIf="node.closeable" icon flat class="close" (click)="onClose()">
        <span icon x negative></span>
      </button>
    </aside>
</div>
<div *ngIf="node.children?.length > 0 && (node.isOpen || node.isHidden)" class="ea-tree-children" [class.horizontal]="!!node.horizontal">
  <ea-menu
    *ngFor="let child of node.children trackBy: track.bind(node)"
    [node]="child"
    [depth]="depth + 1"
    [closeEvents]="closeEvents"
    [toggleEvents]="toggleEvents"
    [activateEvents]="activateEvents"
    [nameTemplate]="nameTemplate"
    [controlPanelTemplate]="controlPanelTemplate"></ea-menu>
</div>`,
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  @Input()
  node
  @Input()
  depth = 0
  @Input()
  nameTemplate
  @Input()
  controlPanelTemplate
  @Input()
  closeEvents: EventEmitter<MenuTreeItem>
  @Input()
  toggleEvents: EventEmitter<MenuTreeItem>
  @Input()
  activateEvents: EventEmitter<MenuTreeItem>

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.node.isOpen = false
    this.node.isHidden = true
    if (this.closeEvents) {
      this.closeEvents.emit(this.node)
    }
  }

  onToggle() {
    if (this.node.children && this.node.children.length > 0) {
      this.node.isOpen = !this.node.isOpen
    }
    if (this.toggleEvents) {
      this.toggleEvents.emit(this.node)
    }
  }

  getTreeRoot(item: MenuTreeItem) {
    return item.parent ? this.getTreeRoot(item.parent) : item
  }

  deactivateChildren(item: MenuTreeItem) {
    item.isActive = false
    if (item.children) {
      item.children.forEach(child => {
        this.deactivateChildren(child)
      })
    }
  }

  onActivate() {
    this.onToggle()
    const root = this.getTreeRoot(this.node)
    this.deactivateChildren(root)
    this.node.isActive = true

    if (this.activateEvents) {
      this.activateEvents.emit(this.node)
    }
  }

  track(index, currentNode) {
    currentNode.parent = this
  }
}
