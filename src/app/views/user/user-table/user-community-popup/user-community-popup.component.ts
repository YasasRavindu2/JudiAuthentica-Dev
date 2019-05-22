import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatCheckboxChange } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-user-community-popup',
  templateUrl: './user-community-popup.component.html'
})
export class UserCommunityPopupComponent implements OnInit {


  allCommunities = [];
  selectedCommunities = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserCommunityPopupComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {

    this.allCommunities = JSON.parse(JSON.stringify(this.data.community));
    this.selectedCommunities = this.data.selectedCommunity;

    this.allCommunities.forEach(element => {
      if (this.selectedCommunities.length > 0) {
        let status = false;
        this.selectedCommunities.forEach(community => {
          if (community.id.indexOf(element.id) === 0) {
            status = true;
          }
          element['isChecked'] = status;
        });
      }
    });
  }

  onChange(event: MatCheckboxChange): void {
    if (event.checked) {
      this.allCommunities.forEach((item) => {
        if (item.id === event.source.value) {
          this.selectedCommunities.push(item);
        }
      });
    } else {
      this.selectedCommunities.forEach((item, index) => {
        if (item.id === event.source.value) {
          this.selectedCommunities.splice(index, 1);
        }
      });
    }
  }

  submit() {
    this.dialogRef.close(this.selectedCommunities);
  }
}