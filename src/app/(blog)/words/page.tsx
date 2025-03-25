'use cache';

import BlogHero from '@/components/BlogHero';
import WordCard from '@/components/word/WordCard';
import { listPublishedWords } from '@/lib/notion';
import { Word } from '@/lib/notion-types';
import { SITE_CONFIG } from '../../../../yumi.config';

async function getWords() {
  const words = await listPublishedWords(SITE_CONFIG.words_db_id);

  // 按年份和月份分组
  const wordsByYearMonth = words.reduce((acc, word) => {
    const date = new Date(word.createAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    if (!acc[year]) {
      acc[year] = {};
    }
    if (!acc[year][month]) {
      acc[year][month] = [];
    }
    acc[year][month].push(word);
    return acc;
  }, {});

  // 获取年份并降序排序
  const years = Object.keys(wordsByYearMonth).sort((a, b) => b - a);

  return { wordsByYearMonth, years };
}

export default async function WordsPage() {
  const { wordsByYearMonth, years } = await getWords();

  return (
    <div className="py-4">
      <BlogHero
        title="说说"
        description="一句话叙当前所历之事，一句话抒此刻难言之情，一句话吐所遇违心之槽。"
      />

      <div className="space-y-8">
        {years.map((year) => (
          <section key={year} className="space-y-4">
            <h3 className="text-xl font-bold text-rose-200 dark:text-rose-600">
              {year}{' '}
              <span className="text-base font-normal text-gray-500">
                (共计 {Object.values(wordsByYearMonth[year]).flat().length} 个)
              </span>
            </h3>
            {Object.keys(wordsByYearMonth[year])
              .sort((a, b) => b - a)
              .map((month) => (
                <div key={`${year}-${month}`} className="space-y-2">
                  <span className="text-base font-medium text-gray-600 dark:text-gray-400">
                    {month} 月{' '}
                    <span className="text-sm font-normal text-gray-500">
                      ( {wordsByYearMonth[year][month].length} )
                    </span>
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {wordsByYearMonth[year][month].map((word: Word) => (
                      <WordCard key={word.id} word={word} />
                    ))}
                  </div>
                </div>
              ))}
          </section>
        ))}
      </div>
    </div>
  );
}
