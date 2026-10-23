import type { Txt } from '../i18n';

export const contact = {
  email: 'dysonans@dysonans.pl',
  emailOffice: 'joanna.wisniewska@cantamen.pl',
  phone: '+48 608 322 797',
  phoneHref: 'tel:+48608322797',
  nip: '777-29-20-164',
  association: { pl: 'Stowarzyszenie Promocji Kultury Cantamen', en: 'Cantamen Association for the Promotion of Culture' } as Txt,
  bank: { name: 'NEST Centrum Rozliczeniowe', account: '31 2530 0008 2022 1077 6620 0001' },
  youtube: 'https://www.youtube.com/user/ChorDysonans',
  spotify: 'https://open.spotify.com/artist/50xCvlEEQCWhKuTY1juwRe',
};

export const conductors = [
  {
    name: 'Magdalena Wdowicka-Mackiewicz',
    role: { pl: 'Dyrygentka od 1991 roku', en: 'Conductor since 1991' } as Txt,
    bio: {
      pl: 'Profesor sztuk muzycznych, dyrektor Instytutu Dyrygentury Akademii Muzycznej im. I.J. Paderewskiego w Poznaniu. Specjalizuje się w muzyce renesansu i baroku; od 2018 roku wykonuje z Dysonansem barok misyjny Ameryki Południowej, rekonstruowany przez ks. prof. Piotra Nawrota.',
      en: 'Professor of musical arts and director of the Conducting Institute at the Paderewski Academy of Music in Poznań. She specialises in Renaissance and Baroque music; since 2018 she has performed South American mission baroque, reconstructed by Fr. Prof. Piotr Nawrot, with Dysonans.',
    } as Txt,
  },
  {
    name: 'Michał Plichta',
    role: { pl: 'Drugi dyrygent od 2023 roku', en: 'Second conductor since 2023' } as Txt,
    bio: {
      pl: 'Asystent dyrygenta w Operze Wrocławskiej, od 2022 roku kierownik artystyczny Chóru Kameralnego Akademii Kaliskiej. Z Dysonansem zdobył I nagrodę na festiwalu „Pater Noster” w 2024 roku i nagrał „Salve Regina” Eustachiusa Wagnera.',
      en: 'Assistant conductor at the Wrocław Opera and, since 2022, artistic director of the Kalisz Academy Chamber Choir. With Dysonans he won first prize at the “Pater Noster” festival in 2024 and recorded Eustachius Wagner’s “Salve Regina”.',
    } as Txt,
  },
];

export type Tier = 'grand-prix' | 'first' | 'prize' | 'stage';

export type Award = {
  date: string;
  year: number;
  event: Txt;
  city: Txt;
  country: Txt;
  tier: Tier;
  results: Txt[];
};

