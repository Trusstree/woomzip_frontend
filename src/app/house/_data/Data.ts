type Category = {
  title: string;
  imgSrc: string;
  queryName: string;
  category?: string;
};

type Filter = {
  label: String;
  queryName: String | Array<String>;
  queryData: Array<any>;
  selected?: boolean;
};

export const categoryList: Array<Category> = [
  {
    title: '전체',
    imgSrc: '/buttonIcons/all1.png',
    queryName: 'tag',
  },
  {
    title: '농막',
    imgSrc: '/buttonIcons/nongmak.png',
    queryName: 'tag',
    category: '농막',
  },
  {
    title: '체류형쉼터',
    imgSrc: '/buttonIcons/farmvisit.png',
    queryName: 'tag',
    category: '체류형쉼터',
  },
  {
    title: '고급스러운',
    imgSrc: '/buttonIcons/luxury.png',
    queryName: 'tag',
    category: '고급스러운',
  },
  {
    title: '가성비',
    imgSrc: '/buttonIcons/scale.png',
    queryName: 'tag',
    category: '가성비',
  },
  {
    title: '한옥',
    imgSrc: '/buttonIcons/hanok.png',
    queryName: 'tag',
    category: '한옥',
  },
  {
    title: '통나무집',
    imgSrc: '/buttonIcons/cabin.png',
    queryName: 'tag',
    category: '통나무집',
  },
  {
    title: '특이한',
    imgSrc: '/buttonIcons/unique.png',
    queryName: 'tag',
    category: '특이한',
  },
  {
    title: '우주선',
    imgSrc: '/buttonIcons/spaceship.png',
    queryName: 'tag',
    category: '우주선',
  },
  {
    title: '다락방',
    imgSrc: '/buttonIcons/garret.png',
    queryName: 'tag',
    category: '다락방',
  },
  {
    title: '찜질방',
    imgSrc: '/buttonIcons/sauna.png',
    queryName: 'tag',
    category: '찜질방',
  },
  {
    title: '세모지붕',
    imgSrc: '/buttonIcons/triangleloop.png',
    queryName: 'tag',
    category: '세모지붕',
  },
  {
    title: '평지붕',
    imgSrc: '/buttonIcons/flatloop.png',
    queryName: 'tag',
    category: '평지붕',
  },
  // {
  //   title: '미국식',
  //   imgSrc: 'https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png',
  //   category: '미국식',
  // },
  // {
  //   title: '유럽식',
  //   imgSrc: 'https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png',
  //   category: '유럽식',
  // },
  // {
  //   title: '모던한',
  //   imgSrc: 'https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png',
  //   category: '모던한',
  // },
  // {
  //   title: '아늑한',
  //   imgSrc: 'https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png',
  //   category: '아늑한',
  // },
  // {
  //   title: '탁 트여있는',
  //   imgSrc: 'https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png',
  //   category: '탁트여있는',
  // },
];

export const filterList: Array<Filter> = [
  {
    label: '가격',
    queryName: ['min_price', 'max_price'],
    queryData: [
      [0, 2500_0000],
      [2500_0000, 5000_0000],
      [5000_0000, 7500_0000],
      [7500_0000, 1_0000_0000],
      [1_0000_0000, 1_2500_0000],
    ],
  },
  {
    label: '평수',
    queryName: ['floor_area_min', 'floor_area_max'],
    queryData: [
      [1, 6],
      [6, 10],
      [10, 14],
      [14, 18],
      [18, 22],
      [22, 26],
    ],
  },
  { label: '침실', queryName: 'room_count', queryData: [1, 2] },
  // { label: '욕실', queryName: 'toilet_count', queryData: [1, 2] },
  { label: '층', queryName: 'floor_count', queryData: [1, 2] },
  { label: '골조', queryName: 'frame', queryData: ['경량목', '경량스틸', '기타'], selected: true },
  { label: 'AS', queryName: 'warranty', queryData: [12, 24] },
  // {
  //   label: '특이사항',
  //   queryName: 'specificity',
  //   queryData: ['데크', '다락방', '발코니', '베란다', '옥상'],
  //   selected: true,
  // },
];

export const badgeList = [
  'min_price',
  'max_price',
  'floor_area_min',
  'floor_area_max',
  'room_count',
  'toilet_count',
  'floor_count',
  'estimate_duration',
  'warranty',
  'tag',
  'is_hut',
  'has_model',
  'specificity',
  'frame',
];
