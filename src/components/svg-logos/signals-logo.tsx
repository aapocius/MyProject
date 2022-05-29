import React from 'react';

export type LogoProps = {
  textColor?: string,
  size?: number,
};

const SignalsLogo: React.FC<LogoProps> = ({
  textColor = 'White',
  size = 35,
}) => {
  const height = size;
  const width = size;

  return (
    <svg
      viewBox="0 0 154 154"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <g fill="none">
        <path d="M88.0259 77C88.0259 83.0894 83.0894 88.0259 77 88.0259C70.9106 88.0259 65.9741 83.0894 65.9741 77C65.9741 70.9106 70.9106 65.9741 77 65.9741C83.0894 65.9741 88.0259 70.9106 88.0259 77Z" fill={textColor} />
        <path d="M77 148.668C77 151.713 74.5234 154.201 71.4863 153.987C33.2549 151.289 2.71145 120.745 0.0128887 82.5137C-0.201489 79.4766 2.2872 77 5.33191 77H10.8448C13.8895 77 16.3316 79.4764 16.6046 82.5088C19.2246 111.605 42.3954 134.775 71.4912 137.395C74.5236 137.668 77 140.11 77 143.155V148.668Z" fill={textColor} />
        <path d="M148.668 77C151.713 77 154.201 74.5234 153.987 71.4863C151.289 33.2549 120.745 2.71145 82.5137 0.0128887C79.4765 -0.201489 77 2.2872 77 5.33191V10.8448C77 13.8895 79.4764 16.3316 82.5088 16.6046C111.605 19.2246 134.775 42.3954 137.395 71.4912C137.668 74.5236 140.11 77 143.155 77H148.668Z" fill={textColor} />
        <path d="M115.591 77C118.635 77 121.14 74.5194 120.764 71.498C118.28 51.5395 102.461 35.7201 82.502 33.2364C79.4806 32.8604 77 35.3648 77 38.4095V43.9224C77 46.9671 79.4931 49.3778 82.4777 49.9796C93.3067 52.163 101.837 60.6933 104.02 71.5223C104.622 74.5069 107.033 77 110.078 77H115.591Z" fill={textColor} />
        <path d="M77 110.078C77 107.033 74.5069 104.622 71.5223 104.02C60.6933 101.837 52.163 93.3067 49.9796 82.4777C49.3778 79.4931 46.9671 77 43.9224 77H38.4095C35.3648 77 32.8604 79.4806 33.2364 82.502C35.7201 102.461 51.5395 118.28 71.498 120.764C74.5194 121.14 77 118.635 77 115.591V110.078Z" fill={textColor} />
      </g>
    </svg>
  );
};

export default SignalsLogo;