import React from 'react';
import CreateItem from './CreateItem';
import ReadItems from './ReadItems';
import UpdateItem from './UpdateItem';
//import DeleteItem from './DeleteItem';

const CRUDWrapper: React.FC = () => {
  return (
    <div className="flex justify-center gap-8 p-8">
      <div className="w-1/4">
        <CreateItem />
      </div>
      <div className="w-1/4">
        <ReadItems />
      </div>
      <div className="w-1/4">
        <UpdateItem />
      </div>
    
    </div>
  );
};

export default CRUDWrapper;