export const awards: Award[] = [
  { date: '2025-11', year: 2025, event: { pl: 'XIV Międzynarodowy Festiwal Chóralny Entrecoros', en: '14th Entrecoros International Choral Festival' }, city: { pl: 'Meksyk', en: 'Mexico City' }, country: { pl: 'Meksyk', en: 'Mexico' }, tier: 'stage', results: [{ pl: 'Udział w festiwalu', en: 'Festival appearance' }] },
  { date: '2024-06', year: 2024, event: { pl: 'Ogólnopolski Festiwal Pieśni Religijnej „Pater Noster”', en: '“Pater Noster” National Festival of Sacred Song' }, city: { pl: 'Strzepcz', en: 'Strzepcz' }, country: { pl: 'Polska', en: 'Poland' }, tier: 'first', results: [{ pl: 'I nagroda w kategorii chórów świeckich (dyr. Michał Plichta)', en: '1st prize, secular choirs (cond. Michał Plichta)' }] },
  { date: '2023-10', year: 2023, event: { pl: 'City of Derry International Choir Festival', en: 'City of Derry International Choir Festival' }, city: { pl: 'Derry', en: 'Derry' }, country: { pl: 'Wielka Brytania', en: 'United Kingdom' }, tier: 'stage', results: [{ pl: 'Udział w festiwalu', en: 'Festival appearance' }] },
  { date: '2022-11', year: 2022, event: { pl: 'Grand Prix Polskiej Chóralistyki im. Stefana Stuligrosza', en: 'Stefan Stuligrosz Grand Prix of Polish Choral Music' }, city: { pl: 'Poznań', en: 'Poznań' }, country: { pl: 'Polska', en: 'Poland' }, tier: 'stage', results: [{ pl: 'Finał, z nominacji po Gaude Cantem', en: 'Final, by nomination after Gaude Cantem' }] },
  { date: '2022-10', year: 2022, event: { pl: '17. Międzynarodowy Festiwal Chórów „Gaude Cantem”', en: '17th “Gaude Cantem” International Choir Festival' }, city: { pl: 'Bielsko-Biała', en: 'Bielsko-Biała' }, country: { pl: 'Polska', en: 'Poland' }, tier: 'grand-prix', results: [
    { pl: 'Grand Prix', en: 'Grand Prix' },
    { pl: 'Złoty dyplom i I miejsce w kategorii chórów mieszanych', en: 'Gold diploma and 1st place, mixed choirs' },
    { pl: 'Wyróżnienie za „Zachodzi słoneczko” Lutosławskiego w opr. Łukaszewskiego', en: 'Award for Lutosławski’s “Zachodzi słoneczko”, arr. Łukaszewski' },
    { pl: 'Najlepsza dyrygentka festiwalu', en: 'Best conductor of the festival' },
  ] },
  { date: '2022-09', year: 2022, event: { pl: '11. Festiwal Cançó Mediterrània im. Pau Casalsa', en: '11th Cançó Mediterrània Festival, Pau Casals' }, city: { pl: 'Lloret de Mar', en: 'Lloret de Mar' }, country: { pl: 'Hiszpania', en: 'Spain' }, tier: 'first', results: [
    { pl: 'I miejsce, muzyka sakralna', en: '1st place, sacred music' },
    { pl: 'I miejsce, muzyka ludowa', en: '1st place, folk music' },
    { pl: 'I miejsce, muzyka katalońska (dyr. Agata Domalewska)', en: '1st place, Catalan music (cond. Agata Domalewska)' },
  ] },
  { date: '2022-06', year: 2022, event: { pl: 'XXI Międzynarodowy Festiwal Muzyki Chóralnej im. F. Nowowiejskiego', en: '21st F. Nowowiejski International Choral Music Festival' }, city: { pl: 'Barczewo', en: 'Barczewo' }, country: { pl: 'Polska', en: 'Poland' }, tier: 'prize', results: [
    { pl: 'Złoty dyplom w konkursie głównym', en: 'Gold diploma, main competition' },
    { pl: 'Najlepsze wykonanie utworu muzyki dawnej', en: 'Best performance of early music' },
  ] },
  { date: '2020-03', year: 2020, event: { pl: 'Prawykonanie „Te Deum” Zbigniewa Kozuba', en: 'Premiere of Zbigniew Kozub’s “Te Deum”' }, city: { pl: 'Poznań', en: 'Poznań' }, country: { pl: 'Polska', en: 'Poland' }, tier: 'stage', results: [{ pl: 'Na 100-lecie Akademii Muzycznej w Poznaniu', en: 'For the centenary of the Poznań Academy of Music' }] },
  { date: '2018-04', year: 2018, event: { pl: 'XII Festiwal „Misiones de Chiquitos”', en: '12th “Misiones de Chiquitos” Festival' }, city: { pl: 'Chiquitos', en: 'Chiquitos' }, country: { pl: 'Boliwia', en: 'Bolivia' }, tier: 'stage', results: [{ pl: 'Muzyka renesansu i baroku misyjnego', en: 'Renaissance and mission baroque' }] },
  { date: '2017-06', year: 2017, event: { pl: 'London International A Cappella Choir Competition', en: 'London International A Cappella Choir Competition' }, city: { pl: 'Londyn', en: 'London' }, country: { pl: 'Wielka Brytania', en: 'United Kingdom' }, tier: 'stage', results: [{ pl: 'Finał konkursu Petera Phillipsa (The Tallis Scholars)', en: 'Final of Peter Phillips’s competition (The Tallis Scholars)' }] },
  { date: '2016-07', year: 2016, event: { pl: '55. Concorso Internazionale di Canto Corale Seghizzi', en: '55th Seghizzi International Choral Competition' }, city: { pl: 'Gorycja', en: 'Gorizia' }, country: { pl: 'Włochy', en: 'Italy' }, tier: 'first', results: [
    { pl: 'I miejsce, muzyka barokowa', en: '1st place, Baroque music' },
    { pl: 'II miejsce, muzyka renesansowa', en: '2nd place, Renaissance music' },
    { pl: '5. miejsce w konkursie o Grand Prix', en: '5th place in the Grand Prix' },
    { pl: 'Nagroda „Domenico Cieri” za program', en: '“Domenico Cieri” prize for the programme' },
  ] },
  { date: '2014-08', year: 2014, event: { pl: '62. Concorso Polifonico Internazionale Guido d’Arezzo', en: '62nd Guido d’Arezzo International Polyphonic Competition' }, city: { pl: 'Arezzo', en: 'Arezzo' }, country: { pl: 'Włochy', en: 'Italy' }, tier: 'stage', results: [{ pl: 'Udział w konkursie', en: 'Competition entry' }] },
  { date: '2014-04', year: 2014, event: { pl: 'London International A Cappella Choir Competition', en: 'London International A Cappella Choir Competition' }, city: { pl: 'Londyn', en: 'London' }, country: { pl: 'Wielka Brytania', en: 'United Kingdom' }, tier: 'stage', results: [{ pl: 'Udział w konkursie', en: 'Competition entry' }] },
  { date: '2012-11', year: 2012, event: { pl: 'XV Łódzki Festiwal Chóralny Cantio Lodziensis', en: '15th Cantio Lodziensis Choral Festival' }, city: { pl: 'Łódź', en: 'Łódź' }, country: { pl: 'Polska', en: 'Poland' }, tier: 'grand-prix', results: [{ pl: 'Grand Prix', en: 'Grand Prix' }] },
  { date: '2012-10', year: 2012, event: { pl: 'Rimini International Choral Competition', en: 'Rimini International Choral Competition' }, city: { pl: 'Rimini', en: 'Rimini' }, country: { pl: 'Włochy', en: 'Italy' }, tier: 'prize', results: [{ pl: 'Brązowy medal i złoty dyplom', en: 'Bronze medal and gold diploma' }] },
  { date: '2011-09', year: 2011, event: { pl: 'Festiwal „Kampanila”', en: '“Kampanila” Festival' }, city: { pl: 'Mikulov', en: 'Mikulov' }, country: { pl: 'Czechy', en: 'Czechia' }, tier: 'stage', results: [{ pl: 'Koncert: Raczyński, Wacław z Szamotuł', en: 'Concert: Raczyński, Wacław z Szamotuł' }] },
  { date: '2011-07', year: 2011, event: { pl: 'XLVI Międzynarodowy Festiwal Muzyki Chóralnej', en: '46th International Choral Music Festival' }, city: { pl: 'Międzyzdroje', en: 'Międzyzdroje' }, country: { pl: 'Polska', en: 'Poland' }, tier: 'grand-prix', results: [
    { pl: 'Grand Prix w konkursie Musica Sacra', en: 'Grand Prix, Musica Sacra competition' },
    { pl: 'Złoty dyplom w kategorii A', en: 'Gold diploma, category A' },
  ] },
  { date: '2010-10', year: 2010, event: { pl: 'XXII Międzynarodowy Festiwal Muzyki Religijnej im. ks. S. Ormińskiego', en: '22nd Fr. S. Ormiński International Festival of Sacred Music' }, city: { pl: 'Rumia', en: 'Rumia' }, country: { pl: 'Polska', en: 'Poland' }, tier: 'first', results: [{ pl: 'I miejsce w kategorii A', en: '1st place, category A' }] },
  { date: '2009-07', year: 2009, event: { pl: '48. Concorso Internazionale di Canto Corale Seghizzi', en: '48th Seghizzi International Choral Competition' }, city: { pl: 'Gorycja', en: 'Gorizia' }, country: { pl: 'Włochy', en: 'Italy' }, tier: 'stage', results: [{ pl: 'Udział w konkursie', en: 'Competition entry' }] },
  { date: '2008-10', year: 2008, event: { pl: 'IV Międzynarodowy Festiwal Chórów „Gaude Cantem”', en: '4th “Gaude Cantem” International Choir Festival' }, city: { pl: 'Bielsko-Biała', en: 'Bielsko-Biała' }, country: { pl: 'Polska', en: 'Poland' }, tier: 'first', results: [{ pl: 'I miejsce i złoty dyplom, chóry mieszane', en: '1st place and gold diploma, mixed choirs' }] },
];

