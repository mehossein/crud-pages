import {
  TableField,
  ToolbarItem,
  TableSetting,
  ContextMenuItem,
  TablePagination,
  TableSelectionMode,
  TipsMatTableComponent,
} from '@tavanasystem/tips-mat-table';
import { BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Injectable, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Injectable()
export abstract class TipsMatTable {
  @ViewChild('table')
  table!: TipsMatTableComponent<any>;
  private _allData: any[] = [];
  // required
  columns: TableField<any>[] = [];
  dataSource$: BehaviorSubject<any[]>;
  //optional
  pending: boolean = false;
  tableHeight: string = '60vh';
  selectMode: TableSelectionMode = 'none';
  // selectionModel!: SelectionModel<any> = new SelectionModel(true, []);
  pagination: TablePagination = {
    pageIndex: 0,
    pageSize: 10,
    pageSizeOptions: [5, 10, 20, 40, 80, 160],
    length: 0,
  };

  expandComponentRef: any = null;

  actionMenuItems: ContextMenuItem[] = [];
  contextMenuItems: ContextMenuItem[] = [];
  toolbarItems: ToolbarItem[] = [];

  tableSetting: TableSetting = {
    direction: 'rtl',
    columnSetting: undefined,
    cellStyle: {
      direction: 'ltr',
      'justify-content': 'end',
      padding: 'auto 5px',
    },
    stickyActionMenu: true,
    visibleTableMenu: true,
    alternativeRowStyle: { backgroundColor: '#f1f1f1' },
    rowHeight: 40,
    normalRowStyle: { backgroundColor: 'whitesmoke' },
    enableContextMenu: false,
    headerStyles: {
      headerColor: '#364f6b',
      headerBackgroundColor: '#f0f0f0',
      headerJustify: 'space-between',
      extraStyles: {
        fontWeight: '900',
        backgroundColor: 'white',
        'box-shadow': '-10px 2px 10px #ddd',
      },
    },
    ActionMenuMode: 'menu',
    tableBackgroundColor: 'white',
    showNoData: true,
    showReload: true,
    tableName: 'Tips Mat Table',
    showPagination: true,
    expandContainerStyle: { backgroundColor: '#999' },
    toolbarStyles: { height: '60px', 'background-color': '#ececec' },
    paginatorLabels: {
      itemsPerPageLabel: 'ایتم های هر صفحه:',
      nextPageLabel: 'صفحه بعدی',
      previousPageLabel: 'صفحه قبلی',
      firstPageLabel: 'اولین صفحه',
      lastPageLabel: 'آخرین صفحه',
      toLabel: 'تا',
      fromLabel: 'از',
    },
    tableNoDataMessage: 'دیتایی برای نمایش وجود ندارد!',
    SelectNoDataLabel: 'موردی یافت نشد!',
    footerStyle: {
      'justify-content': 'center !important',
      'font-weight': '900',
    },
  };

  //#region form related fields
  searchFormModel: any = {};
  searchForm = new FormGroup({});
  searchFormOptions: FormlyFormOptions = {};
  searchFormConfig: FormlyFieldConfig[] = [];
  //#endregion

  constructor() {
    this.dataSource$ = new BehaviorSubject<any[]>([]);
  }

  public set TableData(data: any[]) {
    this._allData = data;
    this.dataSource$.next(data);
  }

  // genRowNumber(list) {
  //   let result = [];
  //   let rowNumber = 1;
  //   list.forEach(el => {
  //     result.push({ ...el, RowNumber: rowNumber++ });
  //   });
  //   return result;
  // }

  public get TableData(): any[] {
    return this.table.tvsDataSource.allData;
  }

  // rowNumberConvertor(id, row, column) {
  //   try {
  //     return (
  //       this.pagination.pageSize * this.pagination.pageIndex  + (row.id + 1)
  //     );
  //   } catch {
  //     return 1;
  //   }
  // }

  // showConfirmDialog(
  //   dialog: MatDialog,
  //   model?: {
  //     message?: string;
  //     submitBtnTitle?: string;
  //     cancelBtnTitle?: string;
  //     onSubmit?: () => void;
  //     onDelete?: () => void;
  //     kind?: string;
  //     title?: string;
  //   },
  // ) {
  //   if (dialog)
  //     dialog.open(DeleteItemDialogComponent, {
  //       data: {
  //         ...model,
  //         message: model.message,
  //         submitBtnTitle: model.cancelBtnTitle,
  //         cancelBtnTitle: model.submitBtnTitle,
  //       },
  //     });
  // }

  onSortChange(sender: {
    action: string;
    sort: {
      active: string;
      direction: 'asc' | 'desc' | any;
    };
  }) {
    this.searchFormModel = {
      ...this.searchFormModel,
      OrderBy: sender.sort.active,
      SortDirection: sender.sort.direction,
    };
  }
}

//  table template
// <tips-mat-table
//   id="TipsMatTableGlobalStyle"
//   [style.height]="tableHeight"
//   [style.border-radius.px]="8"
//   [columns]="columns"
//   [dataSource]="dataSource$"
//   [pending]="pending"
//   [tableSetting]="tableSetting"
//   [rowActionMenuItems]="actionMenuItems"
//   [rowContextMenuItems]="contextMenuItems"
//   [toolbarItems]="toolbarItems"
//   [pagination]="pagination"
//   [rowSelectionMode]="selectMode"
//   [rowSelectionModel]="selectionModel"
//   [expandComponent]="expandComponentRef"
//   (onTableEvent)="tableEvent($event)"
// >
// </tips-mat-table>
