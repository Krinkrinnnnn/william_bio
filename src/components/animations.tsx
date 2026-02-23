"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Box, LinearProgress } from "@mui/material";

// ─── Intersection Observer hook ───

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── FadeInSection ───

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  distance?: number;
}

export function FadeInSection({
  children,
  delay = 0,
  direction = "up",
  distance = 24,
}: FadeInSectionProps) {
  const { ref, inView } = useInView(0.1);

  const translate =
    direction === "up"
      ? `translateY(${distance}px)`
      : direction === "left"
        ? `translateX(-${distance}px)`
        : `translateX(${distance}px)`;

  return (
    <Box
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0)" : translate,
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </Box>
  );
}

// ─── StaggerContainer / StaggerItem ───

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const { ref, inView } = useInView(0.1);

  return (
    <Box
      ref={ref}
      sx={{
        "& > .stagger-item": {
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(16px)",
        },
        ...Array.from({ length: 30 }, (_, i) => ({
          [`& > .stagger-item:nth-of-type(${i + 1})`]: {
            transitionDelay: `${i * staggerDelay}s`,
          },
        })).reduce((a, b) => ({ ...a, ...b }), {}),
      }}
    >
      {children}
    </Box>
  );
}

export function StaggerItem({ children }: { children: ReactNode }) {
  return (
    <Box
      className="stagger-item"
      sx={{ transition: "opacity 0.5s ease, transform 0.5s ease" }}
    >
      {children}
    </Box>
  );
}

// ─── AnimatedCounter ───

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({
  target,
  suffix = "",
  duration = 1.5,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView(0.3);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const steps = 40;
    const increment = target / steps;
    const interval = (duration * 1000) / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─── TypeWriter ───

interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export function TypeWriter({ text, speed = 55, delay = 300 }: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;
    const timeout = setTimeout(
      () => setDisplayed(text.slice(0, displayed.length + 1)),
      speed
    );
    return () => clearTimeout(timeout);
  }, [started, displayed, text, speed]);

  return (
    <>
      {displayed}
      {displayed.length < text.length && (
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: "3px",
            height: "1em",
            bgcolor: "#00B7B5",
            ml: 0.5,
            verticalAlign: "text-bottom",
            animation: "blink 0.8s step-end infinite",
            "@keyframes blink": {
              "0%, 100%": { opacity: 1 },
              "50%": { opacity: 0 },
            },
          }}
        />
      )}
    </>
  );
}

// ─── AnimatedSkillBar ───

interface AnimatedSkillBarProps {
  value: number;
  delay?: number;
}

export function AnimatedSkillBar({ value, delay = 0 }: AnimatedSkillBarProps) {
  const { ref, inView } = useInView(0.2);

  return (
    <Box ref={ref}>
      <LinearProgress
        variant="determinate"
        value={inView ? value : 0}
        sx={{
          height: 8,
          borderRadius: 4,
          bgcolor: "#e8f5f4",
          "& .MuiLinearProgress-bar": {
            borderRadius: 4,
            background: "linear-gradient(90deg, #005461, #018790, #00B7B5)",
            transition: `transform 1s ease ${delay}s`,
          },
        }}
      />
    </Box>
  );
}

// ─── FloatingElement ───

interface FloatingElementProps {
  children: ReactNode;
  amplitude?: number;
  duration?: number;
}

export function FloatingElement({
  children,
  amplitude = 8,
  duration = 4,
}: FloatingElementProps) {
  return (
    <Box
      sx={{
        animation: `floatUpDown ${duration}s ease-in-out infinite`,
        [`@keyframes floatUpDown`]: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: `translateY(-${amplitude}px)` },
        },
      }}
    >
      {children}
    </Box>
  );
}

// ─── AnimatedOrb ───

interface AnimatedOrbProps {
  size: number;
  top: string;
  left: string;
  delay?: number;
  color?: string;
}

export function AnimatedOrb({
  size,
  top,
  left,
  delay = 0,
  color = "rgba(255,255,255,0.04)",
}: AnimatedOrbProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        animation: `orbDrift 8s ease-in-out ${delay}s infinite`,
        pointerEvents: "none",
        "@keyframes orbDrift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, -15px) scale(1.05)" },
        },
      }}
    />
  );
}

// ─── ScaleIn ───

export function ScaleIn({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView(0.2);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.7)",
        transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      {children}
    </Box>
  );
}
