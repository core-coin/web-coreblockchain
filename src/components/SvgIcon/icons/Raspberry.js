import React from 'react'
import createIcon from '../createSvgIcon'

const path = (
    /* eslint-disable max-len */
    <g>
        <path d="M8.62 0.95C8.72 0.97 8.81 0.99 8.9 1.01C9 1.03 9.09 1.05 9.18 1.08C9.27 1.11 9.36 1.14 9.45 1.18C9.54 1.21 9.63 1.25 9.71 1.29C10.6 1 10.8 1.39 11.23 1.56C12.19 1.36 12.49 1.8 12.96 2.26L13.5 2.24C13.8 2.44 14.08 2.67 14.33 2.92C14.59 3.18 14.82 3.45 15.03 3.75C15.24 4.04 15.42 4.36 15.57 4.68C15.73 5.01 15.85 5.35 15.94 5.7C16.03 5.35 16.16 5.01 16.31 4.68C16.46 4.36 16.64 4.04 16.85 3.75C17.06 3.45 17.29 3.18 17.55 2.92C17.81 2.67 18.09 2.44 18.38 2.24L18.92 2.25C19.38 1.78 19.68 1.35 20.65 1.55C21.09 1.37 21.28 1 22.17 1.28C22.73 1.1 23.22 0.65 23.95 1.2C24.08 1.12 24.23 1.06 24.38 1.03C24.53 1 24.69 0.98 24.85 1C25 1.01 25.15 1.05 25.3 1.11C25.44 1.17 25.58 1.25 25.7 1.35C26.53 1.25 26.79 1.45 27 1.7C27.19 1.7 28.36 1.52 28.9 2.3C30.26 2.15 30.69 3.08 30.2 3.96C30.3 4.07 30.39 4.2 30.44 4.34C30.5 4.49 30.52 4.64 30.51 4.8C30.51 4.95 30.47 5.1 30.4 5.24C30.33 5.38 30.24 5.5 30.12 5.6C30.37 6.05 30.21 6.53 29.66 7.12C29.7 7.26 29.71 7.4 29.7 7.53C29.69 7.67 29.65 7.81 29.6 7.93C29.54 8.06 29.46 8.18 29.37 8.28C29.27 8.38 29.16 8.46 29.04 8.53C29.14 9.38 28.24 9.9 27.99 10.06C27.89 10.56 27.68 11.04 26.65 11.29C26.5 12.05 25.88 12.17 25.27 12.32C25.86 12.59 26.4 12.95 26.87 13.39C27.35 13.82 27.76 14.32 28.08 14.88C28.41 15.43 28.65 16.04 28.79 16.67C28.94 17.29 28.98 17.94 28.93 18.58L29.24 19.08C29.98 19.57 30.6 20.21 31.07 20.97C31.53 21.72 31.83 22.57 31.93 23.45C32.04 24.32 31.96 25.22 31.69 26.06C31.41 26.9 30.96 27.68 30.36 28.33C30.31 28.56 30.26 28.8 30.2 29.03C30.13 29.26 30.07 29.49 30 29.72C29.93 29.95 29.85 30.18 29.77 30.41C29.69 30.64 29.6 30.86 29.51 31.08C29.42 31.68 29.26 32.27 29.02 32.82C28.78 33.37 28.47 33.9 28.1 34.37C27.72 34.84 27.29 35.26 26.8 35.62C26.31 35.98 25.78 36.27 25.22 36.48C24.91 36.73 24.6 36.96 24.27 37.18C23.94 37.4 23.61 37.6 23.27 37.79C22.92 37.99 22.57 38.16 22.22 38.33C21.86 38.49 21.5 38.64 21.13 38.77C20.81 39.12 20.45 39.43 20.07 39.7C19.69 39.98 19.27 40.21 18.84 40.4C18.41 40.59 17.96 40.74 17.5 40.84C17.04 40.94 16.57 40.99 16.1 40.99L15.95 40.99C15.48 40.99 15 40.94 14.54 40.84C14.08 40.74 13.62 40.59 13.19 40.4C12.76 40.21 12.35 39.97 11.96 39.7C11.58 39.42 11.22 39.1 10.9 38.75C10.53 38.62 10.16 38.48 9.81 38.32C9.45 38.15 9.1 37.98 8.75 37.79C8.41 37.6 8.07 37.39 7.75 37.17C7.42 36.95 7.11 36.71 6.8 36.47C6.24 36.25 5.7 35.96 5.21 35.61C4.73 35.25 4.29 34.83 3.91 34.36C3.54 33.88 3.22 33.36 2.99 32.81C2.75 32.25 2.58 31.67 2.5 31.07C2.41 30.84 2.32 30.62 2.24 30.39C2.16 30.16 2.08 29.93 2.01 29.69C1.93 29.46 1.87 29.23 1.81 28.99C1.74 28.75 1.69 28.52 1.64 28.28C1.04 27.63 0.59 26.85 0.32 26.01C0.05 25.17 -0.04 24.28 0.07 23.4C0.18 22.53 0.47 21.68 0.94 20.93C1.4 20.18 2.02 19.53 2.76 19.04L3.05 18.55C3 17.91 3.05 17.26 3.19 16.63C3.34 16.01 3.58 15.41 3.9 14.85C4.23 14.29 4.64 13.79 5.12 13.36C5.59 12.93 6.13 12.57 6.72 12.3C6.12 12.15 5.52 12.02 5.34 11.26C4.3 11.01 4.1 10.53 4.01 10.03C3.75 9.85 2.85 9.35 2.95 8.48C2.83 8.41 2.71 8.33 2.62 8.22C2.52 8.12 2.44 8 2.39 7.87C2.33 7.74 2.3 7.6 2.29 7.46C2.27 7.32 2.29 7.18 2.32 7.04C1.8 6.47 1.65 5.97 1.87 5.51C1.75 5.41 1.65 5.29 1.59 5.15C1.52 5.01 1.48 4.86 1.47 4.71C1.47 4.56 1.49 4.4 1.54 4.26C1.6 4.12 1.68 3.99 1.79 3.88C1.31 3 1.74 2.06 3.09 2.21C3.61 1.43 4.79 1.61 4.96 1.61C5.16 1.35 5.44 1.13 6.28 1.23C6.4 1.13 6.53 1.05 6.67 0.99C6.82 0.93 6.97 0.89 7.13 0.88C7.28 0.86 7.44 0.87 7.59 0.9C7.75 0.93 7.89 0.98 8.03 1.06C8.08 1.02 8.13 0.98 8.18 0.94C8.24 0.91 8.29 0.88 8.35 0.86C8.41 0.84 8.47 0.82 8.53 0.8C8.59 0.79 8.65 0.78 8.72 0.78L8.62 0.95ZM9.38 30.34C7.86 28.59 5.88 27.56 4.61 28.33C3.75 28.96 3.59 31.15 4.81 33.3C6.61 35.85 9.16 36.11 10.21 35.49C11.31 34.67 10.7 31.9 9.37 30.34L9.38 30.34ZM16.26 35.6C14.41 35.56 11.56 36.34 11.61 37.34C11.57 38.01 13.84 39.97 16.15 39.87C18.36 39.92 20.66 37.96 20.64 37.11C20.63 36.23 18.13 35.55 16.27 35.63L16.26 35.6ZM16.14 12.24C14 12.18 11.94 13.8 11.94 14.74C11.93 15.88 13.63 17.04 16.15 17.08C18.74 17.09 20.37 16.15 20.39 14.97C20.42 13.64 18.05 12.23 16.17 12.24L16.14 12.24L16.14 12.24ZM10.98 13.13C7.41 12.56 4.43 14.64 4.56 18.48C4.67 19.96 12.32 13.39 11 13.16L10.98 13.13ZM27.32 18.58C27.44 14.76 24.46 12.68 20.88 13.26C19.57 13.48 27.21 20.07 27.32 18.58ZM27.94 19.96C25.86 19.41 27.24 28.43 28.93 27.7C29.48 27.18 29.89 26.53 30.15 25.82C30.4 25.11 30.48 24.34 30.39 23.59C30.29 22.84 30.02 22.12 29.59 21.5C29.17 20.87 28.6 20.35 27.94 19.99L27.94 19.96ZM2.97 27.79L2.97 27.8C2.97 27.8 2.97 27.8 2.97 27.8L2.97 27.79ZM3.96 20.08C3.3 20.45 2.73 20.97 2.31 21.6C1.88 22.23 1.61 22.95 1.51 23.7C1.42 24.45 1.5 25.22 1.75 25.93C2 26.65 2.42 27.29 2.97 27.82L2.97 27.8C4.66 28.55 6.03 19.53 3.96 20.08ZM17.99 24.1C19.49 26.31 22.25 27.14 24.17 25.91C26.09 24.68 26.44 21.87 24.95 19.63C23.45 17.39 20.68 16.59 18.76 17.85L18.76 17.83C16.83 19.08 16.49 21.9 17.99 24.1ZM13.56 18.05C11.65 16.82 8.86 17.63 7.38 19.84C5.88 22.08 6.23 24.89 8.15 26.15C10.08 27.4 12.84 26.59 14.34 24.36C15.82 22.15 15.47 19.34 13.56 18.09L13.56 18.05ZM20.88 30.05C20.85 29.47 20.7 28.91 20.45 28.38C20.2 27.86 19.85 27.39 19.42 27C18.99 26.61 18.48 26.31 17.94 26.11C17.39 25.92 16.81 25.84 16.23 25.87C15.65 25.85 15.07 25.94 14.52 26.14C13.97 26.34 13.47 26.64 13.04 27.04C12.62 27.43 12.27 27.9 12.02 28.43C11.78 28.96 11.64 29.53 11.61 30.11L11.61 30.16C11.64 30.74 11.78 31.31 12.03 31.83C12.28 32.36 12.64 32.83 13.07 33.22C13.5 33.61 14.01 33.91 14.56 34.1C15.1 34.3 15.69 34.38 16.27 34.35C16.85 34.38 17.43 34.29 17.97 34.09C18.52 33.9 19.02 33.59 19.44 33.2C19.87 32.81 20.22 32.33 20.46 31.81C20.71 31.28 20.84 30.71 20.87 30.13L20.87 30.08L20.88 30.05ZM26.17 4.82C26.03 4.86 25.89 4.91 25.75 4.96C25.91 4.87 26.08 4.78 26.26 4.69L26.17 4.82ZM18.9 9.62C19.53 12.13 22.82 12.23 24.03 12.16C23.98 12.14 23.92 12.12 23.87 12.09C23.82 12.06 23.77 12.03 23.72 11.99C23.68 11.95 23.63 11.91 23.6 11.86C23.56 11.82 23.53 11.77 23.5 11.72C23.8 11.52 24.87 11.69 25.63 11.28C25.57 11.28 25.51 11.28 25.46 11.26C25.41 11.25 25.35 11.22 25.3 11.2C25.26 11.17 25.21 11.13 25.17 11.09C25.13 11.05 25.1 11 25.07 10.95C25.24 10.92 25.41 10.88 25.57 10.82C25.74 10.77 25.9 10.72 26.06 10.65C26.22 10.59 26.38 10.51 26.53 10.43C26.68 10.35 26.83 10.27 26.98 10.18C26.91 10.19 26.85 10.19 26.78 10.19C26.71 10.19 26.64 10.18 26.58 10.17C26.51 10.16 26.45 10.14 26.38 10.12C26.32 10.09 26.26 10.06 26.2 10.03C26.37 9.96 26.53 9.88 26.69 9.8C26.85 9.72 27 9.63 27.15 9.54C27.31 9.45 27.46 9.35 27.6 9.25C27.75 9.15 27.89 9.04 28.03 8.93C27.7 8.93 27.35 8.93 27.25 8.8C27.39 8.72 27.52 8.64 27.65 8.55C27.78 8.46 27.91 8.36 28.03 8.26C28.15 8.16 28.27 8.06 28.39 7.95C28.5 7.84 28.61 7.73 28.72 7.61C28.27 7.69 28.07 7.65 27.96 7.57C28.08 7.47 28.2 7.37 28.32 7.27C28.43 7.16 28.54 7.05 28.65 6.94C28.75 6.83 28.85 6.71 28.95 6.58C29.04 6.46 29.13 6.33 29.22 6.2C29.15 6.24 29.08 6.26 29.01 6.28C28.93 6.3 28.86 6.31 28.78 6.31C28.71 6.31 28.63 6.3 28.56 6.28C28.48 6.26 28.41 6.24 28.34 6.2C28.5 5.88 29.14 5.68 29.5 4.9C29.43 4.92 29.37 4.93 29.3 4.94C29.23 4.95 29.16 4.96 29.09 4.96C29.02 4.96 28.95 4.95 28.89 4.94C28.82 4.93 28.75 4.92 28.68 4.9C28.72 4.77 28.76 4.64 28.81 4.52C28.86 4.39 28.92 4.27 28.98 4.15C29.04 4.03 29.11 3.91 29.18 3.8C29.25 3.69 29.33 3.58 29.41 3.47C29.26 3.48 29.1 3.48 28.94 3.48C28.79 3.48 28.63 3.48 28.47 3.48C28.32 3.47 28.16 3.47 28.01 3.46C27.85 3.45 27.69 3.44 27.54 3.42L28.01 2.95C27.84 2.91 27.66 2.89 27.48 2.88C27.31 2.87 27.13 2.88 26.96 2.9C26.78 2.91 26.61 2.94 26.44 2.98C26.27 3.03 26.1 3.08 25.93 3.15C25.69 2.97 25.93 2.71 26.24 2.46C26.09 2.48 25.95 2.51 25.8 2.53C25.65 2.56 25.51 2.59 25.36 2.63C25.22 2.67 25.08 2.71 24.93 2.75C24.79 2.79 24.65 2.84 24.51 2.89C24.24 2.64 24.68 2.42 24.91 2.16C24.75 2.19 24.59 2.23 24.43 2.27C24.27 2.31 24.12 2.37 23.96 2.42C23.81 2.48 23.66 2.55 23.51 2.62C23.36 2.7 23.22 2.78 23.08 2.86C22.78 2.59 23.06 2.34 23.26 2.12C23.12 2.17 22.98 2.23 22.85 2.3C22.71 2.36 22.58 2.44 22.45 2.52C22.32 2.6 22.2 2.68 22.08 2.78C21.96 2.87 21.84 2.96 21.73 3.07C21.58 2.89 21.38 2.77 21.63 2.31C21.51 2.38 21.4 2.45 21.28 2.53C21.17 2.61 21.06 2.69 20.96 2.78C20.86 2.87 20.76 2.96 20.66 3.06C20.57 3.16 20.48 3.26 20.4 3.37C20.08 3.15 20.2 2.87 20.2 2.61C20.08 2.72 19.96 2.82 19.85 2.93C19.73 3.04 19.62 3.15 19.51 3.27C19.4 3.38 19.29 3.49 19.18 3.61C19.08 3.73 18.97 3.85 18.87 3.97C18.77 3.92 18.69 3.71 18.64 3.39C17.34 4.65 15.48 7.79 18.16 9.01C18.76 8.55 19.38 8.11 20.02 7.7C20.65 7.29 21.31 6.91 21.98 6.56C22.65 6.21 23.34 5.88 24.04 5.59C24.6 5.36 25.17 5.15 25.75 4.96C22.19 6.82 20.08 8.32 18.9 9.62ZM5.72 4.69C6.44 4.92 7.15 5.18 7.85 5.47C8.55 5.77 9.24 6.09 9.91 6.44C10.58 6.8 11.23 7.18 11.87 7.59C12.5 8 13.12 8.44 13.72 8.91C16.39 7.65 14.54 4.51 13.24 3.29C13.17 3.61 13.1 3.84 13.02 3.89C12.92 3.77 12.81 3.65 12.71 3.53C12.6 3.41 12.49 3.3 12.38 3.18C12.27 3.07 12.16 2.96 12.05 2.85C11.93 2.74 11.82 2.63 11.7 2.53C11.7 2.78 11.83 3.09 11.5 3.28C11.42 3.18 11.33 3.07 11.24 2.97C11.15 2.87 11.05 2.78 10.95 2.69C10.85 2.6 10.74 2.52 10.63 2.44C10.52 2.37 10.4 2.3 10.29 2.23C10.54 2.66 10.33 2.79 10.19 2.98C10.08 2.88 9.97 2.77 9.85 2.67C9.74 2.58 9.62 2.49 9.49 2.4C9.36 2.32 9.23 2.24 9.1 2.17C8.97 2.1 8.83 2.04 8.69 1.98C8.89 2.23 9.19 2.48 8.89 2.76C8.75 2.67 8.61 2.59 8.47 2.52C8.32 2.45 8.17 2.38 8.02 2.32C7.87 2.26 7.72 2.21 7.56 2.17C7.41 2.12 7.25 2.09 7.09 2.06C7.31 2.31 7.77 2.56 7.49 2.82C7.35 2.77 7.21 2.72 7.07 2.67C6.93 2.63 6.78 2.58 6.64 2.55C6.49 2.51 6.35 2.48 6.2 2.45C6.05 2.42 5.91 2.4 5.76 2.38C6.06 2.63 6.32 2.87 6.08 3.06C5.91 2.99 5.74 2.94 5.57 2.89C5.4 2.85 5.22 2.81 5.04 2.8C4.86 2.78 4.69 2.77 4.51 2.78C4.33 2.79 4.15 2.81 3.97 2.84L4.44 3.32C4.29 3.33 4.13 3.35 3.98 3.36C3.82 3.37 3.66 3.38 3.51 3.38C3.35 3.39 3.19 3.39 3.04 3.39C2.88 3.39 2.72 3.39 2.56 3.38C2.65 3.49 2.73 3.59 2.81 3.71C2.88 3.82 2.95 3.93 3.01 4.05C3.07 4.18 3.13 4.3 3.18 4.43C3.22 4.55 3.26 4.68 3.3 4.81C3.23 4.82 3.16 4.83 3.09 4.84C3.03 4.85 2.96 4.85 2.89 4.85C2.82 4.85 2.76 4.85 2.69 4.84C2.62 4.83 2.55 4.82 2.49 4.81C2.86 5.57 3.49 5.77 3.64 6.09C3.57 6.13 3.5 6.15 3.43 6.17C3.36 6.19 3.28 6.2 3.21 6.2C3.13 6.2 3.05 6.19 2.98 6.17C2.91 6.15 2.84 6.13 2.77 6.09C2.86 6.22 2.95 6.34 3.05 6.46C3.15 6.58 3.25 6.7 3.35 6.81C3.46 6.93 3.57 7.04 3.68 7.14C3.79 7.25 3.91 7.35 4.03 7.45C3.97 7.48 3.9 7.5 3.84 7.52C3.77 7.53 3.71 7.54 3.64 7.55C3.58 7.56 3.51 7.56 3.44 7.55C3.38 7.54 3.31 7.53 3.25 7.51C3.35 7.63 3.47 7.74 3.58 7.85C3.7 7.95 3.81 8.06 3.94 8.16C4.06 8.25 4.18 8.35 4.31 8.44C4.44 8.53 4.57 8.61 4.71 8.69C4.61 8.81 4.25 8.8 3.9 8.82C4.04 8.93 4.18 9.04 4.33 9.14C4.47 9.25 4.62 9.35 4.78 9.44C4.93 9.53 5.09 9.62 5.25 9.7C5.4 9.79 5.57 9.86 5.73 9.93C5.68 9.97 5.62 10 5.55 10.03C5.49 10.06 5.43 10.08 5.36 10.1C5.29 10.11 5.23 10.12 5.16 10.12C5.09 10.13 5.02 10.12 4.96 10.11C5.1 10.21 5.25 10.29 5.4 10.37C5.56 10.45 5.71 10.52 5.87 10.58C6.03 10.65 6.19 10.7 6.36 10.75C6.52 10.8 6.69 10.85 6.86 10.88C6.83 10.93 6.79 10.98 6.75 11.02C6.71 11.06 6.66 11.09 6.61 11.12C6.56 11.15 6.5 11.17 6.45 11.19C6.39 11.2 6.33 11.21 6.28 11.21C7.03 11.64 8.08 11.44 8.39 11.67C8.36 11.72 8.33 11.77 8.3 11.82C8.26 11.87 8.22 11.91 8.17 11.95C8.13 11.99 8.08 12.02 8.03 12.05C7.97 12.08 7.92 12.11 7.86 12.12C9.06 12.19 12.39 12.1 13.02 9.59C11.78 8.24 9.52 6.65 5.66 4.69L5.72 4.69ZM22.88 29.84C21.45 31.49 20.65 34.51 21.69 35.49C22.69 36.23 25.38 36.14 27.36 33.42C28.81 31.6 28.32 28.57 27.5 27.76C26.27 26.84 24.52 28.04 22.88 29.85L22.88 29.84Z"/>
    </g>

    /* eslint-enable */
);
const Raspberry = createIcon(path, {
    width: 32,
    height: 41,
    viewBox: '0 0 32 41'
})

export default Raspberry