import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Nhạc Pop Việt Nam Ngày Nay",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/1/4/8/7148b028ef936d8ef264376b7146997d.jpg"
        },
        {
            id: 2,
            name: "Nhạc Trẻ Gây Nghiện",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/0/5/c/f05c599832086a0a60f1105db362619f.jpg"
        },
        {
            id: 3,
            name: "Đỉnh Cao Trending",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/4/e/4/e4e4c3a0a45fedde9fe498ab32c2e8ba.jpg"
        },
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;