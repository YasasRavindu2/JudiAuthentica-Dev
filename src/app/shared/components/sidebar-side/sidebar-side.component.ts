import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NavigationService } from "../../../shared/services/navigation.service";
import { ThemeService } from '../../services/theme.service';
import { Subscription } from "rxjs";
import PerfectScrollbar from 'perfect-scrollbar';
import { LocalStorageHandler } from '../../helpers/local-storage';
import { UserService } from './../../../views/sessions/UserService.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-sidebar-side',
  templateUrl: './sidebar-side.component.html'
})
export class SidebarSideComponent extends LocalStorageHandler implements OnInit, OnDestroy, AfterViewInit {
  private sidebarPS: PerfectScrollbar;
  public menuItems: any[];
  public hasIconTypeMenuItem: boolean;
  public iconTypeMenuTitle: string;
  private menuItemsSub: Subscription;
  public layoutConf:any;
  constructor(
    private navService: NavigationService,
    public themeService: ThemeService,
    public userService: UserService,
    private layout: LayoutService,
  ) {super(); }

  ngOnInit() {
    this.layoutConf = this.layout.layoutConf;
    this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
    this.menuItemsSub = this.navService.menuItems$.subscribe(menuItem => {
      this.menuItems = menuItem;
      const removeItemList = this.userService.setComponetDisable();
      removeItemList.forEach(element => {
        const index = this.menuItems.findIndex(x => x.name === element);
        if (index >= 0) {
          this.menuItems[index].disabled = true;
        }
      });
      console.log('=====================================');
      console.log(this.menuItems);
      //Checks item list has any icon type.
      this.hasIconTypeMenuItem = !!this.menuItems.filter(item => item.type === 'icon').length;
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.sidebarPS = new PerfectScrollbar('#scroll-area', {
        suppressScrollX: true
      })
    })
  }
  ngOnDestroy() {
    if(this.sidebarPS) {
      this.sidebarPS.destroy();
    }
    if(this.menuItemsSub) {
      this.menuItemsSub.unsubscribe()
    }
  }



}