import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPages} = props;
    return (
        <div className="pagination">
            <button onClick={onLeftClick} >
                <div>Down</div>
            </button>
            <div>{page} of {totalPages}</div>
            <button onClick={onRightClick}>
                <div>Up</div>
            </button>
        </div>
    )
}


export default Pagination;