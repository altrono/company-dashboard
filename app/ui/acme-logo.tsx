import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { jost } from './fonts';


export default function AcmeLogo() {
  return (
    <div
      className={`${jost.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-16 w-16 rotate-[15deg]" />
      <p className="text-[16px] w-full">Softwaregenies</p>
    </div>
  );
}
