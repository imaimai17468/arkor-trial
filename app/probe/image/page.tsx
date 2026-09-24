import Image from "next/image";

export default function ImageProbePage() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-lg font-medium">
        next/image（元画像 2400×1600 PNG）
      </h2>
      <Image
        src="/probe-large.png"
        alt="横方向と縦方向にグラデーションがかかったノイズ画像"
        width={2400}
        height={1600}
        sizes="(max-width: 672px) 100vw, 672px"
        loading="eager"
      />
    </section>
  );
}
