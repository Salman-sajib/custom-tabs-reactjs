/* eslint-disable react/prop-types */
import { useState } from 'react';

function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className='p-2'>
      <div className='flex justify-center mb-3'>
        {tabsContent.map((tabItem, index) => (
          <div
            className={`${
              currentTabIndex === index ? 'bg-orange-500' : 'bg-blue-800'
            } text-white flex flex-col text-3xl font-bold text-center px-4 py-3 cursor-pointer hover:bg-orange-500`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span> {tabItem.label} </span>
          </div>
        ))}
      </div>
      <div className='text-center text-neutral-700 mt-20 font-bold text-4xl'>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
