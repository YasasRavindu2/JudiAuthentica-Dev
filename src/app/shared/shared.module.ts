import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TranslateModule } from "@ngx-translate/core";
import {
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatDialogModule
} from "@angular/material";

// ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT
import { HeaderSideComponent } from "./components/header-side/header-side.component";
import { SidebarSideComponent } from "./components/sidebar-side/sidebar-side.component";

// ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT
import { HeaderTopComponent } from "./components/header-top/header-top.component";
import { SidebarTopComponent } from "./components/sidebar-top/sidebar-top.component";

// ONLY FOR DEMO (Removable without changing any layout configuration)
import { CustomizerComponent } from "./components/customizer/customizer.component";

// ALL TIME REQUIRED
import { AdminLayoutComponent } from "./components/layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./components/layouts/auth-layout/auth-layout.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { AppComfirmComponent } from "./services/app-confirm/app-confirm.component";
import { AppLoaderComponent } from "./services/app-loader/app-loader.component";

// DIRECTIVES
import { FontSizeDirective } from "./directives/font-size.directive";
import { ScrollToDirective } from "./directives/scroll-to.directive";
import { AppDropdownDirective } from "./directives/dropdown.directive";
import { DropdownAnchorDirective } from "./directives/dropdown-anchor.directive";
import { DropdownLinkDirective } from "./directives/dropdown-link.directive";
import { EgretSideNavToggleDirective } from "./directives/egret-side-nav-toggle.directive";
import { PositiveNumberOnly } from "../directives/PositiveNumber.directive";
import { PositiveNumberAndLetterOnly } from "../directives/PositiveNumberAndLetter.directive";
import { LetterOnly } from "../directives/Letter.directive";

// PIPES
import { RelativeTimePipe } from "./pipes/relative-time.pipe";
import { ExcerptPipe } from "./pipes/excerpt.pipe";

// SERVICES
import { ThemeService } from "./services/theme.service";
import { LayoutService } from "./services/layout.service";
import { NavigationService } from "./services/navigation.service";
import { RoutePartsService } from "./services/route-parts.service";
import { AuthGuard } from "./services/auth/auth.guard";
import { AppConfirmService } from "./services/app-confirm/app-confirm.service";
import { AppLoaderService } from "./services/app-loader/app-loader.service";
import { AppErrorComponent } from "./services/app-error/app-error.component";
import { AppErrorService } from "./services/app-error/app-error.service";

/*
 * App warning component and service
 * Created by Prasad kumara
 * 11-03-2019
*/
import { AppWarningComponent } from './services/app-warning/app-warning.component';
import { AppWarningService } from './services/app-warning/app-warning.service';

/*
  Only Required if you want to use Angular Landing
  (https://themeforest.net/item/angular-landing-material-design-angular-app-landing-page/21198258)
*/
// import { LandingPageService } from '../shared/services/landing-page.service';
import { AppFileDownloadService } from "./services/file-download.service";
import { AppDataConversionService } from './services/data-conversion.service';
import { ArrayFilter } from './pipes/array-filter.pipe';
import { LocalizationService} from './services/localization.service';


const classesToInclude = [
  HeaderTopComponent,
  SidebarTopComponent,
  SidenavComponent,
  NotificationsComponent,
  SidebarSideComponent,
  HeaderSideComponent,
  AdminLayoutComponent,
  AuthLayoutComponent,
  BreadcrumbComponent,
  AppComfirmComponent,
  AppLoaderComponent,
  AppErrorComponent,
  CustomizerComponent,
  FontSizeDirective,
  ScrollToDirective,
  AppDropdownDirective,
  DropdownAnchorDirective,
  DropdownLinkDirective,
  EgretSideNavToggleDirective,
  RelativeTimePipe,
  ExcerptPipe,
  ArrayFilter,
  PositiveNumberOnly,
  PositiveNumberAndLetterOnly,
  LetterOnly,
  AppWarningComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    TranslateModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatSnackBarModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatDialogModule
  ],
  entryComponents: [
    AppComfirmComponent,
    AppLoaderComponent,
    AppErrorComponent,
    AppWarningComponent
  ],
  providers: [
    ThemeService,
    LayoutService,
    NavigationService,
    RoutePartsService,
    AuthGuard,
    AppConfirmService,
    AppLoaderService,
    AppErrorService,
    AppFileDownloadService,
    AppDataConversionService,
    // LandingPageService
    LocalizationService,
    AppWarningService
  ],
  declarations: classesToInclude,
  exports: classesToInclude
})
export class SharedModule {}
