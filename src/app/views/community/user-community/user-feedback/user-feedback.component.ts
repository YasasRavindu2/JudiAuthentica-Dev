import { Component, OnInit } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { AppInfoService } from 'app/shared/services/app-info/app-info.service';
import { AppWarningService } from 'app/shared/services/app-warning/app-warning.service';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  animations: egretAnimations
})
export class UserFeedbackComponent implements OnInit {

  constructor(
    private appWarningService: AppWarningService,
    private appInfoService: AppInfoService,
    private errDialog: AppErrorService,
  ) { }

  ngOnInit() {
  }

  openWarning() {
    this.appWarningService.showWarning({
      title: 'Test',
      message: 'Test Warning!'
    });
  }

  openInfo() {
    const infoData = {
      title: 'Test',
      message: 'Test Information',
      linkData: {
        url: '#',
        urlDescription: 'Activate More'
      }
    };
    this.appInfoService.showInfo(infoData);
  }

  openError() {
    const error = {
      error: {
        status: 'Client_Error',
        validationFailures: [{
          code: 'Test Error',
          field: 'test field'
        }],
      },
      status: 400
    };
    this.errDialog.showErrorWithMessage(error);
  }

}
