import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Newsletter',
    //   href: getPermalink('/'),
    // },
    {
      text: 'Radio Activity',
      href: getPermalink('/'),
    },
    {
      text: 'Your Host',
      href: getPermalink('/'),
    },
    {
      text: 'More',
      links: [
        {
          text: 'Radio Playlists',
          href: getPermalink('/category/playlists'),
        },
        {
          text: 'Mixtapes',
          href: getPermalink('/category/mixtapes'),
        },
        // {
        //   text: 'Reviews',
        //   href: getPermalink('/category/reviews'),
        // },
        // {
        //   text: 'News',
        //   href: getPermalink('/category/news'),
        // },
        {
          text: 'Archive',
          href: getPermalink('/archives'),
        },
        {
          text: 'Contact',
          href: getPermalink('/'),
        },
      ]
    },
    {
      text: 'On Social Media',
      links: [
        {
          text: 'On Facebook',
          href: 'https://www.facebook.com/jclacking',
        },
        {
          text: 'On Instagram',
          href: 'https://www.instagram.com/jclacking',
        },
        {
          text: 'On Mixcloud',
          href: 'https://www.mixcloud.com/the-lacking-org',
        },
        // {
        //   text: 'On Mastodon',
        //   href: getPermalink('/services'),
        // },
      ],
    },
  ],
  actions: [] // [{
  //   text: 'ON THE AIR :: Listen Now!',
  //   href: 'https://github.com/onwidget/astrowind', target: '_blank',
  //   variant: 'primary'
  // }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
