import React from 'react'
import Folder from './Folder';
import explorer from './FolderData';

const DisplayData = () => {
    return (
        
        <div>
            <Folder explorer={explorer}/>
        </div>
    )
}

export default DisplayData;