import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="mt-24 flex flex-col gap-5">
      <Skeleton className="mb-10 h-8 w-80" />

      {Array.from({ length: 3 }).map((_, i) => (
        <div className="mb-6 space-y-4" key={i}>
          <Skeleton className="h-6 w-[250px]" />
          <Skeleton className="h-4 w-[50%]" />
          <Skeleton className="h-4 w-[60%]" />
          <Skeleton className="h-4 w-[80%]" />
        </div>
      ))}
    </div>
  );
}
