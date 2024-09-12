// import React from 'react'

// const StarRating = () => {
//     console.log(rating);
//     const RoundedRating = Math.round(rating);
//     return (
//         <div className="rating justify-center w-full mb-5 gap-2 mt-7 rating-lg">
//             <input
//                 type="radio"
//                 name="rating-8"
//                 className="mask mask-star-2 bg-orange-400"
//                 value={1}
//                 checked={RoundedRating === 1}
//                 readOnly
//             />
//             <input
//                 type="radio"
//                 name="rating-8"
//                 className="mask mask-star-2 bg-orange-400"
//                 value={2}
//                 checked={RoundedRating === 2}
//                 readOnly
//             />
//             <input
//                 type="radio"
//                 name="rating-8"
//                 className="mask mask-star-2 bg-orange-400"
//                 value={3}
//                 checked={RoundedRating === 3}
//                 readOnly
//             />
//             <input
//                 type="radio"
//                 name="rating-8"
//                 className="mask mask-star-2 bg-orange-400"
//                 value={4}
//                 checked={RoundedRating === 4}
//                 readOnly
//             />
//             <input
//                 type="radio"
//                 name="rating-8"
//                 className="mask mask-star-2 bg-orange-400"
//                 value={5}
//                 checked={RoundedRating === 5}
//                 readOnly
//             />
//         </div>
//     );
// }

// export default StarRating


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

// export default function StarRating() {
//     const [value, setValue] = React.useState(2);

//     return (
//         <Box sx={{ '& > legend': { mt: 2 } }}>
//             <Typography component="legend">Controlled</Typography>
//             <Rating
//                 name="simple-controlled"
//                 value={value}
//                 onChange={(event, newValue) => {
//                     setValue(newValue);
//                 }}
//             />
//             <Typography component="legend">Read only</Typography>
//             <Rating name="read-only" value={value} readOnly />
//             <Typography component="legend">Disabled</Typography>
//             <Rating name="disabled" value={value} disabled />
//             <Typography component="legend">No rating given</Typography>
//             <Rating name="no-value" value={null} />
//         </Box>
//     );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const StarRating = ({ rating }) => {
    const RoundedRating = Math.round(rating);
    const [value, setValue] = React.useState(RoundedRating);
    return (
        <Box sx={{marginTop : '2rem',display: 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
            <Rating name="read-only" value={value} readOnly sx={{
                fontSize: '3rem'
            }}/>
        </Box>
    );
}

export default StarRating
