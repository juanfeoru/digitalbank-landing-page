import iconOnline from '../assets/icons/icon-online.svg';
import iconBudgeting from '../assets/icons/icon-budgeting.svg';
import iconOnboarding from '../assets/icons/icon-onboarding.svg';
import iconApi from '../assets/icons/icon-api.svg';

interface Features {
  icon: ImageMetadata;
  title: string;
  description: string;
}

export const features: Features[] = [
  {
    icon: iconOnline,
    title: 'Online Banking',
    description:
      'Our modern web and mobile applications allow you to keep track of your finances wherever your are in the world.',
  },
  {
    icon: iconBudgeting,
    title: 'Simple Budgeting',
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    icon: iconOnboarding,
    title: 'Fast Onboarding',
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: iconApi,
    title: 'Open API',
    description:
      'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
];
