import stLuciaImg from '@/assets/destinations/st-lucia.jpg';
import barbadosImg from '@/assets/destinations/barbados.jpg';
import svgImg from '@/assets/destinations/svg.jpg';
import jamaicaImg from '@/assets/destinations/jamaica.jpg';
import turksCaicosImg from '@/assets/destinations/turks-caicos.jpg';
import antiguaImg from '@/assets/destinations/antigua.jpg';

export interface Destination {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  highlights: string[];
  bestTimeToVisit: string;
  currency: string;
  language: string;
}

export const destinations: Destination[] = [
  {
    id: 'st-lucia',
    name: 'St. Lucia',
    slug: 'st-lucia',
    shortDescription: 'Iconic Pitons, lush rainforests, and world-class resorts.',
    description: 'St. Lucia is a vision of natural beauty featuring the iconic Pitons, volcanic beaches, and lush rainforest adventures.',
    image: stLuciaImg,
    highlights: ['The Pitons', 'Sulphur Springs', 'Pigeon Island', 'Sugar Beach'],
    bestTimeToVisit: 'December - April',
    currency: 'Eastern Caribbean Dollar',
    language: 'English',
  },
  {
    id: 'barbados',
    name: 'Barbados',
    slug: 'barbados',
    shortDescription: 'Pink sand beaches, rum heritage, and colonial charm.',
    description: 'Barbados offers a perfect blend of British colonial history, stunning beaches, and vibrant Bajan culture.',
    image: barbadosImg,
    highlights: ['Crane Beach', 'Harrison\'s Cave', 'Bridgetown', 'Rum Distilleries'],
    bestTimeToVisit: 'December - May',
    currency: 'Barbadian Dollar',
    language: 'English',
  },
  {
    id: 'svg',
    name: 'St. Vincent & Grenadines',
    slug: 'st-vincent-grenadines',
    shortDescription: 'Unspoiled islands, sailing paradise, and volcanic landscapes.',
    description: 'A chain of 32 islands and cays offering the most authentic Caribbean experience with pristine waters and untouched beauty.',
    image: svgImg,
    highlights: ['Tobago Cays', 'Mustique', 'Bequia', 'La Soufrière Volcano'],
    bestTimeToVisit: 'January - May',
    currency: 'Eastern Caribbean Dollar',
    language: 'English',
  },
  {
    id: 'jamaica',
    name: 'Jamaica',
    slug: 'jamaica',
    shortDescription: 'Reggae rhythms, Blue Mountains, and cascading waterfalls.',
    description: 'Jamaica pulses with energy from the reggae beats of Kingston to the serene Blue Mountains and stunning waterfalls.',
    image: jamaicaImg,
    highlights: ['Dunn\'s River Falls', 'Blue Mountains', 'Negril Beach', 'Bob Marley Museum'],
    bestTimeToVisit: 'November - Mid December',
    currency: 'Jamaican Dollar',
    language: 'English',
  },
  {
    id: 'turks-caicos',
    name: 'Turks & Caicos',
    slug: 'turks-caicos',
    shortDescription: 'Grace Bay, crystal waters, and luxurious seclusion.',
    description: 'Home to Grace Bay, consistently ranked among the world\'s best beaches, Turks and Caicos defines Caribbean luxury.',
    image: turksCaicosImg,
    highlights: ['Grace Bay Beach', 'Chalk Sound', 'Grand Turk', 'Conch Bar Caves'],
    bestTimeToVisit: 'January - April',
    currency: 'US Dollar',
    language: 'English',
  },
  {
    id: 'antigua',
    name: 'Antigua & Barbuda',
    slug: 'antigua-barbuda',
    shortDescription: '365 beaches, historic harbors, and sailing heritage.',
    description: 'With a beach for every day of the year and a rich naval history, Antigua & Barbuda is a sailor\'s paradise.',
    image: antiguaImg,
    highlights: ['Nelson\'s Dockyard', '365 Beaches', 'Shirley Heights', 'Devil\'s Bridge'],
    bestTimeToVisit: 'December - April',
    currency: 'Eastern Caribbean Dollar',
    language: 'English',
  },
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return destinations.find((d) => d.slug === slug);
};
