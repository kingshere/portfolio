import React from 'react';
import { Typography, Container, Box, Paper, useTheme, useMediaQuery } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { motion } from 'framer-motion';

const Gallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Sample artwork data with grey-themed placeholder images
  const artworks = [
    {
      id: 1,
      title: "Ethereal Dreams",
      year: 2023,
      medium: "Oil on canvas",
      dimensions: "36 × 48 inches",
      image: "https://via.placeholder.com/800x600/424242/e0e0e0?text=Ethereal+Dreams"
    },
    {
      id: 2,
      title: "Urban Symphony",
      year: 2022,
      medium: "Acrylic and mixed media",
      dimensions: "40 × 60 inches",
      image: "https://via.placeholder.com/800x600/616161/f5f5f5?text=Urban+Symphony"
    },
    {
      id: 3,
      title: "Fragments of Memory",
      year: 2021,
      medium: "Watercolor and ink",
      dimensions: "24 × 36 inches",
      image: "https://via.placeholder.com/800x600/757575/ffffff?text=Fragments+of+Memory"
    },
    {
      id: 4,
      title: "Celestial Harmony",
      year: 2020,
      medium: "Digital art printed on canvas",
      dimensions: "30 × 40 inches",
      image: "https://via.placeholder.com/800x600/9e9e9e/212121?text=Celestial+Harmony"
    },
    {
      id: 5,
      title: "Whispers of Nature",
      year: 2019,
      medium: "Mixed media on wood panel",
      dimensions: "48 × 48 inches",
      image: "https://via.placeholder.com/800x600/bdbdbd/212121?text=Whispers+of+Nature"
    }
  ];

  return (
    <section id="gallery" className="ink-splatter">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h2" 
            className="section-title" 
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 4,
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                background: 'linear-gradient(90deg, rgba(189,189,189,0) 0%, rgba(189,189,189,1) 50%, rgba(189,189,189,0) 100%)'
              }
            }}
          >
            Gallery
          </Typography>
          
          <Box sx={{ maxWidth: '1000px', margin: '0 auto', px: isMobile ? 1 : 3 }}>
            <Carousel
              animation="fade"
              navButtonsAlwaysVisible
              autoPlay={true}
              autoPlaySpeed={6000}
              cycleNavigation={true}
              swipe={true}
              navButtonsProps={{
                style: {
                  backgroundColor: 'rgba(33, 33, 33, 0.8)',
                  borderRadius: '50%',
                  padding: '10px',
                  color: '#fff',
                  transform: 'scale(1.2)',
                }
              }}
              indicatorContainerProps={{
                style: {
                  marginTop: '25px',
                  marginBottom: '10px',
                }
              }}
              indicatorIconButtonProps={{
                style: {
                  color: 'rgba(158, 158, 158, 0.6)',
                  padding: '5px',
                  margin: '0 4px',
                }
              }}
              activeIndicatorIconButtonProps={{
                style: {
                  color: '#e0e0e0',
                  transform: 'scale(1.2)',
                }
              }}
            >
              {artworks.map((artwork) => (
                <Paper 
                  key={artwork.id}
                  elevation={8}
                  sx={{ 
                    background: 'rgba(33, 33, 33, 0.9)',
                    borderRadius: 2,
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      height: isMobile ? '50vh' : '70vh',
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
                        filter: 'grayscale(0.3) contrast(1.1)',
                        transition: 'all 0.5s ease',
                        '&:hover': {
                          filter: 'grayscale(0) contrast(1.05)',
                        }
                      }}
                      className="grey-overlay"
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)',
                        padding: isMobile ? 2 : 3,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 500 }}>
                        {artwork.title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: '#d5d5d5', mt: 1 }}>
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