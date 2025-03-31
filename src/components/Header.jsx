import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll transparency
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Handle active section highlighting
      const sections = ['about', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: scrolled ? 'rgba(18,18,18,0.95)' : 'rgba(18,18,18,0.6)',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.4s ease',
          py: scrolled ? 0.5 : 1.5,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ 
              fontWeight: 700, 
              letterSpacing: 1.2,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                textShadow: '0 0 10px rgba(255,255,255,0.5)'
              }
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ARTIST NAME
          </Typography>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {['about', 'gallery', 'contact'].map((section) => (
              <Button 
                key={section}
                color="inherit" 
                onClick={() => scrollToSection(section)}
                sx={{
                  mx: 1,
                  px: 2,
                  position: 'relative',
                  fontWeight: 500,
                  letterSpacing: 0.8,
                  opacity: activeSection === section ? 1 : 0.8,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 6,
                    left: '50%',
                    width: activeSection === section ? '50%' : '0%',
                    height: '2px',
                    backgroundColor: '#fff',
                    transition: 'all 0.3s ease',
                    transform: 'translateX(-50%)',
                  },
                  '&:hover:after': {
                    width: activeSection === section ? '70%' : '30%',
                  }
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </Box>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => setDrawerOpen(true)}
            sx={{ 
              display: { md: 'none' },
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'rotate(90deg)'
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: isMobile ? '100%' : 280,
            background: 'rgba(18,18,18,0.95)',
            backdropFilter: 'blur(10px)',
            color: '#fff',
            padding: 2
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, px: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Menu
          </Typography>
          <IconButton 
            color="inherit" 
            onClick={() => setDrawerOpen(false)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'rotate(90deg)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)', mb: 2 }} />
        
        <List>
          {['about', 'gallery', 'contact'].map((text) => (
            <ListItem 
              button 
              key={text} 
              onClick={() => scrollToSection(text)}
              sx={{
                py: 1.5,
                borderRadius: 1,
                mb: 1,
                backgroundColor: activeSection === text ? 'rgba(255,255,255,0.1)' : 'transparent',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  pl: 3
                }
              }}
            >
              <ListItemText 
                primary={text.charAt(0).toUpperCase() + text.slice(1)} 
                primaryTypographyProps={{
                  sx: { 
                    fontWeight: activeSection === text ? 600 : 400,
                    letterSpacing: 0.5
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;