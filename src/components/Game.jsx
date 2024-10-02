"use client";
// Game.js
import React, { useRef, useEffect, useState } from "react";

const Game = () => {
  const canvasRef = useRef(null);
  const [hoveredHex, setHoveredHex] = useState(null);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    // Set canvas size to match the window size
    canvas.width = 900; // 80% of the window width
    canvas.height = window.innerHeight * 0.57; // 60% of the window height
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const hexRadius = 30;
    const hexHeight = Math.sqrt(3) * hexRadius;
    const drawHex = (x, y, color) => {
      const hexVertices = [];
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i + Math.PI / 2;
        const xOffset = hexRadius * Math.cos(angle);
        const yOffset = hexRadius * Math.sin(angle);
        hexVertices.push({ x: x + xOffset, y: y + yOffset });
      }

      ctx.beginPath();
      ctx.moveTo(hexVertices[0].x, hexVertices[0].y);
      hexVertices.forEach(vertex => ctx.lineTo(vertex.x, vertex.y));
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
      ctx.stroke();
    };
    const drawHexGrid = (rows, cols) => {
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const xOffset = hexHeight * col + (row !== 0 ? (hexHeight / 2) * row : 0);
          const yOffset = hexHeight * row * 0.87 + 5;
          drawHex(xOffset + hexRadius, yOffset + hexRadius, '#ddd');
        }
      }
    };

    const getHexAtPosition = (mouseX, mouseY) => {
      for (let row = 0; row <= 11; row++) {
        for (let col = 0; col <= 11; col++) {
            const xOffset = hexHeight * col + (row !== 0 ? (hexHeight / 2) * row : 0);
            const yOffset = hexHeight * row * 0.87 + 5;
            const hexX = xOffset + hexRadius;
            const hexY = yOffset + hexRadius;

            const dist = Math.sqrt((mouseX - hexX) ** 2 + (mouseY - hexY) ** 2);
            if (dist < hexRadius) {
                return { row, col, x: hexX, y: hexY };
          }
        }
      }
      return null;
    };

    const redraw = (hoveredHex) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawHexGrid(11, 11);

      if (hoveredHex) {
        drawHex(hoveredHex.x, hoveredHex.y, '#88f'); // Blue for hover
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const hex = getHexAtPosition(mouseX, mouseY);
      setHoveredHex(hex);
      redraw(hex);
    };

    window.addEventListener("resize", resizeCanvas); // Add resize event listener
    resizeCanvas(); // Set initial canvas size
    canvas.addEventListener("mousemove", handleMouseMove);
    redraw(null);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas); // Clean up on unmount
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-10">
      <canvas
        ref={canvasRef}
        className="border border-black"
      ></canvas>
      <div className="text-center text-lg mt-4">
        {hoveredHex
          ? `Hovered Hex: Row ${hoveredHex.row}, Col ${hoveredHex.col}`
          : `Hover over a hexagon to see its coordinates!`}
      </div>
    </div>
  );
};

export default Game;