export const counts = (() => {
  const firsts = awards.reduce((n, a) => n + a.results.filter((r) => /^(I miejsce|I nagroda|Złoty dyplom i I)/.test(r.pl)).length, 0);
  const grandPrix = awards.filter((a) => a.tier === 'grand-prix').length;
  const countries = new Set(awards.map((a) => a.country.en)).size;
  return { firsts, grandPrix, countries };
})();

export type Track = { title: string; composer?: string };
export type Album = {
  id: string;
  title: string;
  year: number;
  label?: string;
  catalogue?: string;
  spotifyAlbum?: string;
  buy?: { url: string; price: string };
  note: Txt;
  performers: Txt;
  tracks: Track[];
};

export const albums: Album[] = [
  {
    id: 'salve-regina',
    title: 'E. Wagner: Salve Regina',
    year: 2025,
    label: 'RecArt',
    catalogue: 'RECART 0073',
    spotifyAlbum: '5etARp5VZMZCcTS2FfyP4Y',
    buy: { url: 'https://www.music-island.pl/opisplyty-RECART+0073.html', price: '29 zł' },
    note: {
      pl: 'Piętnaście antyfon cystersa o. Eustachiusa Wagnera, z zespołem instrumentów dawnych. Trzydzieści minut, pierwsze nagranie.',
      en: 'Fifteen antiphons by the Cistercian Fr. Eustachius Wagner, with a period instrument ensemble. Thirty minutes, a first recording.',
    },
    performers: { pl: 'Chór Kameralny Dysonans, Michał Plichta; Zespół Instrumentów Dawnych, Aureliusz Goliński', en: 'Dysonans Chamber Choir, Michał Plichta; period instrument ensemble, Aureliusz Goliński' },
    tracks: Array.from({ length: 15 }, (_, i) => ({ title: `Salve Regina ${['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV'][i]}`, composer: 'Eustachius Wagner' })),
  },
  {
    id: 'christmas-bells',
    title: 'Christmas Bells',
    year: 2021,
    label: 'Cantamen',
    catalogue: 'CAN 005',
    buy: { url: 'https://www.music-island.pl/opisplyty-CAN+005.html', price: '29 zł' },
    note: {
      pl: 'Kolędy polskie w nowych opracowaniach, kolędy z Boliwii, Ukrainy, Francji i Holandii oraz standardy napisane dla Dysonansu przez Jerzego Mackiewicza.',
      en: 'Polish carols in new arrangements, carols from Bolivia, Ukraine, France and the Netherlands, and standards written for Dysonans by Jerzy Mackiewicz.',
    },
    performers: { pl: 'Magdalena Wdowicka-Mackiewicz, Agata Domalewska; solo: Joanna Bardzka, Julia Żukowska-Karolak', en: 'Magdalena Wdowicka-Mackiewicz, Agata Domalewska; soloists: Joanna Bardzka, Julia Żukowska-Karolak' },
    tracks: [
      { title: 'Cicha noc', composer: 'opr. Jarosław Kostka' },
      { title: 'Przybieżeli do Betlejem', composer: 'opr. Jarosław Kostka' },
      { title: 'Gdy śliczna Panna', composer: 'opr. Michał Wachowiak' },
      { title: 'Tryumfy Króla Niebieskiego', composer: 'opr. Jacek Sykulski' },
      { title: 'Jezus malusieńki', composer: 'opr. Jerzy Mackiewicz' },
      { title: 'Carol of the Bells', composer: 'Mykola Leontovych' },
      { title: 'Nowa radist’ stala', composer: 'opr. Romuald Twardowski' },
      { title: 'Xicochi', composer: 'Gaspar Fernandes' },
      { title: 'Les anges dans nos campagnes', composer: 'trad.' },
      { title: 'Dormi Jesu', composer: 'Luc Jakobs' },
      { title: 'Jingle Bells', composer: 'opr. Jerzy Mackiewicz' },
      { title: 'Santa Claus Is Coming to Town', composer: 'opr. Jerzy Mackiewicz' },
    ],
  },
  {
    id: 'a-che-angele',
    title: 'Ã che Ángele',
    year: 2018,
    label: 'Cantamen',
    catalogue: 'CAN 004',
    spotifyAlbum: '3DwBsnChWIfob6PjPf2QVC',
    buy: { url: 'https://www.music-island.pl/opisplyty-CAN+004.html', price: '32 zł' },
    note: {
      pl: 'Nagranie na żywo: od Palestriny i Monteverdiego po anonimowe utwory z misji Chiquitos, z którymi pojechaliśmy do Boliwii.',
      en: 'Recorded live: from Palestrina and Monteverdi to anonymous pieces from the Chiquitos missions that we took to Bolivia.',
    },
    performers: { pl: 'Magdalena Wdowicka-Mackiewicz; Zuzanna Zięta, sopran; Jerzy Mackiewicz, bombo boliviano', en: 'Magdalena Wdowicka-Mackiewicz; Zuzanna Zięta, soprano; Jerzy Mackiewicz, bombo boliviano' },
    tracks: [
      { title: 'Exultate Deo', composer: 'Alessandro Scarlatti' },
      { title: 'Tu es Petrus', composer: 'Giovanni Pierluigi da Palestrina' },
      { title: 'Cantate Domino', composer: 'Claudio Monteverdi' },
      { title: 'Alla lapia calia', composer: 'Orlando di Lasso' },
      { title: 'Il bianco e dolce cigno', composer: 'Jacob Arcadelt' },
      { title: 'I was glad', composer: 'Henry Purcell' },
      { title: 'All at once well met', composer: 'Thomas Weelkes' },
      { title: 'Już się zmierzka', composer: 'Wacław z Szamotuł' },
      { title: 'Haec dies', composer: 'Mikołaj Zieleński' },
      { title: 'Hanacpachap cussicuinin', composer: 'anonim, Cusco, XVIII w.' },
      { title: 'Sancta Maria e', composer: 'Hernando Franco' },
      { title: 'Dios itlaçonantzine', composer: 'Hernando Franco' },
      { title: 'Ã che Ángele', composer: 'anonim, Chiquitos, XVIII w.' },
      { title: 'Tata guasu ana retamengua', composer: 'anonim, Chiquitos, XVIII w.' },
      { title: 'Salve a 8', composer: 'anonim, Chiquitos, XVIII w.' },
      { title: 'Alleluja, chwalcie Pana', composer: 'Wacław z Szamotuł' },
    ],
  },
  {
    id: 'dysonans-2015',
    title: 'Dysonans 2015',
    year: 2015,
    spotifyAlbum: '74qon85AMMsIQrPBteYe75',
    note: {
      pl: 'Program a cappella od Palestriny po Lauridsena, z utworami, z którymi jeździliśmy po konkursach. Tu jest nasze najczęściej słuchane nagranie.',
      en: 'An a cappella programme from Palestrina to Lauridsen, with the pieces we took to competitions. It holds our most played recording.',
    },
    performers: { pl: 'Magdalena Wdowicka-Mackiewicz; fortepian: Maciej Grosz', en: 'Magdalena Wdowicka-Mackiewicz; piano: Maciej Grosz' },
    tracks: [
      { title: 'Sagittae potentis acutae', composer: 'Giovanni Pierluigi da Palestrina' },
      { title: 'Vox in Rama', composer: 'Mikołaj Zieleński' },
      { title: 'Exsultate Deo', composer: 'Alessandro Scarlatti' },
      { title: 'Remember not, Lord, our offences', composer: 'Henry Purcell' },
      { title: 'Hosanna to the Son of David', composer: 'Orlando Gibbons' },
      { title: 'When David heard', composer: 'Thomas Tomkins' },
      { title: 'Ave Maria', composer: 'Andrzej Koszewski' },
      { title: 'The Lamb', composer: 'John Tavener' },
      { title: 'Zimniaja doroga', composer: 'Wissarion Szebalin' },
      { title: 'Rondo Lapponico', composer: 'Gunnar Hahn' },
      { title: 'Dieu! qu’il la fait bon regarder!', composer: 'Claude Debussy' },
      { title: 'El Hambo', composer: 'Jaakko Mäntyjärvi' },
      { title: 'Dirait-on', composer: 'Morten Lauridsen' },
    ],
  },
];

