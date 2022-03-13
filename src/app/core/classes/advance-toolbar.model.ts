import { Observable } from 'rxjs';

export interface AdvanceToolbarConfig {
  id: any;
  show: boolean | (() => boolean);
  disable?: boolean | (() => boolean);
  icon?: string | (() => string);
  disableIcon?: string;
  title?: string | (() => string);
  btnType?:
    | 'icon-button' // default
    | 'stroked-button'
    | 'label'
    | 'menu';
  hideTooltip?: boolean;
  styles?: any;
  iconStyle?: string;
  submenuItems?: Observable<SubmenuConfig[]>;
  hasDividerAfter?: boolean;
}

export interface SubmenuConfig {
  id: any;
  title: string;
  hide?: boolean | (() => boolean);
  disable?: boolean | (() => boolean);
  icon?: string;
  disableIcon?: string;
  styles?: any;
}
