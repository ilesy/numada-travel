import stLuciaImg from '@/assets/destinations/st-lucia.jpg';
import barbadosImg from '@/assets/destinations/barbados.jpg';
import svgImg from '@/assets/destinations/svg.jpg';
import jamaicaImg from '@/assets/destinations/jamaica.jpg';
import turksCaicosImg from '@/assets/destinations/turks-caicos.jpg';
import antiguaImg from '@/assets/destinations/antigua.jpg';
import arubaImg from '@/assets/destinations/aruba.jpg';
import bahamasImg from '@/assets/destinations/bahamas.jpg';
import dominicanRepublicImg from '@/assets/destinations/dominican-republic.jpg';
import caymanImg from '@/assets/destinations/cayman.jpg';
import grenadaImg from '@/assets/destinations/grenada.jpg';

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
  priceFrom: number;
  flightsUrl: string;
  hotelsUrl: string;
  toursUrl: string;
  itinerary: ItineraryDay[];
  faqs: FAQ[];
  seasonalTips: SeasonalTip[];
}

// Affiliate links
const AVIASALES_BASE = 'https://aviasales.tpo.lu/ijnjwuHV';
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
    priceFrom: 2900,
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
    priceFrom: 2400,
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
    priceFrom: 2200,
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
    priceFrom: 1900,
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
    priceFrom: 3600,
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
    priceFrom: 2800,
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
  {
    id: 'aruba',
    name: 'Aruba',
    slug: 'aruba',
    shortDescription: 'One Happy Island — sunshine all year, outside the hurricane belt.',
    description: "Aruba sits south of the hurricane belt, which is exactly why it works when other Caribbean islands don't. Reliable sunshine, calm turquoise water at Eagle Beach, a walkable capital in Oranjestad, and a surprisingly diverse food scene make it our go-to recommendation for travelers who want zero weather surprises.",
    image: arubaImg,
    highlights: ['Eagle Beach', 'Arikok National Park', 'Oranjestad', 'Baby Beach'],
    bestTimeToVisit: 'April - August (cheaper, still dry)',
    currency: 'Aruban Florin',
    language: 'Dutch, Papiamento, English',
    priceFrom: 2200,
    flightsUrl: EXPEDIA_URL,
    hotelsUrl: BOOKING_URL,
    toursUrl: KLOOK_BASE,
    itinerary: [
      { day: 1, title: 'Arrival & Palm Beach', activities: ['Arrive at Queen Beatrix International', 'Check into your Palm Beach resort', 'Sunset cocktails at the Bucuti pier', 'Dinner along the high-rise strip'] },
      { day: 2, title: 'Eagle Beach Day', activities: ['Morning at Eagle Beach (the famous divi-divi tree shot)', 'Lunch at a beachside palapa', 'Snorkeling at Boca Catalina', 'Sunset sail on a catamaran'] },
      { day: 3, title: 'Arikok Adventure', activities: ['Jeep tour through Arikok National Park', 'Visit the Natural Pool (Conchi)', 'See the Ayo & Casibari rock formations', 'Dinner in Oranjestad'] },
      { day: 4, title: 'San Nicolas & South', activities: ['Street art tour in San Nicolas', 'Relax at Baby Beach', 'Lunch at Zeerovers (fresh-off-the-boat seafood)', 'Evening at a local rum bar'] },
      { day: 5, title: 'Departure', activities: ['Final swim at your resort', 'Last-minute shopping in Oranjestad', 'Departure'] },
    ],
    faqs: [
      { question: 'Is Aruba really outside the hurricane belt?', answer: 'Yes — Aruba sits at the southern edge of the Caribbean, well south of the typical hurricane path. Direct hits are extremely rare, which makes Aug–Oct travel much lower risk than other islands.' },
      { question: 'Do I need to rent a car?', answer: 'If you stay on Palm Beach or Eagle Beach you can survive without one, but a car (or jeep for Arikok) opens up the whole island. Driving is on the right.' },
      { question: 'What language is spoken?', answer: 'Officially Dutch and Papiamento, but English is spoken essentially everywhere tourism touches.' },
      { question: 'Is the tap water safe?', answer: 'Yes. Aruba\'s tap water is desalinated and meets WHO standards — it\'s safe and tastes fine.' },
    ],
    seasonalTips: [
      { season: 'Peak Season', months: 'December - March', description: 'Snowbird season. Perfect weather, highest prices, busiest beaches.', crowdLevel: 'High', priceLevel: 'Peak' },
      { season: 'Shoulder Season', months: 'April - August', description: 'Still dry and sunny, noticeably cheaper, fewer crowds. Our pick for value.', crowdLevel: 'Medium', priceLevel: 'Moderate' },
      { season: 'Low Season', months: 'September - November', description: 'Lowest prices. Outside the hurricane belt so still very safe to travel.', crowdLevel: 'Low', priceLevel: 'Budget' },
    ],
  },
  {
    id: 'bahamas',
    name: 'Bahamas',
    slug: 'bahamas',
    shortDescription: 'Swimming pigs, pink-sand cays, and 700 islands to choose from.',
    description: 'The Bahamas is not one destination — it\'s 700+ islands, each with a different personality. Nassau and Paradise Island deliver the big-resort experience; the Exumas deliver the postcard (swimming pigs, sandbars, Thunderball Grotto); Eleuthera and Harbour Island deliver pink sand and laid-back charm. Pick your vibe.',
    image: bahamasImg,
    highlights: ['Exuma Swimming Pigs', 'Pink Sands Beach (Harbour Island)', 'Thunderball Grotto', 'Atlantis Paradise Island'],
    bestTimeToVisit: 'December - April',
    currency: 'Bahamian Dollar (USD accepted 1:1)',
    language: 'English',
    priceFrom: 2600,
    flightsUrl: EXPEDIA_URL,
    hotelsUrl: BOOKING_URL,
    toursUrl: KLOOK_BASE,
    itinerary: [
      { day: 1, title: 'Arrival in Nassau', activities: ['Arrive at Lynden Pindling International', 'Check into your resort', 'Stroll downtown Nassau & Bay Street', 'Dinner at Fish Fry on Arawak Cay'] },
      { day: 2, title: 'Paradise Island', activities: ['Day pass or stay at Atlantis', 'Snorkel at the lagoon', 'Beach time at Cabbage Beach', 'Sunset at Compass Point'] },
      { day: 3, title: 'Exuma Day Trip', activities: ['Early flight or boat to Exuma', 'Swim with the famous Exuma pigs', 'Sandbar lunch', 'Thunderball Grotto snorkel', 'Return to Nassau'] },
      { day: 4, title: 'Harbour Island', activities: ['Ferry/flight to Eleuthera & Harbour Island', 'Pink Sands Beach', 'Lunch at Sip Sip', 'Golf cart tour of Dunmore Town'] },
      { day: 5, title: 'Departure', activities: ['Morning swim', 'Souvenir shopping', 'Departure from Nassau'] },
    ],
    faqs: [
      { question: 'Are the Exuma swimming pigs worth the trip?', answer: 'Yes, but go with a reputable operator and go early — afternoon tours are crowded and the pigs are tired. Book a full-day Exumas tour that also covers Thunderball Grotto and the iguanas.' },
      { question: 'Do I need a passport?', answer: 'Yes. US citizens need a valid passport for air travel. Closed-loop cruises have looser rules but a passport is always safer.' },
      { question: 'Is US dollar accepted?', answer: 'Yes, 1:1 with the Bahamian dollar everywhere. No need to exchange.' },
      { question: 'Which island should I pick?', answer: 'Nassau/Paradise for first-timers and families. Exumas for postcard moments and boating. Eleuthera/Harbour Island for quiet luxury. Out Islands for serious off-grid.' },
    ],
    seasonalTips: [
      { season: 'Peak Season', months: 'December - April', description: 'Best weather, lowest humidity, highest prices. Book early for Christmas/New Year.', crowdLevel: 'High', priceLevel: 'Peak' },
      { season: 'Shoulder Season', months: 'May - June', description: 'Warm, mostly dry, great value. Our favorite window.', crowdLevel: 'Medium', priceLevel: 'Moderate' },
      { season: 'Hurricane Season', months: 'July - November', description: 'Significant savings but real hurricane risk. Buy travel insurance.', crowdLevel: 'Low', priceLevel: 'Budget' },
    ],
  },
  {
    id: 'dominican-republic',
    name: 'Dominican Republic',
    slug: 'dominican-republic',
    shortDescription: 'All-inclusive value, merengue rhythm, and Punta Cana beaches.',
    description: 'The Dominican Republic is the Caribbean\'s best value play. Punta Cana delivers world-class all-inclusive resorts at prices that embarrass other islands, while Samaná and Las Terrenas offer a much quieter, more European-feeling alternative. Add in colonial Santo Domingo and humpback whale season, and there\'s a lot more here than the resort bubble.',
    image: dominicanRepublicImg,
    highlights: ['Bávaro Beach (Punta Cana)', 'Samaná Peninsula', 'Santo Domingo Zona Colonial', 'Saona Island'],
    bestTimeToVisit: 'December - April',
    currency: 'Dominican Peso (USD widely accepted)',
    language: 'Spanish',
    priceFrom: 1500,
    flightsUrl: EXPEDIA_URL,
    hotelsUrl: BOOKING_URL,
    toursUrl: KLOOK_BASE,
    itinerary: [
      { day: 1, title: 'Arrival in Punta Cana', activities: ['Arrive at Punta Cana International', 'Transfer to your all-inclusive', 'Welcome cocktail by the pool', 'Beachfront dinner'] },
      { day: 2, title: 'Bávaro Beach Day', activities: ['Sunrise walk on Bávaro Beach', 'Catamaran tour with snorkeling', 'Lunch on Palmilla natural pool', 'Resort spa afternoon'] },
      { day: 3, title: 'Saona Island', activities: ['Full-day excursion to Saona Island', 'Speedboat through mangroves', 'Beach BBQ on Saona', 'Catamaran ride back'] },
      { day: 4, title: 'Adventure or Culture', activities: ['Option A: Scape Park (cenotes, ziplines)', 'Option B: Day trip to Santo Domingo Zona Colonial', 'Local dinner away from the resort'] },
      { day: 5, title: 'Departure', activities: ['Final beach morning', 'Pick up DR rum & cigars', 'Departure'] },
    ],
    faqs: [
      { question: 'Is all-inclusive really the best way to do the DR?', answer: 'For Punta Cana, often yes — the resorts are excellent and the surrounding area is limited. For Samaná, Las Terrenas, or Santo Domingo, definitely go boutique or independent.' },
      { question: 'Is it safe?', answer: 'Resort areas are very safe. Use common sense in Santo Domingo and avoid driving at night between cities. Pre-booked transfers are recommended over street taxis.' },
      { question: 'When can I see humpback whales?', answer: 'Mid-January through mid-March in Samaná Bay. It\'s one of the best whale-watching experiences in the world.' },
      { question: 'Do I need to speak Spanish?', answer: 'Not in resort zones. Outside them, basic Spanish goes a long way and locals appreciate the effort.' },
    ],
    seasonalTips: [
      { season: 'Peak Season', months: 'December - April', description: 'Best weather, whale season in Samaná, highest prices.', crowdLevel: 'High', priceLevel: 'Peak' },
      { season: 'Shoulder Season', months: 'May - July', description: 'Warmer and slightly wetter, but excellent value at major resorts.', crowdLevel: 'Medium', priceLevel: 'Moderate' },
      { season: 'Hurricane Season', months: 'August - November', description: 'Lowest prices but real storm risk, especially Sept–Oct. Insurance recommended.', crowdLevel: 'Low', priceLevel: 'Budget' },
    ],
  },
  {
    id: 'cayman-islands',
    name: 'Cayman Islands',
    slug: 'cayman-islands',
    shortDescription: 'Seven Mile Beach, stingray encounters, and world-class diving.',
    description: 'Grand Cayman is polished, safe, and built for travelers who want the Caribbean without any rough edges. Seven Mile Beach is genuinely one of the best stretches of sand in the region; Stingray City is a bucket-list snorkel; and the food scene punches far above the island\'s size. Little Cayman and Cayman Brac are quieter, dive-focused alternatives.',
    image: caymanImg,
    highlights: ['Seven Mile Beach', 'Stingray City', 'Bioluminescent Bay', "Rum Point"],
    bestTimeToVisit: 'November - April',
    currency: 'Cayman Islands Dollar (USD accepted)',
    language: 'English',
    priceFrom: 3200,
    flightsUrl: EXPEDIA_URL,
    hotelsUrl: BOOKING_URL,
    toursUrl: KLOOK_BASE,
    itinerary: [
      { day: 1, title: 'Arrival & Seven Mile', activities: ['Arrive at Owen Roberts International', 'Check into a Seven Mile Beach property', 'Sunset at Calico Jack\'s', 'Dinner at Camana Bay'] },
      { day: 2, title: 'Stingray City', activities: ['Half-day Stingray City sandbar tour', 'Snorkel at Coral Gardens', 'Lunch at Rum Point', 'Afternoon at Starfish Point'] },
      { day: 3, title: 'East Side Adventure', activities: ['Drive to the East End', 'Snorkel the Wreck of the Cali', 'Lunch at Tukka', 'Crystal Caves tour'] },
      { day: 4, title: 'Food & Bioluminescence', activities: ['Camana Bay morning market', 'Cayman Cookout-style lunch (Blue by Eric Ripert is the splurge)', 'Bioluminescent Bay kayak tour after dark'] },
      { day: 5, title: 'Departure', activities: ['Final swim at Seven Mile', 'Brunch at Sunshine Grill', 'Departure'] },
    ],
    faqs: [
      { question: 'Is the Cayman Islands expensive?', answer: 'Yes — it\'s one of the pricier Caribbean destinations. The trade-off is high-end infrastructure, clean beaches, low crime, and excellent food.' },
      { question: 'Is Stingray City ethical?', answer: 'It\'s wild stingrays in their natural habitat, but they\'ve learned to associate boats with food. Choose operators that limit feeding and group size, and never lift a stingray out of the water.' },
      { question: 'Do I need a car?', answer: 'Not strictly — taxis and shuttles cover Seven Mile Beach. A rental car opens up the East End and Rum Point. Drive on the left.' },
      { question: 'Is it good for diving?', answer: 'Yes — Cayman is one of the top dive destinations in the world. Walls, wrecks (USS Kittiwake), and excellent visibility year-round.' },
    ],
    seasonalTips: [
      { season: 'Peak Season', months: 'November - April', description: 'Perfect weather, lowest humidity. Book Christmas/New Year months ahead.', crowdLevel: 'High', priceLevel: 'Peak' },
      { season: 'Shoulder Season', months: 'May - June', description: 'Warmer, mostly dry, noticeably better rates.', crowdLevel: 'Medium', priceLevel: 'Moderate' },
      { season: 'Hurricane Season', months: 'July - October', description: 'Hurricane risk peaks in September. Significant savings but buy insurance.', crowdLevel: 'Low', priceLevel: 'Budget' },
    ],
  },
  {
    id: 'grenada',
    name: 'Grenada',
    slug: 'grenada',
    shortDescription: 'The Spice Isle — Grand Anse beach, nutmeg, and chocolate.',
    description: 'Grenada is the Caribbean before it got crowded. Grand Anse is a two-mile arc of soft sand without a single high-rise; the interior is rainforest, waterfalls, and the world\'s most famous nutmeg estates; and the chocolate scene (yes, chocolate) is genuinely world-class. Best of all, it\'s south of the hurricane belt.',
    image: grenadaImg,
    highlights: ['Grand Anse Beach', 'Annandale Falls', 'Belmont Estate (chocolate)', 'Underwater Sculpture Park'],
    bestTimeToVisit: 'January - April',
    currency: 'Eastern Caribbean Dollar',
    language: 'English',
    priceFrom: 2100,
    flightsUrl: EXPEDIA_URL,
    hotelsUrl: BOOKING_URL,
    toursUrl: KLOOK_BASE,
    itinerary: [
      { day: 1, title: 'Arrival & Grand Anse', activities: ['Arrive at Maurice Bishop International', 'Check into your Grand Anse hotel', 'Sunset swim at Grand Anse', 'Dinner at Umbrellas Beach Bar'] },
      { day: 2, title: 'Spice Island Tour', activities: ['Visit a nutmeg processing station', 'Tour Belmont Estate cocoa plantation', 'Tree-to-bar chocolate tasting', 'Lunch on the estate'] },
      { day: 3, title: 'Waterfalls & Rainforest', activities: ['Hike to Seven Sisters Falls', 'Swim at Annandale Falls', 'Grand Etang National Park', 'Mona monkeys spotting'] },
      { day: 4, title: 'Underwater Sculpture Park', activities: ['Snorkel/dive Molinere Underwater Sculpture Park', 'Lunch at Aquarium Beach Club', 'Stroll St. George\'s Carenage at sunset', 'Friday night fish fry in Gouyave (if Friday)'] },
      { day: 5, title: 'Departure', activities: ['Final morning on Grand Anse', 'Spice market shopping', 'Departure'] },
    ],
    faqs: [
      { question: 'Is Grenada outside the hurricane belt?', answer: 'Mostly yes — it sits at the very southern edge of the Caribbean and major hurricanes are historically rare (Ivan in 2004 being the painful exception).' },
      { question: 'What\'s the chocolate scene about?', answer: 'Grenada grows some of the world\'s best cacao and has multiple tree-to-bar producers (Grenada Chocolate Company, Belmont Estate, Crayfish Bay). Chocolate tours are excellent.' },
      { question: 'Is Grand Anse really crowd-free?', answer: 'Yes — there are no high-rise hotels permitted on Grand Anse, so even in peak season it doesn\'t feel packed.' },
      { question: 'Do I need a car?', answer: 'Helpful for waterfalls and the north of the island. Taxis are easy for shorter trips. Drive on the left.' },
    ],
    seasonalTips: [
      { season: 'Dry Season', months: 'January - April', description: 'Best weather, peak season, Grenada Sailing Week in late Jan.', crowdLevel: 'Medium', priceLevel: 'Peak' },
      { season: 'Shoulder Season', months: 'May - July', description: 'Warming up, occasional showers, great value, August spicemas carnival.', crowdLevel: 'Low', priceLevel: 'Moderate' },
      { season: 'Low Season', months: 'September - December', description: 'Wettest months but Grenada is south of the main hurricane track. Excellent prices.', crowdLevel: 'Low', priceLevel: 'Budget' },
    ],
  },
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return destinations.find((d) => d.slug === slug);
};
