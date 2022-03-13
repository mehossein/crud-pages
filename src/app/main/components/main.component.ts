import { Component, OnInit } from '@angular/core';
import { AdvanceToolbarConfig } from '@tavanasystem/advance-toolbar/lib/advance-toolbar.model';
import { TipsMatTable } from 'src/app/core/classes/tips-mat-table.class';

@Component({
  selector: 'csr-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent extends TipsMatTable implements OnInit {
  constructor() {
    super();
  }

  ToolbarBtns: AdvanceToolbarConfig[] = [];
  ngOnInit(): void {
    this.setFormConfig();
  }

  tableEvent(e: any) {
    console.log(e);
  }

  toolbarOperation(event: any) {
    console.log(event);
  }

  private setFormConfig() {
    this.searchFormConfig = [
      {
        fieldGroupClassName: 'flex-container',
        fieldGroup: [
          {
            className: 'flex-25 padding-10 disabledFormField',
            key: 'AccDocKindCode',
            type: 'input',
            defaultValue: 0,
            templateOptions: {
              label: 'کد',
              disabled: true,
            },
          },
          {
            className: 'flex-25 padding-10',
            key: 'AccDocKindName',
            type: 'input',
            templateOptions: {
              label: 'عنوان',
              required: true,
            },
          },
          {
            className: 'flex-100 padding-10',
            key: 'AccDocKindDesc',
            type: 'textarea',
            templateOptions: {
              label: 'شرح',
            },
          },
        ],
      },
    ];
  }
}
