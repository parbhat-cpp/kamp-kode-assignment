import OrbitingCircles from "@/components/magicui/orbiting-clircle";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { MdArrowForward } from "react-icons/md";

const navbarItems = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Products",
    link: "#",
  },
  {
    name: "Resources",
    link: "#",
  },
  {
    name: "Pricing",
    link: "#",
  },
];

const Icons = {
  html: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="html5">
      <path
        fill="#E44D26"
        d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"
      ></path>
      <path
        fill="#F16529"
        d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"
      ></path>
      <path
        fill="#EBEBEB"
        d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"
      ></path>
      <path
        fill="#fff"
        d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
      ></path>
    </svg>
  ),
  react: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="react">
      <circle cx="12" cy="11.999" r="2.147" fill="#53C1DE"></circle>
      <path
        fill="#53C1DE"
        d="M4.514 15.801c.211.07.422.141.638.202-.07.281-.131.558-.188.844-.492 2.602-.108 4.664 1.12 5.372 1.266.731 3.394-.019 5.466-1.833.164-.145.328-.295.492-.455.206.202.422.394.637.581 2.006 1.725 3.989 2.423 5.213 1.716 1.266-.731 1.678-2.948 1.144-5.648a18.477 18.477 0 0 0-.141-.633c.15-.042.295-.089.441-.136 2.705-.895 4.664-2.344 4.664-3.83 0-1.42-1.847-2.798-4.397-3.675v-.001a24.589 24.589 0 0 0-.759-.239c.042-.173.08-.347.117-.52.577-2.794.197-5.038-1.083-5.779-1.233-.708-3.244.028-5.278 1.8-.202.173-.398.356-.586.539a14.702 14.702 0 0 0-.389-.361C9.492 1.851 7.355 1.054 6.075 1.8c-1.228.713-1.594 2.827-1.078 5.469.052.263.108.52.173.783-.3.084-.595.178-.872.277C1.795 9.196 0 10.565 0 11.981c0 1.463 1.912 2.929 4.514 3.82zm6.375 3.819a8.585 8.585 0 0 1-2.644 1.655c-.52.248-1.12.272-1.655.061-.745-.431-1.055-2.086-.633-4.313.052-.262.108-.525.173-.783 1.05.225 2.109.38 3.183.459a24.606 24.606 0 0 0 2.025 2.503c-.15.145-.3.286-.45.417l.001.001zm5.953-8.802a36.56 36.56 0 0 0-.68-1.228c-.23-.398-.469-.792-.717-1.181.755.094 1.477.22 2.152.375a20.737 20.737 0 0 1-.755 2.034zm.009 2.334c.3.68.563 1.369.792 2.077-.727.164-1.462.291-2.203.375a32.717 32.717 0 0 0 1.411-2.452zm-.542-1.166a31.495 31.495 0 0 1-2.146 3.74c-.698.052-1.425.075-2.161.075s-1.448-.023-2.137-.066a28.48 28.48 0 0 1-2.161-3.731h-.002a28.24 28.24 0 0 1 2.147-3.726 29.151 29.151 0 0 1 4.304 0c.398.591.778 1.195 1.139 1.814a32.18 32.18 0 0 1 1.017 1.894zM7.832 9.599c-.23.398-.455.805-.666 1.218a22.302 22.302 0 0 1-.75-2.043c.675-.15 1.392-.272 2.137-.366-.247.389-.491.787-.721 1.191zm-.665 3.59c.216.413.436.821.67 1.224.239.408.483.816.741 1.214a21.23 21.23 0 0 1-2.175-.352c.206-.675.464-1.373.764-2.086zm4.871 5.291a21.873 21.873 0 0 1-1.42-1.701 32.91 32.91 0 0 0 2.808-.005 19.942 19.942 0 0 1-1.388 1.706zm6.127 1.408a2.086 2.086 0 0 1-.774 1.466c-.745.431-2.334-.131-4.05-1.603a20.163 20.163 0 0 1-.595-.539 23.21 23.21 0 0 0 1.978-2.512 23.126 23.126 0 0 0 3.197-.492c.047.192.089.384.127.572a8.54 8.54 0 0 1 .117 3.108zm.407-10.856c.244.07.478.145.703.22 2.184.75 3.717 1.866 3.717 2.719 0 .919-1.636 2.105-3.975 2.878-.131.042-.262.084-.398.122a23.84 23.84 0 0 0-1.195-2.991c.45-.956.83-1.941 1.148-2.948zM13.26 4.326c1.745-1.518 3.371-2.113 4.112-1.687.792.455 1.097 2.292.6 4.706a7.988 7.988 0 0 1-.108.469 24.1 24.1 0 0 0-3.155-.497 23.536 23.536 0 0 0-1.997-2.49c.183-.173.361-.337.548-.501zm-1.25 1.219c.492.534.956 1.096 1.387 1.677a30.883 30.883 0 0 0-2.789 0c.459-.604.933-1.166 1.402-1.677zM6.572 2.672c.788-.459 2.536.197 4.378 1.828.117.103.234.216.356.328a23.643 23.643 0 0 0-2.011 2.488 24.72 24.72 0 0 0-3.15.488c-.061-.239-.112-.483-.164-.727-.441-2.269-.15-3.979.591-4.405zM4.627 9.28c.267-.094.539-.178.811-.258a24.986 24.986 0 0 0 1.148 2.981c-.45.98-.839 1.992-1.162 3.023l-.001.001a11.205 11.205 0 0 1-.581-.183c-.998-.314-2.133-.811-2.953-1.462a2.103 2.103 0 0 1-.881-1.402c0-.858 1.481-1.955 3.619-2.7z"
      ></path>
    </svg>
  ),
  flutter: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
      id="flutter"
    >
      <polygon
        fill="#0D47A1"
        points="11.536 21.231 14.305 24 21.695 24 15.232 17.537 11.536 21.231"
      ></polygon>
      <polygon
        fill="#42A5F5"
        points="7.849 17.538 11.539 13.848 15.229 17.538 11.539 21.229 7.849 17.538"
      ></polygon>
      <polygon
        fill="#5A9FD7"
        points="15.233 17.536 15.231 17.536 15.231 17.536 15.232 17.536 15.232 17.536 15.233 17.536"
      ></polygon>
      <polygon
        fill="#0B3E8C"
        points="15.372 17.677 17.02 19.337 13.11 20.688 12.054 21.744 11.54 21.23 11.536 21.231 14.305 24 21.695 24 15.372 17.677"
      ></polygon>
      <polygon
        fill="#3990D5"
        points="15.227 17.536 7.852 17.536 7.849 17.538 11.539 21.229 15.229 17.538 15.227 17.536"
      ></polygon>
      <path
        fill="#68B7F7"
        d="M21.695,11.073h-7.391l-2.768,2.768l3.694,3.694h0.002L21.695,11.073L21.695,11.073z M21.695,0h-7.391l-12,11.999L6,15.695L21.695,0L21.695,0z"
      ></path>
      <path
        fill="#5B9FD7"
        d="M20.844,11.073h-6.539l-2.768,2.768l3.694,3.694h0.002l5.611-5.611V11.073L20.844,11.073z M15.695,6H8.304l-5.999,5.999L6,15.695L15.695,6L15.695,6z"
      ></path>
    </svg>
  ),
  android: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#30dc80"
        d="M24,14.088C11.427,14.088,1.108,23.716,0,36h48C46.892,23.716,36.573,14.088,24,14.088z M33.179,27.079c0-1.104,0.895-1.999,1.999-1.999c1.104,0,1.999,0.895,1.999,1.999c0,1.104-0.895,1.999-1.999,1.999	C34.074,29.078,33.179,28.183,33.179,27.079z M12.822,29.078c-1.104,0-1.999-0.895-1.999-1.999c0-1.104,0.895-1.999,1.999-1.999	s1.999,0.895,1.999,1.999C14.821,28.183,13.926,29.078,12.822,29.078z"
      ></path>
      <path
        fill="#30dc80"
        d="M34.038,19.313c-0.14,0-0.281-0.035-0.41-0.11c-0.393-0.227-0.527-0.729-0.301-1.122l5.197-9.008	c0.227-0.394,0.729-0.529,1.122-0.301c0.393,0.227,0.527,0.729,0.301,1.122l-5.197,9.008C34.598,19.166,34.322,19.313,34.038,19.313	z"
      ></path>
      <path
        fill="#30dc80"
        d="M13.962,19.313c-0.284,0-0.56-0.148-0.712-0.411L8.054,9.894C7.827,9.501,7.962,8.999,8.354,8.772	c0.392-0.228,0.895-0.093,1.122,0.301l5.197,9.008c0.227,0.394,0.092,0.896-0.301,1.122C14.243,19.278,14.102,19.313,13.962,19.313z"
      ></path>
    </svg>
  ),
  javascript: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path>
      <path
        fill="#000001"
        d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"
      ></path>
    </svg>
  ),
  aws: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#252f3e"
        d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"
      ></path>
      <path
        fill="#f90"
        d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"
      ></path>
    </svg>
  ),
};

