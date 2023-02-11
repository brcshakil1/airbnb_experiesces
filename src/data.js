import img1 from './images/image-1.png';
import img2 from './images/image-2.png';
import img3 from './images/image-3.png';

import star from './images/Star-1.png';


const data = [
    {
        id:1,
        title: 'Life lessons with Katie Zaferes',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere qui neque et, eum quibusdam ad?',
        priced: 136,
        coverImg: img1,
        stats: {
            star:star,
            rating:' 5.0',
            reviewCount: 6
        },
        location: 'Online',
        openSpots: 0

    },
    {
        id:2,
        title: 'Learn wedding photography',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere qui neque et, eum quibusdam ad?',
        priced: 125,
        coverImg: img2,
        stats: {
            star:star,
            rating: '5.0',
            reviewCount: 30
        },
        location: 'Online',
        openSpots: 27

    },
    {
        id:3,
        title: 'Group Mountain Biking',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere qui neque et, eum quibusdam ad?',
        priced: 50,
        coverImg: img3,
        stats: {
            star:star,
            rating: '4.8',
            reviewCount: 60
        },
        location: 'Offline',
        openSpots: 15

    }
]

export default data;