export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`bg-blue-900/10 backdrop-blur-md border border-white/20 rounded-xl transition-all duration-300 hover:bg-blue-900/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.3)] ${className}`}
    >
      {children}
    </div>
  );
}