export default function Home() {
  return (
    <>
      {/* homepage container */}
      <div className="h-[100vh]">
        {/* navbar */}
        <FloatingNav navItems={navbarItems} />
        {/* orbiting icons background & heading with action */}
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background px-[20px]">
          <div className="grid gap-10 pointer-events-none z-20 text-center whitespace-pre-wrap bg-clip-text font-semibold leading-none dark:from-white dark:to-slate-900/10">
            <div className="grid gap-10">
              <h1 className="text-center md:text-6xl text-4xl">
                We&apos;ve really sped up our workflow
              </h1>
              <div className="grid gap-5 text-[#475467]">
                <p className="font-light leading-tight">
                  <span className="font-bold">
                    We&apos;ve just released a new update!
                  </span>
                  Check out the all new dashboard view. Pages and now load
                  faster you can try us for free for 30 days.
                </p>
                <p className="font-light">
                  Join 4,000+ companies already growing
                </p>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col md:gap-5 gap-3 justify-center">
              <button className="flex gap-[12px] font-2xl justify-center rounded-[8px] border-[1px] p-[16px_28px] border-[#D0D5DD] bg-white cursor-pointer">
                <MdArrowForward />
                Start learning today
              </button>
              <button className="flex gap-[12px] font-2xl justify-center rounded-[8px] border-[1px] p-[16px_28px] border-[#BDB4FE] bg-[#7F6EFC] text-white cursor-pointer">
                Join now
              </button>
            </div>
          </div>

          {/* Inner Circles */}
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={120}
          ></OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            duration={20}
            delay={10}
            radius={180}
          >
            <Icons.html />
          </OrbitingCircles>

          {/* Outer Circles (reverse) */}
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            radius={240}
            duration={20}
            reverse
          >
            <Icons.react />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            radius={320}
            duration={20}
            delay={20}
          >
            <Icons.flutter />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            radius={400}
            duration={20}
            delay={20}
            reverse
          >
            <Icons.android />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            radius={480}
            duration={20}
            delay={20}
          >
            <Icons.javascript />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            radius={560}
            duration={20}
            delay={20}
            reverse
          >
            <Icons.aws />
          </OrbitingCircles>
        </div>
        <div className="flex h-[70vh] bg-black rounded-t-[8px] text-white">
          <div className="flex flex-col flex-1 gap-3 my-auto p-10">
            <h2 className="text-4xl font-bold">Real time changes</h2>
            <p>
              See changes as they happen. With our platform, you can track every
              modification in real time. No more confusion about the latest
              version of your project. Say goodbye to the chaos of version
              control and embrace the simplicity of real-time updates.
            </p>
          </div>
          <div className="md:flex hidden items-center justify-center md:flex-1 p-[6rem]">
            <div className="h-[17rem] w-full rounded-[8px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          </div>
        </div>
      </div>
    </>
  );
}
