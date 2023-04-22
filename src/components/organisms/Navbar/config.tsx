import type { ICallToAction, IMenuItem } from "@/@types/mainMenu.types";

import { FaStream } from 'react-icons/fa';

export const MENU_ITEMS: Array<IMenuItem> = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/about' }
];

export const CALL_TO_ACTIONS: Array<ICallToAction> = [
  { label: 'Acessar', icon: (<FaStream />), variant: 'outline', action: () => { } },
  { label: 'Criar uma conta', variant: 'solid', action: () => {} }
];