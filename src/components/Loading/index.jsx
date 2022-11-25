import React from 'react';
import { ClipLoader } from 'react-spinners';

import './loading.scss';

const Loading = () => {
    return (
        <div className="loader">
            <div style={{ margin: 'auto' }}>
                <ClipLoader size={150} />
            </div>
        </div>
    );
};

export default Loading;
