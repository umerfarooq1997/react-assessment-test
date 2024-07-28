const SelectBox = ({ options, onChange, value, name }) =>
  <select
    className={`text-sm border ${value ? 'border-[#2a2a2a]' : ' border-[#ddd]'} rounded h-9 px-2 !outline-none w-full md:!max-w-fit appearance-none`}
    onChange={(e) => onChange && onChange({
      name,
      value: e.target.value,
    })}
    value={value}
  >
    {options?.length ? options.map((item) => <option key={item.value || 'default'} value={item.value || ''}>{item.label}</option>) : undefined}
  </select>;

export default SelectBox;
