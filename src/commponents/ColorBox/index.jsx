import React, { useState } from 'react';

ColorBox.propTypes = {

};

function ColorBox(props) {
    const [backgroundColor, setColor] = useState('#008000');
    return (
        <div>
            <button style={{ backgroundColor }} onClick={() => setColor('#008000')}>Màu Xanh</button>
            <button style={{ backgroundColor }} onClick={() => setColor('#ff0000')}>Màu Đỏ</button>
        </div>
    );
}

export default ColorBox;