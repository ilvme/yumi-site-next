import PostRender from '@/components/post/PostRender';
import fs from 'fs/promises';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `康佳的简历`,
};

// function generateDownloadLink(href) {
//   const link = document.createElement('a');
//   link.href = href;
//
//   const fileType = href.slice(href.lastIndexOf('.') + 1);
//
//   link.download = `康佳-后端-18232110170.${fileType}`;
//   link.className = `pin ${fileType}_downloader`;
//   link.innerText = fileType.toUpperCase();
//
//   document.getElementsByTagName('body')[0].appendChild(link);
// }

export default async function Resume() {
  const resumeStr = await fs.readFile(
    `${process.cwd()}/src/app/(resume)/resume/resume.md`,
    'utf-8'
  );

  const str = await fetch('/resume/resume.md');
  console.log(str);

  return (
    <div className="pt-16 pb-32">
      <PostRender content={resumeStr} />
    </div>
  );
}
