export interface IMenuItem {
  label: string;
  href: string;
  icon?: any;
};

export interface ICallToAction {
  label: string;
  variant: 'outline' | 'solid' | 'text';
  icon?: any;
  action?: () => any;
}