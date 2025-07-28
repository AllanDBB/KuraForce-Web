import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  color: string; // Tailwind color base, ej: 'green', 'yellow', 'blue', etc.
  initial: string;
  socials: { type: 'linkedin' | 'github' | 'twitter'; url: string }[];
  delay?: number;
}

const socialIcons: Record<string, JSX.Element> = {
  linkedin: (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
  ),
  github: (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
  ),
  twitter: (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636a9.936 9.936 0 0 0 2.457-2.548z"/></svg>
  ),
};

export default function TeamMember({ name, role, bio, color, initial, socials, delay = 0 }: TeamMemberProps) {
  return (
    <div
      className="relative flex flex-col md:flex-row w-[340px] md:w-[520px] bg-white rounded-2xl shadow-lg border border-gray-100 p-4 md:p-6 gap-4 md:gap-8 items-center transition-all duration-300 mx-auto"
      style={{
        animation: `fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms both`,
      }}
    >
      {/* Avatar o foto */}
      <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center">
        {/* <img src={`/team/${name.toLowerCase()}.jpg`} alt={name} className="w-full h-full object-cover" /> */}
        <span className={`text-4xl font-black text-${color}-700`} style={{fontFamily:'var(--font-racing, sans-serif)'}}>{initial}</span>
      </div>
      {/* Info principal */}
      <div className="flex-1 flex flex-col gap-2 min-w-0">
        <div className="flex flex-col md:flex-row md:items-center md:gap-4 justify-between">
          <h3 className="font-black text-xl md:text-2xl text-gray-900 truncate" style={{fontFamily:'var(--font-racing, sans-serif)'}}>{name}</h3>
        </div>
        {/* Detalles en caja */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 mt-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-sm">
          <div className="flex flex-col gap-1">
            <div><span className="font-semibold text-gray-700">Role</span> <span className="ml-2 text-gray-500">{role}</span></div>
            <div><span className="font-semibold text-gray-700">Departament</span> <span className="ml-2 text-purple-500 font-medium">Design</span></div>
          </div>
          <div className="flex flex-col gap-1 md:text-right">
            <div><span className="font-semibold text-gray-700">Joined</span> <span className="ml-2 text-gray-500">30th Jan, 2022</span></div>
          </div>
        </div>
        {/* Social icons */}
        <div className="flex gap-2 mt-2">
          {socials.map(s => (
            <a key={s.type} href={s.url} target="_blank" rel="noopener noreferrer" className={`rounded-full p-2 bg-gray-100 hover:bg-${color}-50 transition-colors border border-transparent hover:border-${color}-200 text-gray-400 hover:text-${color}-700`} aria-label={s.type}>
              {socialIcons[s.type]}
            </a>
          ))}
        </div>
        {/* Pie de card */}
        <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
          <span>15 Projects finished</span>
          <span>Last seen 2m ago</span>
        </div>
      </div>
    </div>
  );
}

// Animación fadeInUp
// Agrega esto a tu CSS global o tailwind.config si usas tailwindcss
// @keyframes fadeInUp {
//   from { opacity: 0; transform: translateY(40px); }
//   to { opacity: 1; transform: translateY(0); }
// } 