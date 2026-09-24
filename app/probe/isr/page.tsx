export const revalidate = 60;

const renderedAt = (): string => new Date().toISOString();

export default function IsrProbePage() {
  const at = renderedAt();
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-lg font-medium">ISR（revalidate = 60）</h2>
      <p className="text-sm text-muted-foreground">
        この時刻が 60
        秒ごとに変われば再生成が動いており、再読み込みのたびに変われば SSR
        として描画されている。
      </p>
      <time dateTime={at} className="tabular-nums">
        {at}
      </time>
    </section>
  );
}
