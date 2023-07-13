import React, { useRef, useState } from 'react';

export default function App() {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <input
          placeholder={'Enter Keyword'}
          value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value);
          }}
        />
        <AnimatePresence>
          {searchQuery?.length >= 1 && (
            <motion.div
              style={{ overflow: 'hidden' }}
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              transition={{ duration: 0.5 }}
              exit={{ height: 0 }}
              key={'container'}
            >
              {dataList?.map(listItem => (
                <div
                  style={{
                    padding: '1rem',
                    color: '#E090EE',
                    borderBottom: '1px solid #E1E1E1',
                  }}
                >
                  {listItem.activity_title}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
