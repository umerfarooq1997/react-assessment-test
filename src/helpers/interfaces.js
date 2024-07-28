const apiInit = {
  articles: [],
  status: undefined,
  totalResults: 0,
};

const sortByValues = [
  {
    label: 'Sort By',
    value: undefined,
  },
  {
    label: 'Relevanc',
    value: 'relevancy',
  },
  {
    label: 'Popular',
    value: 'popularity',
  },
  {
    label: 'Newest',
    value: 'publishedAt',
  },
];

const selectBoxValues = [
  {
    label: 'By Category',
    value: undefined,
  },
  {
    label: 'Bitcoin',
    value: 'bitcoin',
  },
  {
    label: 'Bussiness',
    value: 'bussiness',
  },
  {
    label: 'Entertainment',
    value: 'entertainment',
  },
  {
    label: 'Sports',
    value: 'sports',
  },
  {
    label: 'Technology',
    value: 'technology',
  },
  {
    label: 'Health',
    value: 'health',
  },
  {
    label: 'Science',
    value: 'science',
  },
];

export {
  apiInit,
  selectBoxValues,
  sortByValues,
};
