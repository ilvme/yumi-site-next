import Image from 'next/image';

export default async function Sponsor() {
  return (
    <>
      <h2 className="mt-8 mb-3 text-2xl font-bold">sponsor me</h2>
      <div className="flex flex-col gap-2">
        <p>
          如果你喜欢我的内容，或者他们可以给你带来帮助，就给我的小猫买个罐头吧~
        </p>

        <details>
          <summary className="text-[#52a849]">微信</summary>
          <Image
            width="300"
            height="300"
            src="/images/wechat.png"
            alt="Wechat"
          />
        </details>

        <details>
          <summary className="text-[#337af6]">支付宝</summary>
          <Image
            width="300"
            height="300"
            src="/images/alipay.png"
            alt="Alipay"
          />
        </details>
      </div>
    </>
  );
}
