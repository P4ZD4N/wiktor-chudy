import AnimatedNumber from '../../common/components/AnimatedNumber';

interface StatisticProps {
  number?: number;
  symbol?: string;
  suffix?: string;
  text: string;
}

export default function Statistic(props: StatisticProps) {
  return (
    <div className="group relative w-full flex flex-col items-center text-center p-8 backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl rounded-2xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex items-baseline justify-center mb-3">
        <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent [font-variant-ligatures:none]">
          {props.number !== undefined && (
            <AnimatedNumber value={props.number} duration={1500} />
          )}
          {props.symbol && <span>{props.symbol}</span>}
          {props.suffix && <span>{props.suffix}</span>}
        </span>
      </div>

      <span className="relative z-10 text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
        {props.text}
      </span>
    </div>
  );
}