export const signatureTrack = {
  spotifyTrack: '0OlQdQviBmZrAWit9PiGGV',
  title: 'Exsultate Deo',
  composer: 'Alessandro Scarlatti',
  album: 'Dysonans 2015',
  albumId: 'dysonans-2015',
  duration: '2:47',
  why: {
    pl: 'Nasze najczęściej słuchane nagranie na Spotify. Od Scarlattiego zaczął się też koncert na nasze 35-lecie.',
    en: 'Our most played recording on Spotify. Scarlatti also opened our 35th-anniversary concert.',
  } as Txt,
};

export type Video = { id: string; title: string; composer?: string; era: Txt; kind: 'concert' | 'film' };

export const videos: Video[] = [
  { id: 'W9_0ad-gUWU', title: 'Cantate Domino', composer: 'Claudio Monteverdi', era: { pl: 'Barok', en: 'Baroque' }, kind: 'concert' },
  { id: 'o-Md9nnyDOc', title: 'Tu es Petrus', composer: 'Giovanni Pierluigi da Palestrina', era: { pl: 'Renesans', en: 'Renaissance' }, kind: 'concert' },
  { id: 'UGC2nrvrSOo', title: 'Vox in Rama', composer: 'Mikołaj Zieleński', era: { pl: 'Barok polski', en: 'Polish Baroque' }, kind: 'concert' },
  { id: 'Hoyaq9VOxwU', title: 'The Lamb', composer: 'John Tavener', era: { pl: 'Współczesność', en: 'Contemporary' }, kind: 'concert' },
  { id: 'nlXgFodMqSQ', title: 'El Hambo', composer: 'Jaakko Mäntyjärvi', era: { pl: 'Współczesność', en: 'Contemporary' }, kind: 'concert' },
  { id: '-3rPraRWZXU', title: 'Zimowa droga', composer: 'Wissarion Szebalin', era: { pl: 'XX wiek', en: '20th century' }, kind: 'concert' },
  { id: '1D5B-JYkZKg', title: 'Jingle Bells', composer: 'opr. Jerzy Mackiewicz', era: { pl: 'Opracowania', en: 'Arrangements' }, kind: 'concert' },
  { id: 'rSwlNdnzYEo', title: 'Wiele pasji, jedna miłość', era: { pl: 'Film', en: 'Film' }, kind: 'film' },
  { id: 'ujEyS3X6KIM', title: 'Dysonans w Boliwii: dzień zero', era: { pl: 'Film z trasy', en: 'Tour film' }, kind: 'film' },
];

