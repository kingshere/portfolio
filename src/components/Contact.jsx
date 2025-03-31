import React from 'react';
import { Typography, Container, Grid, Box, IconButton, Paper, useTheme, useMediaQuery } from '@mui/material';
import { Instagram, Facebook, Twitter, Email, Phone, LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const contactInfo = {
    email: "artist@example.com",
    phone: "+1 (555) 123-4567",
    instagram: "https://instagram.com/artistname",
    facebook: "https://facebook.com/artistname",
    twitter: "https://twitter.com/artistname"
  };

  return (
    <section id="contact" className="ink-splatter">
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
            Contact
          </Typography>
          
          <Paper 
            elevation={8} 
            sx={{ 
              p: { xs: 3, md: 5 }, 
              background: 'rgba(33, 33, 33, 0.85)', 
              borderRadius: 2,
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
              }
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      color: '#e0e0e0',
                      fontWeight: 500,
                      position: 'relative',
                      display: 'inline-block',
                      mb: 3,
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: 0,
                        width: '40px',
                        height: '2px',
                        backgroundColor: '#9e9e9e'
                      }
                    }}
                  >
                    Get in Touch
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: '#bdbdbd', mb: 4, lineHeight: 1.7 }}>
                    Interested in commissioning a piece or have questions about my work? Feel free to reach out through any of the channels below.
                  </Typography>
                  
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: 2.5,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    <Box 
                      sx={{ 
                        mr: 2, 
                        backgroundColor: 'rgba(224, 224, 224, 0.1)', 
                        borderRadius: '50%',
                        p: 1,
                        display: 'flex'
                      }}
                    >
                      <Email sx={{ color: '#e0e0e0' }} />
                    </Box>
                    <Typography variant="body1" sx={{ color: '#e0e0e0' }}>
                      {contactInfo.email}
                    </Typography>
                  </Box>
                  
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: 4,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    <Box 
                      sx={{ 
                        mr: 2, 
                        backgroundColor: 'rgba(224, 224, 224, 0.1)', 
                        borderRadius: '50%',
                        p: 1,
                        display: 'flex'
                      }}
                    >
                      <Phone sx={{ color: '#e0e0e0' }} />
                    </Box>
                    <Typography variant="body1" sx={{ color: '#e0e0e0' }}>
                      {contactInfo.phone}
                    </Typography>
                  </Box>
                  
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      color: '#e0e0e0', 
                      mb: 2,
                      fontWeight: 500
                    }}
                  >
                    Follow Me
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {[
                      { icon: <Instagram />, url: contactInfo.instagram, label: 'Instagram' },
                      { icon: <Facebook />, url: contactInfo.facebook, label: 'Facebook' },
                      { icon: <Twitter />, url: contactInfo.twitter, label: 'Twitter' }
                    ].map((social, index) => (
                      <motion.div
                        key={social.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                        viewport={{ once: true }}
                      >
                        <IconButton 
                          aria-label={social.label} 
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ 
                            background: 'rgba(224, 224, 224, 0.1)',
                            color: '#e0e0e0',
                            transition: 'all 0.3s ease',
                            '&:hover': { 
                              background: 'rgba(224, 224, 224, 0.2)',
                              transform: 'translateY(-5px)'
                            }
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ position: 'relative', mb: 3 }}>
                    <Box
                      component="iframe"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1645189261534!5m2!1sen!2sin"
                      width="100%"
                      height={isMobile ? "250" : "320"}
                      style={{ 
                        border: 0, 
                        borderRadius: '12px', 
                        filter: 'grayscale(85%) contrast(1.1)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                      }}
                      allowFullScreen=""
                      loading="lazy"
                    />
                    <Box 
                      sx={{ 
                        position: 'absolute', 
                        top: 15, 
                        left: 15, 
                        backgroundColor: 'rgba(33, 33, 33, 0.85)',
                        color: '#e0e0e0',
                        borderRadius: '8px',
                        p: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                      }}
                    >
                      <LocationOn />
                      <Typography variant="body2">New York Art District</Typography>
                    </Box>
                  </Box>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      textAlign: 'center', 
                      color: '#bdbdbd',
                      fontStyle: 'italic',
                      mt: 2
                    }}
                  >
                    Studio located in the heart of New York's Art District
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;