import type TinyLorem from 'tiny-lorem';
interface ConsumerProps {
  lorem: TinyLorem;
  num: number;
}

interface ConsumerRes {
  id: string;
  name: string;
  age: number;
  gender: number;
  email: string;
  phone: string;
  avatar: string;
  createAt: string;
}
export default function consumerService(props: ConsumerProps) {
  const { lorem, num } = props;
  const list = lorem.array<ConsumerRes>(num, (l) => {
    return {
      id: l.unique.nanoid(10),
      name: l.texts.name('en', true),
      age: l.number.int([10, 80]),
      gender: l.helper.elements<number>([0, 1]),
      avatar: l.image.picsum({ width: 100 }),
      email: l.internet.email(),
      phone: l.internet.mobile(true),
      createAt: l.date.timestamp(),
    };
  });

  return {
    total: num,
    list,
  };
}
