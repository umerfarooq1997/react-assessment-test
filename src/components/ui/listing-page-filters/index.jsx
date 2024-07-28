
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

import { selectBoxValues, sortByValues } from '../../../helpers/interfaces';
import SelectBox from '../../elements/filters/select-box';
import DatePicker from '../../elements/filters/date-filter';

const filterInit = {
  endDate: '',
  q: '',
  sortBy: '',
  startDate: '',
};

const ListingPageFilters = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const navigate = useNavigate();
  const [filter, setFilters] = useState(filterInit);

  // MAIN NAVGATION FUNCTION
  const navigateTo = (getFilters) => {
    const { startDate, endDate, q, sortBy } = getFilters;
    const endPoint = `/search/${q || params?.q || 'entertainment'}?${startDate && endDate ? `&from=${startDate}&to=${endDate}` : ''}${sortBy ? `&sortBy=${sortBy}` : ''}`;

    navigate(endPoint);
  };

  // ONCHANGE FUNCTION FOR SELECT BOX
  const onChange = ({ name, value }) => {
    navigateTo({
      ...filter,
      [name]: value,
    });

    setFilters({
      ...filter,
      [name]: value,
    });
  };

  // ONCHANGE FUCTION FOR DATEPICKER
  const onChangeDate = (date) => {
    const { startDate, endDate } = date;

    if (startDate && endDate) {
      navigateTo({
        ...filter,
        ...date,
      });
    }

    setFilters({
      ...filter,
      ...date,
    });
  };

  return (
    <div className="px-4 md:px-0 flex gap-2">
      <SelectBox name="sortBy" onChange={onChange} options={sortByValues} value={searchParams.get('sortBy') || ''} />

      <SelectBox name="q" onChange={onChange} options={selectBoxValues} value={params?.q || ''} />

      <div className="w-full md:w-60">
        <DatePicker
          onChangeDate={onChangeDate}
          startEndDate={searchParams.get('from') ?
            {
              endDate: searchParams.get('to'),
              startDate: searchParams.get('from'),
            } : filter}
        />
      </div>
    </div>
  );
};

export default ListingPageFilters;
