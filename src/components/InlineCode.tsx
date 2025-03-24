export default async function InlineCode({ code }: { code: string }) {
  return (
    <code className="rounded-sm bg-[#ededeb] px-1 text-rose-400 dark:bg-[#2f2f2d]">
      {code}
    </code>
  );
}
