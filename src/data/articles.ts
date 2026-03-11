import imageCurrency from '../assets/images/image-currency.jpg';
import imageRestaurant from '../assets/images/image-restaurant.jpg';
import imagePlane from '../assets/images/image-plane.jpg';
import imageConfetti from '../assets/images/image-confetti.jpg';

interface Artitcles {
  image: ImageMetadata;
  author: string;
  title: string;
  description: string;
}

export const articles: Artitcles[] = [
  {
    image: imageCurrency,
    author: 'Claire Robinson',
    title: 'Receive money in any currency with no fees',
    description:
      'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
  },
  {
    image: imageRestaurant,
    author: 'Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    description:
      'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
  },
  {
    image: imagePlane,
    author: 'Wilson Hutton',
    title: 'Take your Digitalbank card wherever you go',
    description:
      'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
  },
  {
    image: imageConfetti,
    author: 'Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    description:
      'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
  },
];
