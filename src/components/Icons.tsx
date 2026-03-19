import { LuLaptop, LuBrain, LuCode, LuDatabase, LuGraduationCap, LuClock, LuRocket, LuMail } from 'react-icons/lu';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter, FaMedium } from 'react-icons/fa6';

export function NavLogo({ className }: { className?: string }) {
  return <LuLaptop className={className} />;
}

export function BrainIcon({ className }: { className?: string }) {
  return <LuBrain className={className} />;
}

export function CodeIcon({ className }: { className?: string }) {
  return <LuCode className={className} />;
}

export function DatabaseIcon({ className }: { className?: string }) {
  return <LuDatabase className={className} />;
}

export function GraduationCapIcon({ className }: { className?: string }) {
  return <LuGraduationCap className={className} />;
}

export function ClockIcon({ className }: { className?: string }) {
  return <LuClock className={className} />;
}

export function RocketIcon({ className }: { className?: string }) {
  return <LuRocket className={className} />;
}

export function GithubIcon({ className }: { className?: string }) {
  return <FaGithub className={className} />;
}

export function LinkedinIcon({ className }: { className?: string }) {
  return <FaLinkedinIn className={className} />;
}

export function XTwitterIcon({ className }: { className?: string }) {
  return <FaXTwitter className={className} />;
}

export function MediumIcon({ className }: { className?: string }) {
  return <FaMedium className={className} />;
}

export function EnvelopeIcon({ className }: { className?: string }) {
  return <LuMail className={className} />;
}
