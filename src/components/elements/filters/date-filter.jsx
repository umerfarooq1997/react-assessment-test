import { useState } from 'react';

const DateFiled = ({ placeholder, name, value, onChange, min, max }) => {
  const [onFocus, setOnFocus] = useState(false);

  const onChangeFocusOut = (e) => {
    if (name === 'endDate') {
      setOnFocus(false);
      onChange({
        name: e.name,
        value: e.value,
      });
    }
  };

  return (
    <div className="">
      <input
        className={`w-full outline-none shadow-none border rounded-[5px] h-full px-[15px] min-h-9 ${value ? 'border-[#2a2a2a]' : ' border-[#ddd]'}`}
        max={max}
        min={min}
        onBlur={() => setOnFocus(false)}
        onChange={(e) => onChangeFocusOut({
          name,
          value: e.target.value,
        })}
        onFocus={() => setOnFocus(true)}
        placeholder={placeholder}
        type={onFocus ? 'date' : 'text'}
        value={value}
      />
    </div>
  );
};

const DatePicker = ({ onChangeDate, startEndDate }) => {
  // ON CHANGE
  const onChange = ({ name, value }) => {
    const newDate = { ...startEndDate };

    if (name === 'startDate') {
      newDate[name] = value;
      newDate.endDate = '';
    } else {
      newDate[name] = value;
    }

    if (onChangeDate) {
      onChangeDate(newDate);
    }
  };

  return (
    <div className="text-[14px] min-h-[38px] flex gap-2 items-center justify-center">
      <div className="flex-1">
        <DateFiled name="startDate" onChange={onChange} placeholder="Start Date" value={startEndDate?.startDate} />
      </div>

      <div className="flex-1">
        <DateFiled min={startEndDate?.startDate} name="endDate" onChange={onChange} placeholder="End Date" value={startEndDate?.endDate} />
      </div>
    </div>
  );
};

export default DatePicker;

export {
  DateFiled,
};
