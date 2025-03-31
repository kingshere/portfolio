import React from 'react';
import { Typography, Box, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import artistImage from './WhatsApp Image 2024-10-03 at 03.03.34.jpeg'; // Updated image path

const About = () => {
  return (
    <section id="about" className="ink-splatter">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" className="section-title" gutterBottom>
            About Me
          </Typography>
          
          <Grid container spacing={4} alignItems="center">
            {/* Left column for the about text */}
            <Grid item xs={12} sm={6}>
              <Paper elevation={6} sx={{ p: { xs: 2, sm: 3, md: 4 }, background: 'rgba(66, 66, 66, 0.8)', borderRadius: 2 }}>
                <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  I am a contemporary artist based in New York, specializing in abstract expressionism and mixed media art. My work explores the intersection of emotion, memory, and the subconscious mind.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  With over 15 years of experience, I've developed a unique style that combines traditional painting techniques with experimental approaches. My art has been featured in galleries across North America and Europe.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  I believe that art should challenge perceptions and evoke deep emotional responses. Each piece I create is a journey into the unknown, an exploration of color, texture, and form that invites viewers to find their own meaning within the work.
                </Typography>
              </Paper>
            </Grid>
            
            {/* Right column for the artist portrait */}
            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box
                component="img"
                src={artistImage}
                alt="Artist Portrait"
                sx={{
                  width: '1200px', // Full width of container
                  maxWidth: '1200px', // Maximum width constraint
                  height: '450px', // Auto height to maintain aspect ratio
                  maxHeight: '450px', // Lower max height for landscape orientation
                  objectFit: 'cover', // Cover to ensure the image fills the container
                  borderRadius: 2,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  filter: 'grayscale(0.7)',
                }}
                className="grey-overlay"
              />
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;