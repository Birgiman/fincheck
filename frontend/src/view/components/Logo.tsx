interface LogoProps {
  className?: string;
}

export function Logo({ className}: LogoProps) {
  return (
    <svg
      viewBox="0 0 139 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      >
      <path fillRule="evenodd" clipRule="evenodd" d="M24.5833 10.1152H12.5149C9.59615 10.1152 7.76562 12.1821 7.76562 15.1081V23.0024C7.76562 25.9284 9.58605 27.9952 12.5149 27.9952H24.5819C27.5121 27.9952 29.334 25.9284 29.334 23.0024V15.1081C29.334 12.1821 27.5121 10.1152 24.5833 10.1152Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.4961 16.0645H24.5963" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24.1134 10.1109L21.999 6.58676C20.4841 4.09179 17.8637 3.25003 15.3486 4.76634L5.01695 10.9843C2.51187 12.4891 2.00741 15.2032 3.51218 17.7184L7.59409 24.4726C7.78435 24.7998 7.9948 25.0938 8.2355 25.3575V25.3676" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path fill="currentColor" d="M45.2824 12.2735H52.2056V25H49.9912V14.4116H45.2824V25H43.068V14.4116H41.0318V12.2735H43.068V11.8917C43.068 8.53191 44.9261 6.85201 48.6422 6.85201C49.3888 6.85201 50.2627 6.96231 51.2639 7.1829V9.19369C50.1439 9.05794 49.2701 8.99006 48.6422 8.99006C47.4714 8.99006 46.6145 9.21066 46.0715 9.65184C45.5454 10.093 45.2824 10.8396 45.2824 11.8917V12.2735ZM61.9356 11.9426C63.4289 11.9426 64.6252 12.4177 65.5245 13.368C66.4239 14.3013 66.8735 15.5739 66.8735 17.1859V25H64.6591V17.3132C64.6591 16.2951 64.3791 15.4975 63.8192 14.9206C63.2592 14.3437 62.4871 14.0552 61.5029 14.0552C60.366 14.0552 59.4667 14.4116 58.8049 15.1242C58.1431 15.82 57.8123 16.8635 57.8123 18.255V25H55.5978V12.2735H57.8123V14.1061C58.6946 12.6638 60.0691 11.9426 61.9356 11.9426ZM75.9463 25.3309C74.0289 25.3309 72.4338 24.6946 71.1612 23.4219C69.8885 22.1323 69.2522 20.5372 69.2522 18.6368C69.2522 16.7363 69.8885 15.1497 71.1612 13.877C72.4338 12.5874 74.0289 11.9426 75.9463 11.9426C77.202 11.9426 78.3304 12.248 79.3316 12.8589C80.3327 13.4528 81.0793 14.2588 81.5714 15.277L79.7134 16.346C79.391 15.6672 78.8904 15.1242 78.2116 14.717C77.5499 14.3097 76.7948 14.1061 75.9463 14.1061C74.6737 14.1061 73.6047 14.5388 72.7392 15.4042C71.8908 16.2866 71.4666 17.3641 71.4666 18.6368C71.4666 19.8924 71.8908 20.9615 72.7392 21.8438C73.6047 22.7092 74.6737 23.1419 75.9463 23.1419C76.7948 23.1419 77.5583 22.9468 78.2371 22.5565C78.9158 22.1493 79.4334 21.6063 79.7897 20.9275L81.6733 22.022C81.1133 23.0401 80.3242 23.8461 79.3061 24.44C78.288 25.0339 77.1681 25.3309 75.9463 25.3309ZM90.1974 11.9426C91.6907 11.9426 92.887 12.4177 93.7863 13.368C94.6856 14.3013 95.1353 15.5739 95.1353 17.1859V25H92.9209V17.3132C92.9209 16.2951 92.6409 15.4975 92.0809 14.9206C91.521 14.3437 90.7489 14.0552 89.7647 14.0552C88.6278 14.0552 87.7285 14.4116 87.0667 15.1242C86.4049 15.82 86.074 16.8635 86.074 18.255V25H83.8596V7.1829H86.074V14.1061C86.9564 12.6638 88.3309 11.9426 90.1974 11.9426ZM110.444 19.6549H99.7793C99.9999 20.7748 100.517 21.6572 101.332 22.302C102.146 22.9298 103.165 23.2437 104.386 23.2437C106.066 23.2437 107.288 22.6244 108.052 21.3857L109.935 22.4547C108.679 24.3722 106.813 25.3309 104.335 25.3309C102.333 25.3309 100.687 24.703 99.3975 23.4474C98.1418 22.1577 97.514 20.5542 97.514 18.6368C97.514 16.7023 98.1333 15.1073 99.372 13.8516C100.611 12.5789 102.214 11.9426 104.183 11.9426C106.049 11.9426 107.568 12.6044 108.739 13.9279C109.927 15.2176 110.52 16.7956 110.52 18.6622C110.52 18.9846 110.495 19.3155 110.444 19.6549ZM104.183 14.0298C103.012 14.0298 102.028 14.3606 101.23 15.0224C100.45 15.6842 99.9659 16.5835 99.7793 17.7204H108.281C108.094 16.5496 107.627 15.6418 106.881 14.997C106.134 14.3522 105.235 14.0298 104.183 14.0298ZM119.023 25.3309C117.105 25.3309 115.51 24.6946 114.237 23.4219C112.965 22.1323 112.328 20.5372 112.328 18.6368C112.328 16.7363 112.965 15.1497 114.237 13.877C115.51 12.5874 117.105 11.9426 119.023 11.9426C120.278 11.9426 121.407 12.248 122.408 12.8589C123.409 13.4528 124.156 14.2588 124.648 15.277L122.79 16.346C122.467 15.6672 121.967 15.1242 121.288 14.717C120.626 14.3097 119.871 14.1061 119.023 14.1061C117.75 14.1061 116.681 14.5388 115.815 15.4042C114.967 16.2866 114.543 17.3641 114.543 18.6368C114.543 19.8924 114.967 20.9615 115.815 21.8438C116.681 22.7092 117.75 23.1419 119.023 23.1419C119.871 23.1419 120.635 22.9468 121.313 22.5565C121.992 22.1493 122.51 21.6063 122.866 20.9275L124.749 22.022C124.19 23.0401 123.4 23.8461 122.382 24.44C121.364 25.0339 120.244 25.3309 119.023 25.3309ZM131.416 18.4331L137.702 25H134.954L129.15 18.9676V25H126.936V7.1829H129.15V17.8986L134.648 12.2735H137.499L131.416 18.4331Z" />
    </svg>


  )
}
