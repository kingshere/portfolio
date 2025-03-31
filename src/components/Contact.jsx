import React from 'react';
import { Typography, Container, Grid, Box, IconButton, Paper } from '@mui/material';
import { Instagram, Facebook, Twitter, Email, Phone } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = {
    email: "artist@example.com",
    phone: "+1 (555) 123-4567",
    instagram: "https://instagram.com/artistname",
    facebook: "https://facebook.com/artistname",
    twitter: "https://twitter.com/artistname"
  };

  return (
    <section id="contact" className="ink-splatter">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" className="section-title" gutterBottom>
            Contact
          </Typography>
          
          <Paper elevation={6} sx={{ p: 4, background: 'rgba(66, 66, 66, 0.8)', borderRadius: 2 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom sx={{ color: '#e0e0e0' }}>
                  Get in Touch
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#bdbdbd' }}>
                  Interested in commissioning a piece or have questions about my work? Feel free to reach out through any of the channels below.
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Email sx={{ mr: 2, color: '#9e9e9e' }} />
                  <Typography variant="body1" sx={{ color: '#e0e0e0' }}>
                    {contactInfo.email}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Phone sx={{ mr: 2, color: '#9e9e9e' }} />
                  <Typography variant="body1" sx={{ color: '#e0e0e0' }}>
                    {contactInfo.phone}
                  </Typography>
                </Box>
                
                <Typography variant="h6" gutterBottom sx={{ color: '#e0e0e0' }}>
                  Follow Me
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton 
                    aria-label="Instagram" 
                    color="primary" 
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      background: 'rgba(189, 189, 189, 0.1)',
                      '&:hover': { background: 'rgba(189, 189, 189, 0.2)' }
                    }}
                  >
                    <Instagram />
                  </IconButton>
                  <IconButton 
                    aria-label="Facebook" 
                    color="primary" 
                    href={contactInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      background: 'rgba(189, 189, 189, 0.1)',
                      '&:hover': { background: 'rgba(189, 189, 189, 0.2)' }
                    }}
                  >
                    <Facebook />
                  </IconButton>
                  <IconButton 
                    aria-label="Twitter" 
                    color="primary" 
                    href={contactInfo.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      background: 'rgba(189, 189, 189, 0.1)',
                      '&:hover': { background: 'rgba(189, 189, 189, 0.2)' }
                    }}
                  >
                    <Twitter />
                  </IconButton>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box
                  component="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1645189261534!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '8px', filter: 'grayscale(100%)' }}
                  allowFullScreen=""
                  loading="lazy"
                />
                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', color: '#bdbdbd' }}>
                  Studio located in the heart of New York's Art District
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;