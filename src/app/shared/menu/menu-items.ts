export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/admin/management',
    title: 'Pengurusan',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'audit-trails', title: 'Jejak Audit', type: 'link' },
      { path: 'user', title: 'ID Pengguna', type: 'link' }
    ]
  },
  {
    path: '/admin/report',
    title: 'Templat',
    type: 'link',
    icontype: 'fas fa-chart-bar text-red'
  },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/user/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning',
  },
  {
    path: '/user/pendaftaran',
    title: 'Pendaftaran',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'pendaftaran',
    isCollapsed: true,
    children: [
      { path: 'pendaftaranDaftar', title: 'Daftar', type: 'link' },
      { path: 'pendaftaranTemujanji', title: 'Temujanji', type: 'link' }
    ]

  },
  {
    path: '/user/konsultasi',
    title: 'Konsultasi',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/user/laporan',
    title: 'Laporan',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/user/intervensi',
    title: 'Intervensi',
    type: 'sub',
    icontype: 'fas fa-life-ring text-blue',
    collapse: 'intervensi',
    isCollapsed: true,
    children: [
      { path: 'aktivitiIntervensi', title: 'Aktiviti', type: 'link' },
      { path: 'pesertaIntervensi', title: 'Peserta', type: 'link' }
    ]
  },
  
  /*
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  },
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  },
  {
    path: '/houses',
    title: 'Houses',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }
  */
];