export type FestEvent = { day: Txt; time: string; title: Txt; who?: string; where: Txt; dysonans?: boolean };
export type Edition = {
  n: string;
  year: number;
  dates: Txt;
  theme: Txt;
  summary: Txt;
  events: FestEvent[];
  programme?: Txt;
};

const library: Txt = { pl: 'Biblioteka Publiczna, Sieraków', en: 'Public Library, Sieraków' };

export const festival = {
  name: 'Muzyka Warta Słuchania',
  venue: { pl: 'Biblioteka Publiczna Gminy Sieraków, ul. 8 Stycznia 12B', en: 'Sieraków Public Library, ul. 8 Stycznia 12B' } as Txt,
  organisers: { pl: 'Stowarzyszenie Promocji Kultury Cantamen i Sierakowski Ośrodek Kultury', en: 'The Cantamen Association and the Sieraków Cultural Centre' } as Txt,
  director: 'Magdalena Wdowicka-Mackiewicz',
  funding: { pl: 'Dofinansowano ze środków Powiatu Międzychodzkiego i Gminy Sieraków. Patronat: Radio Poznań.', en: 'Funded by Międzychód County and the Sieraków Commune. Media patron: Radio Poznań.' } as Txt,
  editions: [
    {
      n: 'III', year: 2026,
      dates: { pl: '4–6 września 2026', en: '4–6 September 2026' },
      theme: { pl: 'Folk i muzyka ludowa', en: 'Folk music' },
      summary: { pl: 'Festiwal zamknął koncert na 35-lecie Dysonansu: muzyka sakralna od Scarlattiego po Gyöngyösiego, a potem pieśni ludowe w opracowaniach Koziej, Wiechowicza i Łukaszewskiego.', en: 'The festival closed with Dysonans’ 35th-anniversary concert: sacred music from Scarlatti to Gyöngyösi, then folk songs arranged by Koziej, Wiechowicz and Łukaszewski.' },
      events: [
        { day: { pl: 'Niedziela, 6 września', en: 'Sunday, 6 September' }, time: '18:00', title: { pl: 'Koncert na 35-lecie Dysonansu', en: 'Dysonans 35th-anniversary concert' }, who: 'Chór Kameralny Dysonans · M. Wdowicka-Mackiewicz, M. Plichta', where: library, dysonans: true },
      ],
      programme: { pl: 'A. Scarlatti, Exsultate Deo · M. Raczyński · T. Kverno · H. Howells · R. L. Pearsall · L. Gyöngyösi · Z. Koziej · S. Wiechowicz · W. Lutosławski / P. Łukaszewski · Będziesz moją Panią', en: 'A. Scarlatti, Exsultate Deo · M. Raczyński · T. Kverno · H. Howells · R. L. Pearsall · L. Gyöngyösi · Z. Koziej · S. Wiechowicz · W. Lutosławski / P. Łukaszewski · Będziesz moją Panią' },
    },
    {
      n: 'II', year: 2025,
      dates: { pl: '5–7 września 2025', en: '5–7 September 2025' },
      theme: { pl: 'Muzyka Ameryki Południowej', en: 'Music of South America' },
      summary: { pl: 'Trzy dni koncertów i warsztatów wokół baroku misyjnego. Gościem był o. prof. Piotr Nawrot SVD, który otworzył wystawę o swojej pracy w Zamku Opalińskich.', en: 'Three days of concerts and workshops around mission baroque. The guest was Fr. Prof. Piotr Nawrot SVD, who opened an exhibition on his work at the Opaliński Castle.' },
      events: [
        { day: { pl: '5–7 września', en: '5–7 September' }, time: '', title: { pl: 'Wykład „Ucząc Indian Chiquito, Moxo i Guarani muzyki baroku z ich własnej tradycji”', en: 'Lecture: teaching the Chiquito, Moxo and Guaraní baroque music from their own tradition' }, who: 'o. prof. Piotr Nawrot SVD', where: { pl: 'Sieraków', en: 'Sieraków' } },
        { day: { pl: '5–19 września', en: '5–19 September' }, time: '', title: { pl: 'Wystawa „Śladami baroku misyjnego”', en: 'Exhibition “In the footsteps of mission baroque”' }, who: 'Muzeum Misyjno-Etnograficzne Księży Werbistów, Pieniężno', where: { pl: 'Muzeum – Zamek Opalińskich', en: 'Museum – Opaliński Castle' } },
        { day: { pl: 'Wieczór', en: 'Evening' }, time: '', title: { pl: 'Koncert muzyki z archiwów misyjnych', en: 'Concert of music from the mission archives' }, who: 'Chór Kameralny Dysonans', where: library, dysonans: true },
        { day: { pl: 'Wieczór', en: 'Evening' }, time: '', title: { pl: 'Projekcja filmu „Misja”', en: 'Screening of “The Mission”' }, where: { pl: 'Sieraków', en: 'Sieraków' } },
      ],
    },
    {
      n: 'I', year: 2024,
      dates: { pl: '6–8 września 2024', en: '6–8 September 2024' },
      theme: { pl: 'Muzyka chóralna', en: 'Choral music' },
      summary: { pl: 'Pierwsza edycja zainspirowana sztuką „Kolacja na cztery ręce”: pojedynek Bacha i Haendla na chóry, sekstet Affabre Concinui i dziewczęce Skowronki.', en: 'The first edition was inspired by the play “Dinner for Four Hands”: Bach and Handel duelling in choruses, the Affabre Concinui sextet and the Skowronki girls’ choir.' },
      events: [
        { day: { pl: 'Piątek, 6 września', en: 'Friday, 6 September' }, time: '12:00', title: { pl: 'Wykład o Władysławie Zamoyskim', en: 'Lecture on Władysław Zamoyski' }, who: 'Roman Chalasz', where: { pl: 'Sala SOK, ul. Poznańska 25', en: 'SOK hall, ul. Poznańska 25' } },
        { day: { pl: 'Piątek, 6 września', en: 'Friday, 6 September' }, time: '19:00', title: { pl: 'Bach i Haendel – pojedynek mistrzów', en: 'Bach and Handel: a duel of masters' }, who: 'Chór Kameralny Dysonans & Accademia dell’Arcadia', where: library, dysonans: true },
        { day: { pl: 'Sobota, 7 września', en: 'Saturday, 7 September' }, time: '13:00', title: { pl: 'Warsztaty muzyczne dla dzieci i seniorów', en: 'Music workshops for children and seniors' }, where: library },
        { day: { pl: 'Sobota, 7 września', en: 'Saturday, 7 September' }, time: '19:00', title: { pl: 'Koncert zespołu Affabre Concinui', en: 'Affabre Concinui in concert' }, who: 'Affabre Concinui', where: library },
        { day: { pl: 'Sobota, 7 września', en: 'Saturday, 7 September' }, time: '20:30', title: { pl: 'Kino nad Wartą: „Kolacja na cztery ręce”', en: 'Cinema by the Warta: “Dinner for Four Hands”' }, where: { pl: 'Teren wokół Biblioteki', en: 'Library grounds' } },
        { day: { pl: 'Niedziela, 8 września', en: 'Sunday, 8 September' }, time: '18:00', title: { pl: 'Koncert Chóru Dziewczęcego Skowronki', en: 'Skowronki Girls’ Choir in concert' }, who: 'A. Szeluga, D. Nakielna', where: library },
      ],
      programme: { pl: 'J. S. Bach, Lobet den Herrn BWV 230 · Herz und Mund und Tat und Leben BWV 147 · G. F. Haendel, Mesjasz HWV 56: And the glory of the Lord, Hallelujah, Worthy is the Lamb, Amen', en: 'J. S. Bach, Lobet den Herrn BWV 230 · Herz und Mund und Tat und Leben BWV 147 · G. F. Handel, Messiah HWV 56: And the glory of the Lord, Hallelujah, Worthy is the Lamb, Amen' },
    },
  ] as Edition[],
};

