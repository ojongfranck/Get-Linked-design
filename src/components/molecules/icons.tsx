import { RefAttributes, SVGProps } from "react";

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type IconsProps = RefAttributes<SVGSVGElement> & SVGAttributes;
export default {
  Logo: (props) => (
    <svg
      width="170"
      height="32"
      viewBox="0 0 170 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.144 22.984C3.744 22.984 0.72 19.888 0.72 14.704C0.72 9.592 3.96 6.496 9.324 6.496C12.996 6.496 15.444 7.972 15.948 11.104H16.308V6.856H22.644V21.94C22.644 28.42 18.792 31.48 11.808 31.48C5.472 31.48 1.8 28.816 1.8 24.064H8.568C8.568 25.54 8.748 25.9 12.276 25.9C15.192 25.9 15.876 25.468 15.876 22.408V18.592H15.516C15.048 21.22 13.14 22.984 9.144 22.984ZM7.56 14.704C7.56 16.504 8.424 17.188 11.592 17.188C14.616 17.188 15.876 16.828 15.876 14.92V14.668C15.876 12.724 14.616 12.328 11.592 12.328C8.424 12.328 7.56 12.94 7.56 14.704ZM34.9265 25.36C28.7705 25.36 24.4505 22.732 24.4505 15.928C24.4505 10.024 28.7345 6.496 34.7825 6.496C41.0465 6.496 45.0425 9.628 45.0425 15.46C45.0425 16.072 45.0065 16.54 44.9345 17.188H30.7145C30.8225 19.384 31.7945 19.996 34.6745 19.996C37.4105 19.996 38.1305 19.528 38.1305 18.448V18.052H44.8985V18.484C44.8985 22.516 41.0465 25.36 34.9265 25.36ZM34.6385 11.68C32.1545 11.68 31.1105 12.22 30.8225 13.768H38.4905C38.2385 12.22 37.1585 11.68 34.6385 11.68ZM60.4254 25H55.6734C51.1374 25 48.4374 22.804 48.4374 18.088V12.4H45.7734V6.856H48.4374V3.724H55.2054V6.856H60.4254V12.4H55.2054V17.116C55.2054 18.556 55.6374 18.916 57.1854 18.916H60.4254V25Z"
        fill="white"
      />
      <path
        d="M68.8089 25H62.0409V0.879999H68.8089V25ZM77.7386 5.2H70.9706V0.879999H77.7386V5.2ZM77.7386 25H70.9706V6.856H77.7386V25ZM86.6683 25H79.9003V6.856H86.2363V12.364H86.5963C86.9923 9.34 88.9723 6.496 93.8323 6.496C98.7283 6.496 101.032 9.448 101.032 13.372V25H94.2643V15.856C94.2643 13.336 93.3283 12.544 90.3763 12.544C87.3883 12.544 86.6683 13.3 86.6683 15.64V25ZM109.801 25H103.033V0.879999H109.801V13.156H113.005L117.001 6.856H124.993L118.549 15.676L124.885 25H116.893L113.077 19.204H109.801V25ZM135.825 25.36C129.669 25.36 125.349 22.732 125.349 15.928C125.349 10.024 129.633 6.496 135.681 6.496C141.945 6.496 145.941 9.628 145.941 15.46C145.941 16.072 145.905 16.54 145.833 17.188H131.613C131.721 19.384 132.693 19.996 135.573 19.996C138.309 19.996 139.029 19.528 139.029 18.448V18.052H145.797V18.484C145.797 22.516 141.945 25.36 135.825 25.36ZM135.537 11.68C133.053 11.68 132.009 12.22 131.721 13.768H139.389C139.137 12.22 138.057 11.68 135.537 11.68ZM155.996 25.36C150.452 25.36 147.392 21.796 147.392 15.928C147.392 10.024 150.38 6.496 155.708 6.496C159.992 6.496 162.008 8.512 162.548 11.536H162.908V0.879999H169.676V25H163.34V20.104H162.98C162.404 23.704 160.244 25.36 155.996 25.36ZM154.232 15.928C154.232 18.34 155.312 19.168 158.444 19.168C161.468 19.168 162.908 18.592 162.908 15.964V15.712C162.908 13.156 161.468 12.652 158.444 12.652C155.312 12.652 154.232 13.516 154.232 15.928Z"
        fill="#D434FE"
      />
    </svg>
  ),
  Menu: (props) => (
    <svg
      width="19"
      height="14"
      viewBox="0 0 19 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35702 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35702 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z"
        fill="white"
      />
    </svg>
  ),
  Cancel: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill={"none"}
      {...props}
    >
      <path
        d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Line: (props) => (
    <svg
      width="263"
      height="25"
      viewBox="0 0 263 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_120_4)">
        <path
          d="M5 14.043C47.3333 5.7097 158.4 -5.95697 258 14.043"
          stroke="#FF26B9"
          strokeWidth="5"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_120_4"
          x="0.517136"
          y="0.500031"
          width="261.975"
          height="23.9959"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_120_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_120_4"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),
  Star: (props) => <></>,
} satisfies Record<string, (props: IconsProps) => JSX.Element>;
