import { useState } from 'react';
import React from 'react';
import Button from '@mui/material/Button';
import { ColorBox } from './ColorBox';

export function ColorGame() {
    const [color, setColor] = useState("yellow");
    const styles = {
        background: color
    };
    const [colorList, setColorList] = useState(["orange", "red", "green"]);
    return (
        <div>
            <input
                value={color}
                style={styles}
                onChange={(event) => setColor(event.target.value)}
                placeholder="Enter a color" />

            <Button
                onClick={() => setColorList([...colorList, color])}
                variant="outlined">
                Add Color
            </Button>
            {colorList.map((clr) => (
                <ColorBox color={clr} />
            ))}
        </div>
    );
}
