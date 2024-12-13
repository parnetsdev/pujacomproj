// import React from "react";
// import { Box, Card, CardContent, Typography } from "@mui/material";
// import Masonry from "@mui/lab/Masonry";

// const testimonials = [
//     {
//       id: 1,
//       left: {
//         name: "Devotee 1",
//         location: "Haridwar",
//         feedback:
//           "This experience has truly been a blessing. Thank you for the guidance!",
//       },
//       right: {
//         name: "Devotee 2",
//         location: "Varanasi",
//         feedback:
//           "Amazing service and divine experience. Highly recommended to others!",
//       },
//     },
//     {
//       id: 2,
//       left: {
//         name: "Devotee 1",
//         location: "Haridwar",
//         feedback:
//           "This experience has truly been a blessing. Thank you for the guidance!",
//       },
//       right: {
//         name: "Devotee 2",
//         location: "Varanasi",
//         feedback:
//           "Amazing service and divine experience. Highly recommended to others!",
//       },
//     },
//     {
//       id: 3,
//       left: {
//         name: "Devotee 1",
//         location: "Haridwar",
//         feedback:
//           "This experience has truly been a blessing. Thank you for the guidance!",
//       },
//       right: {
//         name: "Devotee 2",
//         location: "Varanasi",
//         feedback:
//           "Amazing service and divine experience. Highly recommended to others!",
//       },
//     },
//     {
//       id: 4,
//       left: {
//         name: "Devotee 1",
//         location: "Haridwar",
//         feedback:
//           "This experience has truly been a blessing. Thank you for the guidance!",
//       },
//       right: {
//         name: "Devotee 2",
//         location: "Varanasi",
//         feedback:
//           "Amazing service and divine experience. Highly recommended to others!",
//       },
//     },

//     {
//       id: 5,
//       left: {
//         name: "Devotee 1",
//         location: "Haridwar",
//         feedback:
//           "This experience has truly been a blessing. Thank you for the guidance!",
//       },
//       right: {
//         name: "Devotee 2",
//         location: "Varanasi",
//         feedback:
//           "Amazing service and divine experience. Highly recommended to others!",
//       },
//     },

//     {
//       id: 6,
//       left: {
//         name: "Devotee 1",
//         location: "Haridwar",
//         feedback:
//           "This experience has truly been a blessing. Thank you for the guidance!",
//       },
//       right: {
//         name: "Devotee 2",
//         location: "Varanasi",
//         feedback:
//           "Amazing service and divine experience. Highly recommended to others!",
//       },
//     },
//   ];

// const TestimonialCard = ({ name, location, feedback }) => {
//   return (
//     <Card
//       sx={{
//         borderRadius: "16px",
//         boxShadow: 3,
//         backgroundColor: "#f9f9f9",
//         overflow: "hidden",
//       }}
//     >
//       <CardContent>
//         <Typography variant="h6" color="primary" gutterBottom>
//           {name}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" gutterBottom>
//           {location}
//         </Typography>
//         <Typography variant="body1" color="text.primary">
//           {feedback}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// const TestimonialsMasonry = () => {
//   const testimonialCards = testimonials.flatMap((testimonial) => [
//     testimonial.left,
//     testimonial.right,
//   ]);

//   return (
//     <Box sx={{ width: "100%", p: 2 }}>
//       <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
//         {testimonialCards.map((testimonial, index) => (
//           <TestimonialCard
//             key={index}
//             name={testimonial.name}
//             location={testimonial.location}
//             feedback={testimonial.feedback}
//           />
//         ))}
//       </Masonry>
//     </Box>
//   );
// };

// export default TestimonialsMasonry;

import React from 'react'

function TestimonialCard() {
  return (
    <div>TestimonialCard</div>
  )
}

export default TestimonialCard