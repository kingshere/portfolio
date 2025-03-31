import React from 'react';
import { Typography, Box, Container, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import artistImage from './WhatsApp Image 2024-10-03 at 03.03.34.jpeg';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <section id="about" className="ink-splatter">
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
            About Me
          </Typography>
          
          <Grid 
            container 
            spacing={isMobile ? 4 : 6} 
            alignItems="flex-start"
            direction={isMobile ? "column" : "row"}
          >
            {/* Left column for the about text */}
            <Grid item xs={12} sm={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Paper 
                  elevation={8} 
                  sx={{ 
                    p: { xs: 3, sm: 4 }, 
                    background: 'rgba(33, 33, 33, 0.85)', 
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{ 
                      fontSize: { xs: '1rem', sm: '1.05rem' },
                      lineHeight: 1.7,
                      color: '#e0e0e0'
                    }}
                  >
                    I am a contemporary artist based in New York, specializing in abstract expressionism and mixed media art. My work explores the intersection of emotion, memory, and the subconscious mind.
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{ 
                      fontSize: { xs: '1rem', sm: '1.05rem' },
                      lineHeight: 1.7,
                      color: '#e0e0e0'
                    }}
                  >
                    With over 15 years of experience, I've developed a unique style that combines traditional painting techniques with experimental approaches. My art has been featured in galleries across North America and Europe.
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontSize: { xs: '1rem', sm: '1.05rem' },
                      lineHeight: 1.7,
                      color: '#e0e0e0'
                    }}
                  >
                    I believe that art should challenge perceptions and evoke deep emotional responses. Each piece I create is a journey into the unknown, an exploration of color, texture, and form that invites viewers to find their own meaning within the work.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
            
            {/* Right column for the artist portrait */}
            <Grid item xs={12} sm={6} sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              mt: isMobile ? 2 : 0,
              pt: isMobile ? 2 : 0
            }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{ 
                  width: '100%', 
                  display: 'flex', 
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px 0'
                }}
              >
                <Box
                  component="img"
                  src={artistImage}
                  alt="Artist Portrait"
                  sx={{
                    width: isMobile ? '100%' : '90%',
                    height: isMobile ? '300px' : '400px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: 3,
                    boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
                    filter: 'grayscale(0.5) contrast(1.1)',
                    transition: 'all 0.5s ease',
                    mx: 'auto',
                    display: 'block',
                    '&:hover': {
                      filter: 'grayscale(0.2) contrast(1.05)',
                      transform: 'scale(1.02)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    }
                  }}
                  className="grey-overlay"
                />
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;