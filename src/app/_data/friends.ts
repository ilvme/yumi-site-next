export interface FriendItem {
  name: string;
  url: string;
  word?: string;
  icon?: string;
}

const friends: FriendItem[] = [
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
