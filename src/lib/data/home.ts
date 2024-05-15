import { Platform } from '$lib/types';

export const title = 'Home';
export const titleSuffix = 'Home';

export const name = 'Name';

export const lastName = 'LastName';

export const description =
  'hello, world';

export const links: Array<{ platform: Platform; link: string }> = [
  {
    platform: Platform.GitHub,
    link: 'https://github.com/mei28',
  },
  // {
  //   platform: Platform.Linkedin,
  //   link: 'https://www.linkedin.com/'
  // },
  {
    platform: Platform.Twitter,
    link: 'https://twitter.com/_mei28_'
  },
  {
    platform: Platform.Email,
    link: 'mingzhe-yang [at] g.ecc.u-tokyo.ac.jp'
  },
  {
    platform: Platform.Kaggle,
    link: 'https://www.kaggle.com/mei2828'
  },
  {
    platform: Platform.Atcoder,
    link: 'https://atcoder.jp/users/mei28'
  },
  {
    platform: Platform.SpeakerDeck,
    link: 'https://speakerdeck.com/mei28'
  },
];

// export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
