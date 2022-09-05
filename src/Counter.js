import { useState } from 'react';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';

export function Counter() {
    // let like = 10;
    const [like, setLike] = useState(0);
    const [disLike, setDisLike] = useState(0);
    const styles = { background: like > 5 ? "deepskyblue" : "orange" };
    const likePercent = (like / (like + disLike)) * 100;
    const incrementLike = () => setLike(like + 1);
    const incrementDisLike = () => setDisLike(disLike + 1);

    return (
        <div className='counter-container'>
            {/* {like > 10 ? <h3>You have won people's heart ❤😍</h3> : null} */}
            {/* <progress
                className='counter-progress'
                max="100"
                value={Number.isNaN(likePercent) ? 0 : likePercent}
            ></progress> */}
            <div className="counter-button-container">
                <IconButton color="primary" aria-label="delete">
                    <Badge badgeContent={like} onClick={incrementLike} color="primary">
                        👍
                    </Badge>
                </IconButton>
                <IconButton color="error" aria-label="delete">
                    <Badge badgeContent={disLike} onClick={incrementDisLike} color="error">
                        👎
                    </Badge>
                </IconButton>
            </div>
        </div>
    );
}
