import {
  Copyright,
  Facebook,
  Instagram,
  LocationOn,
  Twitter,
  X,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          background: "black",
          color: "white",
          display: "flex",
          padding: "10px",
          justifyContent: "space-between",
          padding: "20px",
          flexWrap:{lg:'nowrap',md:'nowarp',sm:'wrap',xs:'wrap'},
            gap:{xs:4,sm:4}
        }}
      >
        <Box>
          <Box sx={{ display: "flex", gap: 5,flexWrap:'wrap' }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                textTransform: "uppercase",
              }}
            >
              <Typography variant="body2">find a store</Typography>
              <Typography variant="body2">become a member</Typography>
              <Typography variant="body2">send us a feedback</Typography>
              <Typography variant="body2">student discounts</Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography sx={{ textTransform: "uppercase" }}>
                get help
              </Typography>
              <Typography variant="body2" sx={{ color: "#525252" }}>
                Order Status
              </Typography>
              <Typography variant="body2" sx={{ color: "#525252" }}>
                Delivery
              </Typography>
              <Typography variant="body2" sx={{ color: "#525252" }}>
                Return
              </Typography>
              <Typography variant="body2" sx={{ color: "#525252" }}>
                Payment
              </Typography>
              <Typography variant="body2" sx={{ color: "#525252" }}>
                Contact us
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography sx={{ textTransform: "uppercase" }}>
                about happyfeet
              </Typography>
              <Typography variant="body2" sx={{ color: "#525252" }}>
                News
              </Typography>
              <Typography variant="body2" sx={{ color: "#525252" }}>
                Careers
              </Typography>
              <Typography variant="body2" sx={{ color: "#525252" }}>
                Investors
              </Typography>
              <Typography variant="body2" sx={{ color: "#525252" }}>
                Sustainability
              </Typography>
            </Box>


          </Box>

          <Box sx={{ display: "flex", gap: 3, marginTop: 3,flexWrap:"wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocationOn />
              <Typography>India</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Copyright />
              <Typography sx={{ color: "#525252" }}>
                2023 happyfeet, Inc. All right reserved
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Typography
              sx={{
                padding: 1,
                background: "white",
                color: "black",
                borderRadius: "10px",
              }}
            >
              <X />
            </Typography>
            <Typography
              sx={{
                padding: 1,
                background: "white",
                color: "black",
                borderRadius: "10px",
              }}
            >
              <Facebook />
            </Typography>
            <Typography
              sx={{
                padding: 1,
                background: "white",
                color: "black",
                borderRadius: "10px",
              }}
            >
              <Instagram />
            </Typography>
          </Box>

            
        </Box>
      </Box>

    

    </>
  );
}
