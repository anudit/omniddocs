"use client";

import React, { forwardRef } from "react";

export const ReactNativeIcon = forwardRef<
  SVGSVGElement,
  JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.2 23 20.5"
      ref={ref} // Forward the ref to the svg element
      {...props}
    >
      <circle r="2" fill="#61dafb" />
      <g fill="none" stroke="#61dafb">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
});

ReactNativeIcon.displayName = "ReactNativeIcon";

export const ExpoIcon = forwardRef<
  SVGSVGElement,
  JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={"royalblue"}
      ref={ref}
      {...props}
    >
      <path d="M0 20c0 .6.2 1.1.7 1.9.6.8 1.6 1.3 2.3.5.5-.5 5.8-9.7 8.4-13.3a.8.8 0 0 1 1.2 0c2.6 3.6 7.9 12.8 8.4 13.3.7.8 1.7.3 2.3-.5.5-.9.7-1.5.7-2S15.7 4 15 2.6c-.9-1.2-1.1-1.5-2.5-1.5h-1c-1.4 0-1.6.3-2.4 1.5a414 414 0 0 0-9.1 17Z" />
    </svg>
  );
});

ReactNativeIcon.displayName = "ExpoIcon";

export const NodeJsIcon = forwardRef<
  SVGSVGElement,
  JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 289"
      ref={ref}
      {...props}
    >
      <path
        fill="#539e43"
        d="M128 288.5c-4 0-7.7-1.1-11.1-3l-35.3-20.9c-5.3-2.9-2.6-4-1-4.5 7.1-2.4 8.4-3 15.9-7.1.8-.6 1.8-.3 2.6.2l27 16.2c1.1.5 2.4.5 3.2 0l105.8-61.2c1-.6 1.6-1.6 1.6-3v-122c0-1.3-.6-2.4-1.6-3L129.3 19.3c-1-.5-2.4-.5-3.2 0l-105.7 61c-1 .5-1.6 1.8-1.6 2.9v122.2c0 1 .5 2.3 1.6 2.9L49.3 225c15.6 8 25.4-1.4 25.4-10.6V93.7c0-1.6 1.4-3.2 3.2-3.2h13.5c1.6 0 3.2 1.3 3.2 3.2v120.6c0 20.9-11.4 33-31.3 33-6 0-10.8 0-24.3-6.5l-27.9-16A22.4 22.4 0 0 1 0 205.6V83.3C0 75.4 4.2 68 11.1 64L117 2.8a23.7 23.7 0 0 1 22.2 0L245 64c6.9 4 11.1 11.4 11.1 19.3v122.2c0 8-4.2 15.4-11.1 19.4L139 286a27.1 27.1 0 0 1-11.1 2.4zm32.6-84c-46.4 0-56-21.2-56-39.3 0-1.6 1.4-3.1 3.3-3.1h13.7c1.6 0 3 1 3 2.6 2 14 8.2 21 36.3 21 22.2 0 31.8-5.1 31.8-17 0-7-2.7-12-37.4-15.4-28.9-3-47-9.3-47-32.3 0-21.5 18.1-34.2 48.3-34.2 34 0 50.6 11.7 52.8 37 0 .9-.3 1.7-.8 2.5-.6.5-1.4 1-2.2 1h-13.7c-1.4 0-2.7-1-3-2.3-3.1-14.6-11.3-19.4-33-19.4-24.5 0-27.4 8.5-27.4 14.8 0 7.7 3.5 10.1 36.3 14.4 32.6 4.2 48 10.3 48 33-.3 23.4-19.3 36.7-53 36.7z"
      />
    </svg>
  );
});

ReactNativeIcon.displayName = "NodeJsIcon";

export const DiscordIcon = forwardRef<
  SVGSVGElement,
  JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      ref={ref}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M185 203c-29 0-54 27-54 59s25 59 54 59c30 0 54-26 54-59s-24-59-54-59zm0 88c-13 0-24-13-24-29s11-29 24-29 24 13 24 29-11 29-24 29zm142-88c-30 0-54 27-54 59s24 59 54 59c29 0 54-26 54-59s-25-59-54-59zm0 88c-13 0-24-13-24-29s11-29 24-29 24 13 24 29-11 29-24 29z"
      />
      <path
        fill="currentColor"
        d="M512 363c0-7-9-157-66-247a15 15 0 0 0-5-4c-70-45-118-45-120-45-6 0-11 3-14 8l-24 46a418 418 0 0 0-27 0h-27l-24-46c-3-5-8-8-14-8-2 0-50 0-120 45a15 15 0 0 0-5 4C9 206 0 356 0 363a15 15 0 0 0 4 10 226 226 0 0 0 153 72 15 15 0 0 0 12-5l40-51a416 416 0 0 0 47 3c16 0 32-1 47-3l40 51a15 15 0 0 0 12 5h1c87 0 150-69 152-72a15 15 0 0 0 4-10zm-150 52-25-32c38-7 72-21 99-39a15 15 0 1 0-17-25c-39 27-99 43-163 43s-124-16-163-43a15 15 0 0 0-17 25c27 18 61 32 99 39l-25 32c-59-3-106-44-120-57 3-29 15-149 60-223 44-28 78-35 92-38l15 28c-34 5-65 14-92 26a15 15 0 0 0 13 27c38-18 87-27 138-27s100 9 138 27a15 15 0 0 0 6 2 15 15 0 0 0 7-29c-27-12-58-21-92-26l15-27c14 2 48 9 92 37 45 74 57 194 60 223-14 13-61 54-120 57z"
      />
    </svg>
  );
});

ReactNativeIcon.displayName = "DiscordIcon";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const pathVariants: Variants = {
  normal: { pathLength: 1, opacity: 1, pathOffset: 0 },
  animate: {
    pathLength: [0, 2],
    opacity: [0, 1],
    pathOffset: [0, 2],
    transition: { duration: 0.6 },
  },
};

export const EyeOffIcon2 = () => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer select-none hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
        <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
        <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
        <motion.path
          variants={pathVariants}
          d="m2 2 20 20"
          animate={controls}
        />
      </svg>
    </div>
  );
};

EyeOffIcon2.displayName = "EyeOffIcon2";
