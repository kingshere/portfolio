import React from 'react';
import { Typography, Box, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

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
            {/* This Grid item contains the about text - now shows side by side on all screens */}
            <Grid item xs={6} md={6}>
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
            
            {/* This Grid item contains the artist portrait - now shows side by side on all screens */}
            <Grid item xs={6} md={6}>
              <Box
                component="img"
                src="https://via.placeholder.com/500x600/424242/e0e0e0?text=Artist+Portrait"
                alt="Artist Portrait"
                sx={{
                  width: '100%',
                  height: 'auto',
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