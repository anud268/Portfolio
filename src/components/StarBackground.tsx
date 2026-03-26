import { useEffect, useRef } from 'react';

export const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars: { 
      x: number; 
      y: number; 
      r: number; 
      baseX: number; 
      baseY: number; 
      vx: number; 
      vy: number;
    }[] = [];
    
    // Create responsive number of stars based on screen size
    const numStars = Math.floor((width * height) / 6000);

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.5,
        baseX: 0,
        baseY: 0,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
      stars[i].baseX = stars[i].x;
      stars[i].baseY = stars[i].y;
    }

    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

      stars.forEach(star => {
        // Natural slight drifting movement
        star.baseX += star.vx;
        star.baseY += star.vy;

        // Wrap around edges
        if (star.baseX < 0) star.baseX = width;
        if (star.baseX > width) star.baseX = 0;
        if (star.baseY < 0) star.baseY = height;
        if (star.baseY > height) star.baseY = 0;

        // Interactive mouse repel effect
        const dx = mouse.x - star.baseX;
        const dy = mouse.y - star.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const interactionRadius = 150;
        
        let targetX = star.baseX;
        let targetY = star.baseY;

        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          // Push stars away from the mouse
          targetX -= (dx / distance) * force * 60;
          targetY -= (dy / distance) * force * 60;
        }

        // Smoothly interpolate towards the target position
        star.x += (targetX - star.x) * 0.1;
        star.y += (targetY - star.y) * 0.1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
        
        // Optional: draw lines between nearby stars to form constellations
        stars.forEach(otherStar => {
           const dStarX = star.x - otherStar.x;
           const dStarY = star.y - otherStar.y;
           const dStars = Math.sqrt(dStarX * dStarX + dStarY * dStarY);
           if (dStars < 80) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dStars / 80) * 0.15})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(star.x, star.y);
              ctx.lineTo(otherStar.x, otherStar.y);
              ctx.stroke();
           }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-80" />;
};
