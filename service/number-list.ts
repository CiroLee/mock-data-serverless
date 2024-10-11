import type TinyLorem from 'tiny-lorem';

interface NumberListProps {
  lorem: TinyLorem;
  num: number;
  min: number;
  max: number;
  decimal: number;
}
export default function numberList(props: NumberListProps) {
  const { lorem, num, min, max, decimal } = props;
  const generate =
    decimal > 0
      ? (l: TinyLorem) => l.number.float<number>({ range: [min, max], fixed: decimal })
      : (l: TinyLorem) => l.number.int([min, max]);
  const list = lorem.array(num, generate);

  return {
    list,
    total: num,
  };
}
