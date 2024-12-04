type Filter = {
  label: String;
  queryName: String | Array<String>;
  queryData: Array<any>;
  selected?: boolean;
};

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
