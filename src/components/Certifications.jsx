import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

function Certifications() {
  const certificates = [
    {
      title: "Oracle AI Foundations Associate",
      image: "/certificate_2.jpeg",
      date: "March 2025",
      link: "/certificate_2.jpeg",
    },
    {
      title: "Software Testing - Naan Mudhalvan",
      image: "/certificate_3.jpeg",
      date: "April 2025",
      link: "/certificate_3.jpeg",
    },
    {
      title: "Oracle Cloud Infrastructure Architecture",
      image: "/certificate_4.jpeg",
      date: "May 2024",
      link: "/certificate_4.jpeg",
    },
    {
      title: "Oracle Foundations Associate",
      image: "/certificate_5.jpeg",
      date: "February 2024",
      link: "/certificate_5.jpeg",
    },
    {
      title: "Diplomo in Desktop Publishing",
      image: "/certificate_6.jpeg",
      date: "March 2022",
      link: "/certificate_6.jpeg",
    },
  ];

  return (
    <Box
      id="certifications"
      sx={{
        minHeight: "100vh",
        background: "#050816",
        py: 10,
        px: 3,
      }}
    >
      {/* TITLE */}
      <Typography
        variant="h3"
        align="center"
        sx={{
          color: "white",
          fontWeight: "bold",
          mb: 8,
        }}
      >
        Certifications & Achievements
      </Typography>

      {/* CERTIFICATE CARDS */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {certificates.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: 320,
              minHeight: 420,
              display: "flex",
              flexDirection: "column",

              background: "#1d1836",
              borderRadius: "20px",
              color: "white",
              overflow: "hidden",
              transition: "0.3s",

              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 0 25px rgba(0,191,255,0.25)",
              },
            }}
          >
            {/* IMAGE */}
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt={item.title}
              sx={{
                objectFit: "cover",
              }}
            />

            {/* CONTENT */}
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                p: 3,
              }}
            >
              {/* TITLE */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  minHeight: 70,
                }}
              >
                {item.title}
              </Typography>

              {/* DATE */}
              <Typography
                variant="body2"
                sx={{
                  color: "#aaa6c3",
                  mb: 3,
                }}
              >
                {item.date}
              </Typography>

              {/* BUTTON */}
              <Button
                variant="contained"
                fullWidth
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: "auto",
                  borderRadius: "12px",
                  py: 1.2,
                  fontWeight: "bold",
                  textTransform: "none",
                  backgroundColor: "#00bfff",

                  "&:hover": {
                    backgroundColor: "#0099cc",
                  },
                }}
              >
                View Certificate
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Certifications;