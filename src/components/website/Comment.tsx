import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function Comment() {
  const { theme } = useTheme();

  return (
    <Giscus
      id="comments"
      repo="ilvme/yumi-site-next"
      repoId="R_kgDOOMVL5g"
      category="Announcements"
      categoryId="DIC_kwDOOMVL5s4CoZsN"
      mapping="pathname"
      strict="1"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={
        theme === 'dark'
          ? 'dark'
          : theme === 'light'
            ? 'light'
            : 'preferred_color_scheme'
      }
      lang="zh-CN"
      loading="lazy"
    />
  );
}
