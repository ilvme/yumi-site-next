export interface FriendItem {
  name: string;
  avatar?: string;
  url: string;
  word?: string;
  icon?: string;
  hidden?: boolean;
}

const friends: FriendItem[] = [
  {
    name: '林深时觉寒',
    avatar: '头像链接',
    url: 'https://ikangjia.cn',
    word: 'Every dog has its day.',
    hidden: true,
  },
  {
    name: '风の守望者',
    url: 'https://wind-watcher.cn/',
    word: 'Every dog has its day.',
  },
  {
    name: '贼歪',
    url: 'https://varzy.me',
    word: '这是一段测试文字。',
  },
];

export default friends;
