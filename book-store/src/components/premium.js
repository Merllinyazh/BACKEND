import React from "react";
import { Box, Typography, Card, CardMedia, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const Premium = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: "url('images/background.jpg')", // Add your background image URL here
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#000000",
          marginBottom: "100px",
          fontSize: "50px",
          fontFamily: "Berlin",
        }}
      >
        Premium Membership
      </Typography>

      {/* Cards Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Image 1 */}
        <Card sx={{ width: "300px", backgroundColor: "transparent" }}>
          <CardActionArea
            component="a"
            href="https://razorpay.com/payment-links/?utm_source=google&utm_medium=cpc&utm_campaign=RPSME-RPPerf-GSearch-Prospect-DWeb-PL-Combine&utm_adgroup=PL-Combined-Keywords&utm_content=RPSME-PL&utm_term=payment%20link&utm_gclid=&utm_campaignID=21462952503&utm_adgroupID=171630012144&utm_adID=705865170236&utm_network=g&utm_device=c&utm_matchtype=p&utm_devicemodel=&utm_adposition=&utm_location=1007810&gad_source=1&gclid=Cj0KCQiA3sq6BhD2ARIsAJ8MRwVyf4h7VLbANZEZvhZsPGvi6Cc21lKHhC8BDl9GVageOEyLWmAhxIEaAr7fEALw_wcB"
            target="_blank"
          >
            <CardMedia
              component="img"
              image="images/prem 1.png" // Use a valid relative path or URL
              alt="Premium Image 1"
              sx={{
                width: "100%",
                height: "auto", // Maintain aspect ratio
                objectFit: "contain", // Ensure the entire image is visible
              }}
            />
          </CardActionArea>
        </Card>

        {/* Image 2 */}
        <Card sx={{ width: "300px", backgroundColor: "transparent" }}>
          <CardActionArea
            component="a"
            href="https://razorpay.com/payment-links/?utm_source=google&utm_medium=cpc&utm_campaign=RPSME-RPPerf-GSearch-Prospect-DWeb-PL-Combine&utm_adgroup=PL-Combined-Keywords&utm_content=RPSME-PL&utm_term=payment%20link&utm_gclid=&utm_campaignID=21462952503&utm_adgroupID=171630012144&utm_adID=705865170236&utm_network=g&utm_device=c&utm_matchtype=p&utm_devicemodel=&utm_adposition=&utm_location=1007810&gad_source=1&gclid=Cj0KCQiA3sq6BhD2ARIsAJ8MRwVyf4h7VLbANZEZvhZsPGvi6Cc21lKHhC8BDl9GVageOEyLWmAhxIEaAr7fEALw_wcB"
            target="_blank"
          >
            <CardMedia
              component="img"
              image="images/prem2.png" // Use a valid relative path or URL
              alt="Premium Image 2"
              sx={{
                width: "100%",
                height: "auto", // Maintain aspect ratio
                objectFit: "contain", // Ensure the entire image is visible
              }}
            />
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};

export default Premium;
