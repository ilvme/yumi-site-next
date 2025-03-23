type NavItem = {
  name: string;
  href: string;
  current: boolean;
};

const navItems: NavItem[] = [
  { name: '主页', href: '/', current: false },
  { name: '随笔', href: '/essays', current: false },
  { name: '说说', href: '/words', current: false },
  { name: '技术笔记', href: '/notes', current: false },
  { name: '关于', href: '/about', current: false },
  { name: '朋友', href: '/friends', current: false },
];

export default navItems;
