import React from 'react';
import { Typography, Container, Box, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { motion } from 'framer-motion';

const Gallery = () => {
  // Sample artwork data - replace with actual artwork images and details
  const artworks = [
    {
      id: 1,
      title: "Ethereal Dreams",
      year: 2023,
      medium: "Oil on canvas",
      dimensions: "36 × 48 inches",
      image: "/artwork1.jpg"
    },
    {
      id: 2,
      title: "Urban Symphony",
      year: 2022,
      medium: "Acrylic and mixed media",
      dimensions: "40 × 60 inches",
      image: "/artwork2.jpg"
    },
    {
      id: 3,
      title: "Fragments of Memory",
      year: 2021,
      medium: "Watercolor and ink",
      dimensions: "24 × 36 inches",
      image: "/artwork3.jpg"
    },
    {
      id: 4,
      title: "Celestial Harmony",
      year: 2020,
      medium: "Digital art printed on canvas",
      dimensions: "30 × 40 inches",
      image: "/artwork4.jpg"
    },
    {
      id: 5,
      title: "Whispers of Nature",
      year: 2019,
      medium: "Mixed media on wood panel",
      dimensions: "48 × 48 inches",
      image: "/artwork5.jpg"
    }
  ];

  return (
    <section id="gallery">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" className="section-title" gutterBottom>
            Gallery
          </Typography>
          
          <Box sx={{ maxWidth: '900px', margin: '0 auto' }}>
            <Carousel
              animation="slide"
              navButtonsAlwaysVisible
              autoPlay={false}
              cycleNavigation={true}
              navButtonsProps={{
                style: {
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: 0,
                }
              }}
              indicatorContainerProps={{
                style: {
                  marginTop: '20px',
                }
              }}
            >
              {artworks.map((artwork) => (
                <Paper 
                  key={artwork.id}
                  elevation={6}
                  sx={{ 
                    background: 'rgba(17, 17, 17, 0.8)',
                    borderRadius: 2,
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <Box
                    sx={{
                      height: '70vh',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative'
                    }}
                  >
                    <Box
                      component="img"
                      src={artwork.image}
                      alt={artwork.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        background: 'rgba(0,0,0,0.7)',
                        padding: 3,
                      }}
                    >
                      <Typography variant="h5" component="h3">
                        {artwork.title}
                      </Typography>
                      <Typography variant="subtitle1">
                        {artwork.year} | {artwork.medium} | {artwork.dimensions}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Carousel>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
};

export default Gallery;