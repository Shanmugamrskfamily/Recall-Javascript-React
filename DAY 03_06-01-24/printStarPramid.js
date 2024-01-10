// const printPyramid = (rows) => {
//     for (let i = 1; i <= rows; i++) 
//     {
//         let row = '';
//         // Add spaces before the stars
//         for (let j = 1; j <= rows - i; j++) 
//         {
//             row += ' ';
//         }
//         // Add stars
//         for (let k = 1; k <= 2 * i - 1; k++) 
//         {
//             row += '*';
//         }
//         console.log(row);
//     }
// };

// const numberOfRows = 10;
// printPyramid(numberOfRows);

const printStarPyramid = (number) => {
    for (let i = 1; i <= number; i++) 
    {
        let row = '';
        for (let j = 1; j <= i; j++) 
        {
            row += '*';
        }
        console.log(row);
    }
};

const numberOfStars = 5; 
printStarPyramid(numberOfStars);
