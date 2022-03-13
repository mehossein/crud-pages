import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AdvanceToolbarConfig } from '@tavanasystem/advance-toolbar/lib/advance-toolbar.model';
import { of } from 'rxjs';

import { TipsMatTable } from 'src/app/core/classes/tips-mat-table.class';
import { MatIconRegistry } from '@angular/material/icon';
@Component({
  selector: 'csr-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent extends TipsMatTable implements OnInit {
  constructor(
    private domSanitizer: DomSanitizer,
    private MatIconRegistry: MatIconRegistry
  ) {
    super();
    this.MatIconRegistry.addSvgIcon(
      'toolbar-clear-filters',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/toolbar-icons/toolbar-clear-filters.svg'
      )
    );
    this.MatIconRegistry.addSvgIcon(
      'toolbar-clear-filters-disable',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/toolbar-icons/toolbar-clear-filters-disable.svg'
      )
    );
    this.MatIconRegistry.addSvgIcon(
      'toolbar-search',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/toolbar-icons/toolbar-search.svg'
      )
    );
    this.MatIconRegistry.addSvgIcon(
      'toolbar-search-disable',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/toolbar-icons/toolbar-search-disable.svg'
      )
    );
    this.MatIconRegistry.addSvgIcon(
      'toolbar-new',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/toolbar-icons/toolbar-new.svg'
      )
    );
    this.MatIconRegistry.addSvgIcon(
      'toolbar-new-disable',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/toolbar-icons/toolbar-new-disable.svg'
      )
    );
    this.MatIconRegistry.addSvgIcon(
      'toolbar-refresh',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/toolbar-icons/toolbar-refresh.svg'
      )
    );
    this.MatIconRegistry.addSvgIcon(
      'toolbar-change-status-disable',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/toolbar-icons/toolbar-change-status-disable.svg'
      )
    );
    this.MatIconRegistry.addSvgIcon(
      'toolbar-change-status',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/toolbar-icons/toolbar-change-status.svg'
      )
    );
    this.MatIconRegistry.addSvgIcon(
      'toolbar-cashier-change',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/toolbar-icons/toolbar-cashier-change.svg'
      )
    );
    this.MatIconRegistry.addSvgIcon(
      'toolbar-closed-status',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/toolbar-icons/toolbar-closed-status.svg'
      )
    );
    this.MatIconRegistry.addSvgIcon(
      'toolbar-closed-status-disable',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/toolbar-icons/toolbar-closed-status-disable.svg'
      )
    );
    this.MatIconRegistry.addSvgIcon(
      'toolbar-closed-status-disable',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/toolbar-icons/toolbar-closed-status-disable.svg'
      )
    );
    this.MatIconRegistry.addSvgIcon(
      'toolbar-reserve-status',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/toolbar-icons/toolbar-reserve-status.svg'
      )
    );
    this.MatIconRegistry.addSvgIcon(
      'toolbar-unreserved-status',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/toolbar-icons/toolbar-unreserved-status.svg'
      )
    );
  }

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
            className: 'flex-50 padding-10',
            key: 'code',
            type: 'input',
            defaultValue: 0,
            templateOptions: {
              label: 'کد',
              appearance: 'outline',
            },
          },
          {
            className: 'flex-50 padding-10',
            key: 'title',
            type: 'input',
            templateOptions: {
              label: 'عنوان',
              required: true,
              appearance: 'outline',
            },
          },
          {
            className: 'flex-100 padding-10',
            key: 'description',
            type: 'textarea',
            templateOptions: {
              label: 'شرح',
              appearance: 'outline',
              rows: 3,
            },
          },
        ],
      },
    ];

    this.columns = [
      { header: 'ردیف', name: 'rowNumber' },
      { header: 'شماره', name: 'Number' },
      { header: 'وضعیت', name: 'status' },
      { header: 'تاریخ', name: 'date' },
      { header: 'تعداد', name: 'count' },
      { header: 'مبلغ', name: 'amount' },
      { header: 'ارز', name: 'currency' },
    ];
  }

  startConfigs: AdvanceToolbarConfig[] = [
    {
      title: 'new',
      id: 'new',
      icon: 'toolbar-new',
      disableIcon: 'toolbar-new-disable',
      show: true,
      btnType: 'icon-button',
      hasDividerAfter: true,
    },
    {
      title: 'search',
      id: 'search',
      icon: 'toolbar-search',
      disableIcon: 'toolbar-search-disable',
      btnType: 'icon-button',
      show: true,
    },
    {
      title: 'clear-filter',
      id: 'clear-filter',
      icon: 'toolbar-clear-filters',
      disableIcon: 'toolbar-clear-filters-disable',
      btnType: 'icon-button',
      show: true,
    },
    {
      title: 'status',
      id: 'current-status',
      icon: 'toolbar-change-status',
      disableIcon: 'toolbar-change-status-disable',
      show: true,
      btnType: 'menu',
      submenuItems: of([
        {
          title: 'close',
          id: 'status-close',
          icon: 'toolbar-closed-status',
        },
        {
          title: 'block',
          id: 'status-block',
          icon: 'toolbar-unreserved-status',
        },
        {
          title: 'open',
          id: 'status-open',
          icon: 'toolbar-reserve-status',
        },
      ]),
    },
  ];

  endConfigs: AdvanceToolbarConfig[] = [
    {
      title: 'btn with title',
      id: 'btn-with-title',
      show: true,
      btnType: 'stroked-button',
    },
    {
      title: 'btn with title and icon',
      id: 'btn-with-title-and-icon',
      show: true,
      btnType: 'icon-button',
      icon: 'toolbar-cashier-change',
    },
    {
      title: 'refresh',
      id: 'refresh',
      icon: 'toolbar-refresh',
      disableIcon: 'toolbar-refresh-disable',
      show: true,
      btnType: 'icon-button',
    },
  ];
}
