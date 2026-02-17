// Background art from Anthony Fu (https://github.com/antfu/antfu.me/blob/main/src/components/ArtPlum.vue)

"use client";

import { useEffect, useRef } from "react";

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const r180 = Math.PI;
    const r90 = Math.PI / 2;
    const r15 = Math.PI / 12;
    const color = "#88888825";
    const MIN_BRANCH = 30;
    const len = 6;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let stopped = false;
    let animationFrameId: number;

    type Fn = () => void;
    let steps: Fn[] = [];
    let prevSteps: Fn[] = [];

    const initCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      // @ts-expect-error vendor
      const bsr =
        ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio ||
        1;
      const dpi = dpr / bsr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = dpi * width;
      canvas.height = dpi * height;
      ctx.scale(dpi, dpi);
    };

    const polar2cart = (x = 0, y = 0, r = 0, theta = 0) => {
      const dx = r * Math.cos(theta);
      const dy = r * Math.sin(theta);
      return [x + dx, y + dy];
    };

    const step = (
      x: number,
      y: number,
      rad: number,
      counter: { value: number } = { value: 0 },
    ) => {
      const length = Math.random() * len;
      counter.value += 1;

      const [nx, ny] = polar2cart(x, y, length, rad);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(nx, ny);
      ctx.stroke();

      const rad1 = rad + Math.random() * r15;
      const rad2 = rad - Math.random() * r15;

      // out of bounds
      if (nx < -100 || nx > width + 100 || ny < -100 || ny > height + 100)
        return;

      const rate = counter.value <= MIN_BRANCH ? 0.8 : 0.5;

      // left branch
      if (Math.random() < rate) steps.push(() => step(nx, ny, rad1, counter));

      // right branch
      if (Math.random() < rate) steps.push(() => step(nx, ny, rad2, counter));
    };

    let lastTime = performance.now();
    const interval = 1000 / 40; // 50fps

    const frame = () => {
      if (performance.now() - lastTime < interval) {
        animationFrameId = requestAnimationFrame(frame);
        return;
      }

      prevSteps = steps;
      steps = [];
      lastTime = performance.now();

      if (!prevSteps.length) {
        stopped = true;
      }

      // Execute all the steps from the previous frame
      prevSteps.forEach((i) => {
        // 50% chance to keep the step for the next frame, to create a more organic look
        if (Math.random() < 0.5) steps.push(i);
        else i();
      });

      if (!stopped) {
        animationFrameId = requestAnimationFrame(frame);
      }
    };

    const randomMiddle = () => Math.random() * 0.6 + 0.2;

    const start = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;
      prevSteps = [];
      steps = [
        () => step(randomMiddle() * width, -5, r90),
        () => step(randomMiddle() * width, height + 5, -r90),
        () => step(-5, randomMiddle() * height, 0),
        () => step(width + 5, randomMiddle() * height, r180),
      ];

      if (width < 500) steps = steps.slice(0, 2);

      stopped = false;
      frame();
    };

    // Initialize
    initCanvas();
    start();

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      initCanvas();
      start();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const mask = "radial-gradient(circle, transparent, black)";

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 pointer-events-none print:hidden"
      style={{
        zIndex: -1,
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    >
      <canvas ref={canvasRef} width="400" height="400" />
    </div>
  );
}