export const concerts = [
  { date: { pl: '6 września 2026', en: '6 September 2026' }, title: { pl: 'Koncert na 35-lecie', en: '35th-anniversary concert' }, place: { pl: 'Muzyka Warta Słuchania, Sieraków', en: 'Muzyka Warta Słuchania, Sieraków' }, time: '18:00' },
  { date: { pl: '9 marca 2026', en: '9 March 2026' }, title: { pl: 'Brzmienia, z Chórem Metrum', en: 'Brzmienia, with the Metrum Choir' }, place: { pl: 'Scena to dziwna, Gniezno', en: 'Scena to dziwna, Gniezno' }, time: '' },
  { date: { pl: 'Listopad 2025', en: 'November 2025' }, title: { pl: 'Entrecoros', en: 'Entrecoros' }, place: { pl: 'Meksyk', en: 'Mexico City' }, time: '' },
  { date: { pl: '5–7 września 2025', en: '5–7 September 2025' }, title: { pl: 'Muzyka z archiwów misyjnych', en: 'Music from the mission archives' }, place: { pl: 'Muzyka Warta Słuchania, Sieraków', en: 'Muzyka Warta Słuchania, Sieraków' }, time: '' },
  { date: { pl: '6 września 2024', en: '6 September 2024' }, title: { pl: 'Bach i Haendel – pojedynek mistrzów', en: 'Bach and Handel: a duel of masters' }, place: { pl: 'Muzyka Warta Słuchania, Sieraków', en: 'Muzyka Warta Słuchania, Sieraków' }, time: '19:00' },
];
