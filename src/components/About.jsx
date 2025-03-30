import React from 'react';
import { Typography, Box, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about">
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
            <Grid item xs={12} md={6}>
              <Paper elevation={6} sx={{ p: 4, background: 'rgba(17, 17, 17, 0.8)', borderRadius: 2 }}>
                <Typography variant="body1" paragraph>
                  I am a contemporary artist based in New York, specializing in abstract expressionism and mixed media art. My work explores the intersection of emotion, memory, and the subconscious mind.
                </Typography>
                <Typography variant="body1" paragraph>
                  With over 15 years of experience, I've developed a unique style that combines traditional painting techniques with experimental approaches. My art has been featured in galleries across North America and Europe.
                </Typography>
                <Typography variant="body1">
                  I believe that art should challenge perceptions and evoke deep emotional responses. Each piece I create is a journey into the unknown, an exploration of color, texture, and form that invites viewers to find their own meaning within the work.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/artist-portrait.jpg"
                alt="Artist Portrait"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                }}
              />
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;