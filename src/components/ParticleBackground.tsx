// Lightweight tsparticles background used behind the hero content.

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine } from 'tsparticles-engine';

interface ParticleBackgroundProps {
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ className = '' }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Load the slim version of tsparticles for better performance
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional callback when particles are loaded
    console.log('Particles loaded:', container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className={className}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ['#3DDC84', '#61DAFB', '#FFFFFF'],
          },
          links: {
            color: '#3DDC84',
            distance: 140,
            enable: true,
            opacity: 0.3,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.04,
            },
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1200,
            },
            value: 50,
          },
          opacity: {
            value: { min: 0.3, max: 0.75 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.2,
              sync: false,
            },
          },
          shape: {
            type: ['circle', 'triangle'],
          },
          size: {
            value: { min: 1, max: 4 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 1,
              sync: false,
            },
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.02,
              opacity: 1,
            },
          },
        },
        detectRetina: true,
        // tsparticles v2 matches responsive rules by maxWidth; desktop uses these base values.
        responsive: [
          {
            maxWidth: 1023,
            options: {
              particles: {
                number: {
                  density: {
                    area: 1100,
                  },
                  value: 50,
                },
                links: {
                  distance: 140,
                  opacity: 0.25,
                },
                opacity: {
                  value: { min: 0.2, max: 0.6 },
                },
              },
            },
          },
          {
            maxWidth: 768,
            options: {
              particles: {
                number: {
                  density: {
                    area: 1000,
                  },
                  value: 45,
                },
                links: {
                  distance: 110,
                },
              },
            },
          },
          {
            maxWidth: 480,
            options: {
              particles: {
                number: {
                  value: 25,
                },
                links: {
                  distance: 90,
                  enable: true,
                },
              },
            },
          },
        ],
      }}
    />
  );
};

export default ParticleBackground;
