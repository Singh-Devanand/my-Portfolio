import React, { useEffect, useRef } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Star generator
    const STAR_COUNT = 250;
    let stars = [];

    const starColors = [
      '#ffffff',
      '#ffffff',
      '#c4b5fd', // purple-300
      '#93c5fd', // blue-300
      '#fbcfe8', // pink-200
      '#fef08a', // yellow-200
    ];

    const initStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.8 + 0.4,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          alpha: Math.random(),
          blinkSpeed: Math.random() * 0.025 + 0.008,
          increasing: Math.random() > 0.5,
          speedY: Math.random() * 0.15 + 0.02, // Slow upward cosmic drift
        });
      }
    };

    // Shooting stars
    let shootingStars = [];
    const createShootingStar = () => {
      if (Math.random() < 0.02 && shootingStars.length < 2) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * (height * 0.4),
          length: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 6,
          opacity: 1,
          angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
        });
      }
    };

    initStars();

    const render = () => {
      // Deep space void clear
      ctx.fillStyle = '#06060c';
      ctx.fillRect(0, 0, width, height);

      // Subtle cosmic nebula radial glows in the background
      const nebula1 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.25,
        20,
        width * 0.2,
        height * 0.25,
        width * 0.45
      );
      nebula1.addColorStop(0, 'rgba(139, 92, 246, 0.09)');
      nebula1.addColorStop(1, 'transparent');
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, width, height);

      const nebula2 = ctx.createRadialGradient(
        width * 0.8,
        height * 0.7,
        20,
        width * 0.8,
        height * 0.7,
        width * 0.5
      );
      nebula2.addColorStop(0, 'rgba(236, 72, 153, 0.06)');
      nebula2.addColorStop(1, 'transparent');
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, width, height);

      // Render blinking stars
      stars.forEach((star) => {
        // Blinking calculation
        if (star.increasing) {
          star.alpha += star.blinkSpeed;
          if (star.alpha >= 1) {
            star.alpha = 1;
            star.increasing = false;
          }
        } else {
          star.alpha -= star.blinkSpeed;
          if (star.alpha <= 0.1) {
            star.alpha = 0.1;
            star.increasing = true;
          }
        }

        // Slight drift
        star.y -= star.speedY;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        ctx.save();
        ctx.globalAlpha = star.alpha;
        ctx.fillStyle = star.color;
        ctx.shadowBlur = star.radius > 1.2 ? 6 : 2;
        ctx.shadowColor = star.color;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      // Render shooting stars (tut-ta tara)
      createShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        ctx.save();
        ctx.strokeStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(
          s.x - Math.cos(s.angle) * s.length,
          s.y - Math.sin(s.angle) * s.length
        );
        ctx.stroke();
        ctx.restore();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.015;

        if (s.opacity <= 0 || s.x > width || s.y > height) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default SpaceBackground;

