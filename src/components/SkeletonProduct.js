import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonProduct = () => {
    return (
        <div className="border rounded-lg p-4">
            <Skeleton height={200} />
            <Skeleton count={1} style={{ marginTop: 10 }} />
        </div>
    );
};

export default SkeletonProduct;
