import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const SpinnerSVG: React.FC<React.SVGAttributes<SVGElement>> = (
  props: React.SVGProps<SVGSVGElement>,
) => (
  <svg viewBox="0 0 20 20" height="20px" width="20px" fill="none" {...props}>
    <path d="M10.0001 0C9.67647 0 9.41412 0.262344 9.41412 0.585938V4.35156C9.41412 4.67516 9.67647 4.9375 10.0001 4.9375C10.3237 4.9375 10.586 4.67516 10.586 4.35156V0.585938C10.586 0.262344 10.3237 0 10.0001 0Z" />
    <path d="M15.0001 1.33975C14.7198 1.17787 14.3614 1.27393 14.1997 1.5542L12.3169 4.81526C12.1551 5.09549 12.2511 5.45385 12.5314 5.61565C12.6236 5.66893 12.7244 5.69424 12.8238 5.69424C13.0263 5.69424 13.2232 5.58916 13.3317 5.40119L15.2145 2.14014C15.3763 1.8599 15.2803 1.50155 15.0001 1.33975Z" />
    <path d="M18.6603 5.00009C18.4985 4.71982 18.1402 4.62384 17.8599 4.78564L14.5988 6.66845C14.3185 6.83021 14.2225 7.18857 14.3843 7.46881C14.4928 7.65682 14.6898 7.76189 14.8923 7.76189C14.9917 7.76189 15.0924 7.73658 15.1847 7.6833L18.4458 5.80048C18.7261 5.63869 18.8221 5.28033 18.6603 5.00009Z" />
    <path d="M19.414 9.41418H15.6485C15.3249 9.41418 15.0626 9.67653 15.0626 10.0001C15.0626 10.3237 15.3249 10.5861 15.6485 10.5861H19.414C19.7376 10.5861 20 10.3237 20 10.0001C20 9.67653 19.7376 9.41418 19.414 9.41418Z" />
    <path d="M18.4458 14.1996L15.1847 12.3169C14.9044 12.1551 14.5461 12.2511 14.3843 12.5314C14.2225 12.8116 14.3185 13.17 14.5988 13.3318L17.8599 15.2145C17.9522 15.2678 18.0529 15.2931 18.1523 15.2931C18.3548 15.2931 18.5518 15.188 18.6602 15.0001C18.822 14.7198 18.726 14.3614 18.4458 14.1996Z" />
    <path d="M15.2145 17.8598L13.3317 14.5987C13.1699 14.3185 12.8116 14.2225 12.5313 14.3843C12.2511 14.5461 12.1551 14.9044 12.3169 15.1847L14.1997 18.4457C14.3082 18.6337 14.5051 18.7388 14.7076 18.7388C14.807 18.7388 14.9078 18.7135 15.0001 18.6602C15.2803 18.4984 15.3763 18.14 15.2145 17.8598Z" />
    <path d="M10.0001 15.0625C9.67647 15.0625 9.41412 15.3248 9.41412 15.6484V19.414C9.41412 19.7376 9.67647 20 10.0001 20C10.3237 20 10.586 19.7376 10.586 19.414V15.6484C10.586 15.3248 10.3237 15.0625 10.0001 15.0625Z" />
    <path d="M7.46878 14.3843C7.18854 14.2224 6.83014 14.3185 6.66838 14.5988L4.78557 17.8599C4.62377 18.1401 4.71979 18.4985 5.00002 18.6603C5.09229 18.7136 5.19303 18.7389 5.29244 18.7389C5.49494 18.7389 5.69194 18.6338 5.80041 18.4458L7.68323 15.1847C7.84503 14.9045 7.74901 14.5461 7.46878 14.3843Z" />
    <path d="M5.61585 12.5314C5.45405 12.2511 5.09577 12.1551 4.81546 12.3169L1.55428 14.1997C1.27405 14.3615 1.17803 14.7199 1.33983 15.0001C1.44834 15.1881 1.6453 15.2932 1.8478 15.2932C1.94721 15.2932 2.04795 15.2679 2.14022 15.2146L5.4014 13.3318C5.68163 13.17 5.77765 12.8116 5.61585 12.5314Z" />
    <path d="M4.3516 9.41418H0.585938C0.262344 9.41418 0 9.67653 0 10.0001C0 10.3237 0.262344 10.5861 0.585938 10.5861H4.3516C4.6752 10.5861 4.93754 10.3237 4.93754 10.0001C4.93754 9.67653 4.6752 9.41418 4.3516 9.41418Z" />
    <path d="M5.40133 6.6684L2.14016 4.78555C1.85984 4.62367 1.50156 4.71973 1.33977 5C1.17797 5.28024 1.27398 5.63859 1.55422 5.80039L4.81539 7.68328C4.90766 7.73656 5.0084 7.76187 5.10781 7.76187C5.31031 7.76187 5.50727 7.65679 5.61578 7.46878C5.77758 7.18855 5.68156 6.83019 5.40133 6.6684Z" />
    <path d="M7.68323 4.81531L5.80041 1.55418C5.63862 1.27391 5.28026 1.1779 5.00002 1.33973C4.71979 1.50153 4.62377 1.85989 4.78557 2.14012L6.66838 5.40125C6.7769 5.58926 6.97385 5.69429 7.17635 5.69429C7.27577 5.69429 7.37651 5.66898 7.46878 5.6157C7.74901 5.4539 7.84503 5.09555 7.68323 4.81531Z" />
  </svg>
);

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner2 = styled(SpinnerSVG)`
  animation: ${spin} 1.6s linear infinite;

  path {
    fill: ${(props): string => props.color || props.theme.palette.Red};
  }
`;