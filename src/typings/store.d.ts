declare namespace StoreState {

  export type State = 0 | 1 | 2 | 3 | string
  // 菜单
  export interface Menu {

    /** 标题 */
    name: string;

    /** 关键字 */
    path: string;

    /** 描述 */
    descript: string;

  }
}
