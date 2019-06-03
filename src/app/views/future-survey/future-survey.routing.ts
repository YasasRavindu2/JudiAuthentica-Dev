import { Routes } from "@angular/router";
import { FutureSurveyComponent } from "./future-survey/future-survey.component";
import { FutureSurveyViewComponent } from "./future-survey-view/future-survey-view.component";
import { FutureSurveyListComponent } from "./future-survey-list/future-survey-list.component";
import { FutureSurveyBaseComponent } from "./future-survey-base.component";
import { FutureSurveyInviteeGroupComponent } from './future-survey-invitee-group/future-survey-invitee-group.component';
import { FutureSurveyInvitationDashboardComponent } from "./future-survey-invitation-dashboard/future-survey-invitation-dashboard.component";
import { GroupInviteesComponent } from "./group-invitees/group-invitees.component";

export const FutureSurveyRoutes: Routes = [
  {
    path: "",
    component: FutureSurveyBaseComponent,
    children: [
      {
        path: "sList",
        component: FutureSurveyListComponent,
        data: { title: "Survey List", breadcrumb: "Survey List" }
      },
      {
        path: "inviteeGroups",
        component: FutureSurveyInviteeGroupComponent,
        data: { title: "Invitee Group Settings", breadcrumb: "Invitee Group Settings" }
      },
      {
        path: "invitationDashboard",
        component: FutureSurveyInvitationDashboardComponent,
        data: { title: "Invitation Dashboard", breadcrumb: "Invitation Dashboard" }
      },
      {
        path: "groupInvitees",
        component: GroupInviteesComponent,
        data: { title: "Invitees", breadcrumb: "Invitees Settings" }
      },
    ]
  },
  {
    path: "sEditor",
    component: FutureSurveyComponent,
    data: { title: "Survey Editor", breadcrumb: "Survey Editor" }
  },
  {
    path: "sViewer",
    component: FutureSurveyViewComponent,
    data: { title: "Survey View", breadcrumb: "Survey View" }
  }
];
