import Tabs from './Tabs';

function RandomComponent() {
  return <div>This is a random component</div>;
}

function TabTest() {
  const tabs = [
    {
      label: 'Tab 1',
      content: <div>This is the content for Tab 1</div>,
    },
    {
      label: 'Tab 2',
      content: <div>This is the content for Tab 2</div>,
    },
    {
      label: 'Tab 3',
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}

export default TabTest;
