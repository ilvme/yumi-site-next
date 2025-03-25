import Linker from '@/components/Linker';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center space-y-2 py-20 text-xl">
      <h2 className="text-3xl">Oh~</h2>
      <p>你到了没有知识的荒原~</p>
      <Linker href="/" text="带我回家" />
    </div>
  );
}
