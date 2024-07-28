import React, { memo } from 'react';

const Modal = (props) => {
  const { children, toggle, size, open, hideTimes } = props;

  return (
    <div className={`fixed inset-0 bg-[#000000db] z-[50] md:items-center transition-all ${open ? 'grid opacity-1' : 'hidden opacity-0'} modal-class`}>
      <div className={`bg-white md:rounded-[8px] min-h-[50px] max-h-[calc(100vh-40px)] overflow-y-scroll scrollbar-hide mx-auto  ${size ? `${size} w-[95vw] mt-4 md:mt-0` : 'md:min-w-[400px]'}`}>
        <div className="border-b-[0px] border-border-primary px-[18px] text-[20px] font-semibold sticky top-0 bg-white z-[1]">
          {
            !hideTimes ?
              <button className="block absolute right-3 top-3 w-[14px] h-[14px] cursor-pointer" onClick={() => toggle(false)} type="button">
                {'X'}
              </button>
              : undefined
          }
        </div>

        <div>{open ? children : undefined}</div>
      </div>
    </div>
  );
};

export default memo(Modal);
