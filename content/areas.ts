// Service-area data — communities within roughly 25 miles of Cincinnati.
// Single source of truth: edit here and it updates the /service-areas page,
// every service page's coverage block, and the footer.
//
// Structure mirrors the areas page on cincydegreeofcomfort.com: counties first,
// then the communities grouped under each one.

export const serviceCounties: { name: string; state: string }[] = [
  { name: 'Hamilton County', state: 'OH' },
  { name: 'Kenton County', state: 'KY' },
  { name: 'Campbell County', state: 'KY' },
  { name: 'Boone County', state: 'KY' },
  { name: 'Clermont County', state: 'OH' },
  { name: 'Butler County', state: 'OH' },
  { name: 'Warren County', state: 'OH' },
  { name: 'Dearborn County', state: 'IN' },
];

export const serviceCommunities: { county: string; places: string[] }[] = [
  {
    county: 'Cincinnati Neighborhoods',
    places: [
      'Downtown / Central Business District', 'Pendleton', 'Over-the-Rhine', 'Mount Adams',
      'West End', 'Queensgate', 'Mount Auburn', 'CUF (Clifton Hts–University Hts–Fairview)',
      'Lower Price Hill', 'Corryville', 'Walnut Hills', 'Camp Washington', 'East Walnut Hills',
      'South Fairmount', 'East End', 'Avondale', 'Clifton', 'North Fairmount', 'East Price Hill',
      'Sedamsville', 'Evanston', 'South Cumminsville', 'English Woods', 'North Avondale', 'Millvale',
      'Columbia-Tusculum', 'Northside', 'Paddock Hills', 'Hyde Park', 'Mount Lookout',
      'Spring Grove Village', 'Linwood', 'Riverside', 'Bond Hill', 'West Price Hill',
      'Villages of Roll Hill', 'East Westwood', 'Western Hills', 'Oakley', 'California', 'Carthage',
      'Westwood', 'Winton Hills', 'Roselawn', 'Mount Airy', 'College Hill', 'Mount Washington',
      'Pleasant Ridge', 'Madisonville', 'Hartwell', 'Kennedy Heights', 'Sayler Park',
    ],
  },
  {
    county: 'Hamilton County, OH',
    places: [
      'St. Bernard', 'Norwood', 'Covedale', 'Elmwood Place', 'Delhi Hills', 'Golf Manor', 'Cheviot',
      'Fairfax', 'Mack', 'Monfort Heights', 'Bridgetown', 'Mariemont', 'Finneytown', 'Amberley',
      'Arlington Heights', 'North College Hill', 'Newtown', 'Turpin Hills', 'Silverton', 'Lockland',
      'Groesbeck', 'Wyoming', 'Mount Healthy', 'Reading', 'Dent', 'Deer Park', 'Terrace Park',
      'Dry Run', 'White Oak', 'Forestville', 'Cherry Grove', 'Madeira', 'Kenwood', 'Lincoln Heights',
      'Dillonvale', 'Woodlawn', 'Addyston', 'Blue Ash', 'Greenhills', 'Northbrook', 'Indian Hill',
      'Evendale', 'Glendale', 'Montgomery', 'Sharonville', 'Northgate', 'Springdale', 'Miamitown',
      'Forest Park', 'Pleasant Run', 'Cleves', 'North Bend', 'Loveland', 'Harrison',
    ],
  },
  {
    county: 'Kenton County, KY',
    places: [
      'Covington', 'Ludlow', 'Park Hills', 'Bromley', 'Fort Wright', 'Fort Mitchell', 'Villa Hills',
      'Lakeside Park', 'Crescent Springs', 'Crestview Hills', 'Edgewood', 'Taylor Mill', 'Erlanger',
      'Elsmere', 'Independence',
    ],
  },
  {
    county: 'Campbell County, KY',
    places: [
      'Newport', 'Bellevue', 'Dayton', 'Southgate', 'Fort Thomas', 'Wilder', 'Highland Heights',
      'Cold Spring', 'Alexandria', 'Melbourne',
    ],
  },
  {
    county: 'Boone County, KY',
    places: ['Florence', 'Hebron', 'Burlington', 'Union', 'Walton'],
  },
  {
    county: 'Clermont County, OH',
    places: [
      'Mount Carmel', 'Summerside', 'Withamsville', 'Milford', 'Mulberry', 'Mount Repose',
      'Day Heights', 'New Richmond', 'Amelia', 'Batavia', 'Owensville', 'Goshen', 'Moscow',
      'Newtonsville', 'Williamsburg', 'Bethel',
    ],
  },
  {
    county: 'Butler County, OH',
    places: [
      'Ross', 'Fairfield', 'West Chester', 'Beckett Ridge', 'Wetherington', 'Hamilton', 'Millville',
      'New Miami', 'Monroe',
    ],
  },
  {
    county: 'Warren County, OH',
    places: ['Landen', 'Loveland Park', 'Mason', 'Maineville', 'Pleasant Plain', 'South Lebanon'],
  },
  {
    county: 'Dearborn County, IN',
    places: ['Lawrenceburg', 'Greendale', 'Aurora'],
  },
];

export const communityCount = serviceCommunities.reduce((n, g) => n + g.places.length, 0);

/** A short, recognizable subset for compact coverage strips on service pages. */
export const featuredPlaces = [
  'Cincinnati', 'Hyde Park', 'Oakley', 'Norwood', 'Blue Ash', 'Montgomery', 'Mariemont',
  'Anderson Township', 'Loveland', 'Mason', 'West Chester', 'Milford', 'Covington, KY',
  'Fort Mitchell, KY', 'Fort Thomas, KY', 'Newport, KY', 'Florence, KY', 'Union, KY',
];
