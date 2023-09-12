export interface Menu {
  id: string;
  titre: string;
  icon: string;
  url?: any;
  sousMenu?: Array<Menu>;
}
