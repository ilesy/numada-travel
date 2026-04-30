import stLuciaImg from '@/assets/destinations/st-lucia.jpg';
import barbadosImg from '@/assets/destinations/barbados.jpg';
import svgImg from '@/assets/destinations/svg.jpg';
import jamaicaImg from '@/assets/destinations/jamaica.jpg';
import turksCaicosImg from '@/assets/destinations/turks-caicos.jpg';
import antiguaImg from '@/assets/destinations/antigua.jpg';

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SeasonalTip {
  season: string;
  months: string;
  description: string;
  crowdLevel: 'Low' | 'Medium' | 'High';
  priceLevel: 'Budget' | 'Moderate' | 'Peak';
}

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
  flightsUrl: string;
  hotelsUrl: string;
  toursUrl: string;
  itinerary: ItineraryDay[];
  faqs: FAQ[];
  seasonalTips: SeasonalTip[];
}

// Affiliate links
const AVIASALES_BASE = 'https://aviasales.tp.st/';
const EXPEDIA_URL = 'https://expedia.com/affiliates/jbi_enterprises/numadatravel';
const BOOKING_URL = EXPEDIA_URL;
const KLOOK_BASE = EXPEDIA_URL;

export const destinations: Destination[] = [
  {
    id: 'st-lucia',
    name: 'St. Lucia',
    slug: 'st-lucia',
    shortDescription: 'Iconic Pitons, lush rainforests, and world-class resorts.',
    description: 'St. Lucia is a vision of natural beauty featuring the iconic Pitons, volcanic beaches, and lush rainforest adventures. This enchanting island offers the perfect blend of adventure and relaxation, with world-class resorts nestled between dramatic peaks and pristine coastlines.',
    image: stLuciaImg,
    highlights: ['The Pitons', 'Sulphur Springs', 'Pigeon Island', 'Sugar Beach'],
    bestTimeToVisit: 'December - April',
    currency: 'Eastern Caribbean Dollar',
    language: 'English',
    flightsUrl: EXPEDIA_URL,
    hotelsUrl: BOOKING_URL,
    toursUrl: KLOOK_BASE,
    itinerary: [
      { day: 1, title: 'Arrival & Beach Relaxation', activities: ['Arrive at Hewanorra International Airport', 'Transfer to your resort', 'Sunset dinner at a beachfront restaurant', 'Evening stroll along Sugar Beach'] },
      { day: 2, title: 'Pitons Adventure', activities: ['Hike Gros Piton with a local guide', 'Lunch in Soufrière', 'Visit the Sulphur Springs volcanic mud baths', 'Relax at a natural waterfall'] },
      { day: 3, title: 'Island Exploration', activities: ['Morning snorkeling at Anse Chastanet', 'Visit the Diamond Botanical Gardens', 'Explore historic Soufrière town', 'Catamaran sunset cruise'] },
      { day: 4, title: 'Culture & Nature', activities: ['Visit Pigeon Island National Landmark', 'Explore Rodney Bay Village', 'Local cooking class', 'Friday night street party (Gros Islet Jump Up)'] },
      { day: 5, title: 'Departure', activities: ['Final beach morning', 'Visit Castries Market for souvenirs', 'Departure from airport'] },
    ],
    faqs: [
      { question: 'Do I need a visa to visit St. Lucia?', answer: 'Citizens of the US, UK, Canada, and most EU countries do not need a visa for stays up to 6 weeks. Check with your embassy for specific requirements.' },
      { question: 'What is the best way to get around?', answer: 'Renting a car is recommended for flexibility, but taxis and organized tours are readily available. Drive on the left side of the road.' },
      { question: 'Is St. Lucia safe for tourists?', answer: 'St. Lucia is generally safe for tourists. Exercise normal precautions, avoid isolated areas at night, and keep valuables secure.' },
      { question: 'What currency is used?', answer: 'The Eastern Caribbean Dollar (XCD) is the official currency, but US dollars are widely accepted. Major credit cards work at most establishments.' },
    ],
    seasonalTips: [
      { season: 'Dry Season', months: 'December - April', description: 'Perfect weather with minimal rain. Ideal for hiking and outdoor activities.', crowdLevel: 'High', priceLevel: 'Peak' },
      { season: 'Shoulder Season', months: 'May - June', description: 'Fewer crowds, occasional showers. Great value with good weather.', crowdLevel: 'Medium', priceLevel: 'Moderate' },
      { season: 'Rainy Season', months: 'July - November', description: 'Hurricane season with lower prices. Brief tropical showers, still plenty of sunshine.', crowdLevel: 'Low', priceLevel: 'Budget' },
    ],
  },
  {
    id: 'barbados',
    name: 'Barbados',
    slug: 'barbados',
    shortDescription: 'Pink sand beaches, rum heritage, and colonial charm.',
    description: 'Barbados offers a perfect blend of British colonial history, stunning beaches, and vibrant Bajan culture. From the pink sands of Crane Beach to the historic streets of Bridgetown, this island delivers an unforgettable Caribbean experience with world-renowned rum and warm hospitality.',
    image: barbadosImg,
    highlights: ['Crane Beach', "Harrison's Cave", 'Bridgetown', 'Rum Distilleries'],
    bestTimeToVisit: 'December - May',
    currency: 'Barbadian Dollar',
    language: 'English',
    flightsUrl: EXPEDIA_URL,
    hotelsUrl: BOOKING_URL,
    toursUrl: KLOOK_BASE,
    itinerary: [
      { day: 1, title: 'Arrival & South Coast', activities: ['Arrive at Grantley Adams International Airport', 'Check into your hotel', 'Explore St. Lawrence Gap', 'Dinner at Oistins Fish Fry'] },
      { day: 2, title: 'Historic Bridgetown', activities: ['Walking tour of UNESCO Bridgetown', 'Visit Parliament Buildings', 'Lunch at Waterfront Café', 'Mount Gay Rum Distillery tour and tasting'] },
      { day: 3, title: 'Natural Wonders', activities: ["Explore Harrison's Cave", 'Visit Hunte\'s Gardens', 'Afternoon at Bathsheba Beach', 'Sunset at Animal Flower Cave'] },
      { day: 4, title: 'Beach & Culture', activities: ['Morning at Crane Beach', 'Visit St. Nicholas Abbey', 'Rum punch tasting', 'Evening at Holetown'] },
      { day: 5, title: 'Departure', activities: ['Final beach morning', 'Shop for local crafts and rum', 'Departure'] },
    ],
    faqs: [
      { question: 'What makes Barbados different from other Caribbean islands?', answer: 'Barbados has a distinct British influence, excellent infrastructure, world-famous rum, and is located outside the main hurricane belt for more reliable weather.' },
      { question: 'Is the tap water safe to drink?', answer: 'Yes! Barbados has some of the purest tap water in the world, filtered naturally through coral limestone.' },
      { question: 'What is Oistins Fish Fry?', answer: "It's a famous Friday night tradition where locals and tourists gather to enjoy fresh grilled fish, music, and dancing by the beach." },
      { question: 'Do I need to rent a car?', answer: 'Public transport (ZR vans) and taxis are available, but renting a car offers more flexibility. Remember to drive on the left!' },
    ],
    seasonalTips: [
      { season: 'Dry Season', months: 'December - May', description: 'Peak tourist season with perfect beach weather and major festivals like Crop Over.', crowdLevel: 'High', priceLevel: 'Peak' },
      { season: 'Shoulder Season', months: 'June - July', description: 'Crop Over festival season. Warm with occasional showers.', crowdLevel: 'Medium', priceLevel: 'Moderate' },
      { season: 'Rainy Season', months: 'August - November', description: 'Lower prices and fewer tourists. Brief showers but mostly sunny.', crowdLevel: 'Low', priceLevel: 'Budget' },
    ],
  },
  {
    id: 'svg',
    name: 'St. Vincent & Grenadines',
    slug: 'st-vincent-grenadines',
    shortDescription: 'Unspoiled islands, sailing paradise, and volcanic landscapes.',
    description: 'A chain of 32 islands and cays offering the most authentic Caribbean experience with pristine waters and untouched beauty. St. Vincent and the Grenadines is a sailor\'s paradise, featuring some of the most exclusive and unspoiled islands in the Caribbean.',
    image: svgImg,
    highlights: ['Tobago Cays', 'Mustique', 'Bequia', 'La Soufrière Volcano'],
    bestTimeToVisit: 'January - May',
    currency: 'Eastern Caribbean Dollar',
    language: 'English',
    flightsUrl: EXPEDIA_URL,
    hotelsUrl: BOOKING_URL,
    toursUrl: KLOOK_BASE,
    itinerary: [
      { day: 1, title: 'Arrival in St. Vincent', activities: ['Arrive at Argyle International Airport', 'Explore Kingstown capital', 'Visit Fort Charlotte for panoramic views', 'Dinner at a local restaurant'] },
      { day: 2, title: 'Volcano Adventure', activities: ['Early morning hike to La Soufrière volcano', 'Lunch in Georgetown', 'Relax at Dark View Falls', 'Evening in Kingstown'] },
      { day: 3, title: 'Ferry to Bequia', activities: ['Morning ferry to Bequia island', 'Explore Port Elizabeth', 'Snorkeling at Princess Margaret Beach', 'Sunset drinks at a beach bar'] },
      { day: 4, title: 'Tobago Cays', activities: ['Day trip to Tobago Cays Marine Park', 'Swim with sea turtles', 'Beach BBQ lunch', 'Snorkeling in crystal-clear waters'] },
      { day: 5, title: 'Departure', activities: ['Morning beach time', 'Ferry back to St. Vincent', 'Departure from Argyle Airport'] },
    ],
    faqs: [
      { question: 'How do I get between the islands?', answer: 'Inter-island ferries, small planes, and charter boats connect the islands. The Bequia Express is a popular ferry from St. Vincent.' },
      { question: 'Is Mustique accessible to tourists?', answer: 'Mustique is a private island but day trips can be arranged. Most visitors come by yacht or private plane.' },
      { question: 'What are the Tobago Cays?', answer: 'A group of five small islands within a marine park, famous for pristine beaches, turtle watching, and some of the best snorkeling in the Caribbean.' },
      { question: 'Is it expensive to visit?', answer: 'St. Vincent is quite affordable compared to other Caribbean islands. The Grenadines can be more upscale, especially Mustique and exclusive resorts.' },
    ],
    seasonalTips: [
      { season: 'Dry Season', months: 'January - May', description: 'Best weather for sailing and island hopping. Calm seas and clear skies.', crowdLevel: 'Medium', priceLevel: 'Moderate' },
      { season: 'Shoulder Season', months: 'June - July', description: 'Good weather with occasional rain. Fewer sailors and tourists.', crowdLevel: 'Low', priceLevel: 'Budget' },
      { season: 'Rainy Season', months: 'August - December', description: 'Hurricane season. Lower prices but some services may be limited.', crowdLevel: 'Low', priceLevel: 'Budget' },
    ],
  },
  {
    id: 'jamaica',
    name: 'Jamaica',
    slug: 'jamaica',
    shortDescription: 'Reggae rhythms, Blue Mountains, and cascading waterfalls.',
    description: "Jamaica pulses with energy from the reggae beats of Kingston to the serene Blue Mountains and stunning waterfalls. This vibrant island offers rich culture, delicious jerk cuisine, and natural wonders that have inspired artists and adventurers for generations.",
    image: jamaicaImg,
    highlights: ["Dunn's River Falls", 'Blue Mountains', 'Negril Beach', 'Bob Marley Museum'],
    bestTimeToVisit: 'November - Mid December',
    currency: 'Jamaican Dollar',
    language: 'English',
    flightsUrl: EXPEDIA_URL,
    hotelsUrl: BOOKING_URL,
    toursUrl: KLOOK_BASE,
    itinerary: [
      { day: 1, title: 'Arrival in Montego Bay', activities: ['Arrive at Sangster International Airport', 'Transfer to your resort', 'Explore Hip Strip', 'Sunset dinner at Margaritaville'] },
      { day: 2, title: "Dunn's River & Ocho Rios", activities: ["Climb Dunn's River Falls", 'Explore Ocho Rios', 'Visit Mystic Mountain for bobsled ride', 'Evening at Fisherman\'s Beach'] },
      { day: 3, title: 'Negril Beach Day', activities: ['Drive to Negril', 'Relax at Seven Mile Beach', "Watch sunset at Rick's Café", 'Cliff diving (optional)'] },
      { day: 4, title: 'Culture & Nature', activities: ['Visit Bob Marley Museum in Kingston (or Nine Mile)', 'Blue Mountain coffee tour', 'Traditional Jamaican dinner', 'Live reggae music'] },
      { day: 5, title: 'Departure', activities: ['Morning at the beach', 'Shop for Blue Mountain coffee and crafts', 'Departure'] },
    ],
    faqs: [
      { question: 'Is Jamaica safe for tourists?', answer: 'Tourist areas are generally safe. Stick to resort areas and organized tours. Avoid walking alone at night in unfamiliar areas.' },
      { question: 'What is jerk seasoning?', answer: "Jerk is Jamaica's signature spicy marinade using scotch bonnet peppers, allspice, and thyme. Try jerk chicken or pork at local spots." },
      { question: 'Should I stay in Montego Bay or Negril?', answer: 'Montego Bay offers more activities and nightlife. Negril is laid-back with stunning sunsets. Ocho Rios is great for waterfalls and adventure.' },
      { question: 'What about all-inclusive resorts?', answer: 'Jamaica is famous for all-inclusive resorts. They offer great value and convenience, but also explore local restaurants for authentic cuisine.' },
    ],
    seasonalTips: [
      { season: 'Dry Season', months: 'November - April', description: 'Peak season with ideal weather. Great for beaches and outdoor activities.', crowdLevel: 'High', priceLevel: 'Peak' },
      { season: 'Shoulder Season', months: 'May - June', description: 'Start of rainy season with afternoon showers. Good value and fewer crowds.', crowdLevel: 'Medium', priceLevel: 'Moderate' },
      { season: 'Rainy Season', months: 'July - October', description: 'Hurricane season with lower prices. Mornings are usually sunny.', crowdLevel: 'Low', priceLevel: 'Budget' },
    ],
  },
  {
    id: 'turks-caicos',
    name: 'Turks & Caicos',
    slug: 'turks-caicos',
    shortDescription: 'Grace Bay, crystal waters, and luxurious seclusion.',
    description: "Home to Grace Bay, consistently ranked among the world's best beaches, Turks and Caicos defines Caribbean luxury. This British Overseas Territory offers pristine turquoise waters, world-class diving, and upscale resorts in a peaceful, exclusive setting.",
    image: turksCaicosImg,
    highlights: ['Grace Bay Beach', 'Chalk Sound', 'Grand Turk', 'Conch Bar Caves'],
    bestTimeToVisit: 'January - April',
    currency: 'US Dollar',
    language: 'English',
    flightsUrl: EXPEDIA_URL,
    hotelsUrl: BOOKING_URL,
    toursUrl: KLOOK_BASE,
    itinerary: [
      { day: 1, title: 'Arrival & Grace Bay', activities: ['Arrive at Providenciales International Airport', 'Check into your resort', 'Relax at Grace Bay Beach', 'Sunset dinner on the beach'] },
      { day: 2, title: 'Water Adventures', activities: ['Morning snorkeling at Smith\'s Reef', 'Stand-up paddleboarding', 'Visit to Provo Golf Club or spa', 'Conch fritters at local restaurant'] },
      { day: 3, title: 'Island Exploration', activities: ['Half-day trip to Chalk Sound National Park', 'Kayaking in turquoise lagoon', 'Visit to Sapodilla Bay', 'Shopping in Grace Bay'] },
      { day: 4, title: 'Day Trip or Diving', activities: ['Full-day trip to Grand Turk or North Caicos', 'Or scuba diving at the wall', 'Beach BBQ', 'Stargazing'] },
      { day: 5, title: 'Departure', activities: ['Final morning swim', 'Brunch at a beachfront café', 'Departure'] },
    ],
    faqs: [
      { question: 'Why is Turks & Caicos so expensive?', answer: 'TCI is an upscale destination with luxury resorts, excellent infrastructure, and some of the world\'s best beaches. Budget options exist but are limited.' },
      { question: 'What makes Grace Bay special?', answer: 'Consistently voted the world\'s best beach, Grace Bay features 12 miles of powdery white sand and calm, crystal-clear turquoise water.' },
      { question: 'Is Turks & Caicos good for families?', answer: 'Yes! Calm waters, safe beaches, and family-friendly resorts make it ideal for children. Many resorts offer kids\' programs.' },
      { question: 'Do I need a passport?', answer: 'Yes, all visitors need a valid passport. US, UK, and Canadian citizens don\'t need a visa for stays up to 90 days.' },
    ],
    seasonalTips: [
      { season: 'Dry Season', months: 'January - April', description: 'Perfect weather with low humidity. Peak season with highest prices.', crowdLevel: 'High', priceLevel: 'Peak' },
      { season: 'Shoulder Season', months: 'May - June, November - December', description: 'Good weather with occasional showers. Better rates and fewer crowds.', crowdLevel: 'Medium', priceLevel: 'Moderate' },
      { season: 'Hurricane Season', months: 'July - October', description: 'Risk of storms but significant savings. Many resorts offer deals.', crowdLevel: 'Low', priceLevel: 'Budget' },
    ],
  },
  {
    id: 'antigua',
    name: 'Antigua & Barbuda',
    slug: 'antigua-barbuda',
    shortDescription: '365 beaches, historic harbors, and sailing heritage.',
    description: "With a beach for every day of the year and a rich naval history, Antigua & Barbuda is a sailor's paradise. From the historic Nelson's Dockyard to the pristine sister island of Barbuda, this destination offers endless coastal beauty and Caribbean charm.",
    image: antiguaImg,
    highlights: ["Nelson's Dockyard", '365 Beaches', 'Shirley Heights', "Devil's Bridge"],
    bestTimeToVisit: 'December - April',
    currency: 'Eastern Caribbean Dollar',
    language: 'English',
    flightsUrl: EXPEDIA_URL,
    hotelsUrl: BOOKING_URL,
    toursUrl: KLOOK_BASE,
    itinerary: [
      { day: 1, title: 'Arrival & Beach Time', activities: ['Arrive at V.C. Bird International Airport', 'Transfer to your resort', 'Explore nearby beach', 'Welcome rum punch at sunset'] },
      { day: 2, title: "Nelson's Dockyard", activities: ["Tour Nelson's Dockyard National Park", 'Explore English Harbour', 'Lunch at a historic restaurant', 'Sunday sunset party at Shirley Heights'] },
      { day: 3, title: 'Beach Hopping', activities: ['Visit Half Moon Bay', 'Explore Darkwood Beach', 'Afternoon at Jolly Beach', 'Dinner in St. John\'s'] },
      { day: 4, title: 'Barbuda Day Trip', activities: ['Ferry or flight to Barbuda', 'Visit Frigate Bird Sanctuary', 'Relax on Pink Sand Beach', 'Return to Antigua'] },
      { day: 5, title: 'Departure', activities: ['Final beach morning', 'Shopping in Heritage Quay', 'Departure'] },
    ],
    faqs: [
      { question: 'Is it true Antigua has 365 beaches?', answer: 'Yes! The island claims a beach for every day of the year, each with its own character and charm.' },
      { question: 'How do I get to Barbuda?', answer: 'You can take a ferry (about 90 minutes) or a short flight (15 minutes) from Antigua to Barbuda.' },
      { question: 'What is Shirley Heights?', answer: 'A historic military lookout that now hosts a famous Sunday afternoon party with BBQ, rum punch, and steel band music overlooking English Harbour.' },
      { question: 'When is Antigua Sailing Week?', answer: 'Usually held in late April/early May, it\'s one of the world\'s premier sailing regattas and a great time to visit.' },
    ],
    seasonalTips: [
      { season: 'Dry Season', months: 'December - April', description: 'Perfect weather for sailing and beach activities. Peak season with festivals.', crowdLevel: 'High', priceLevel: 'Peak' },
      { season: 'Shoulder Season', months: 'May - June', description: 'Sailing Week in May. Good weather with building humidity.', crowdLevel: 'Medium', priceLevel: 'Moderate' },
      { season: 'Hurricane Season', months: 'July - November', description: 'Lower prices and fewer tourists. Some risk of tropical weather.', crowdLevel: 'Low', priceLevel: 'Budget' },
    ],
  },
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return destinations.find((d) => d.slug === slug);
};
