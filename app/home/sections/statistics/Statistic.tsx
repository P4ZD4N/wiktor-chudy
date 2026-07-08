import AnimatedNumber from '../../common/components/AnimatedNumber';

interface StatisticProps {
  number?: number;
  symbol?: string;
  suffix?: string;
  text: string;
}

export default function Statistic(props: StatisticProps) {
  return (
    <div className="w-full sm:w-64 flex-shrink-0 flex flex-col p-6 backdrop-blur-sm bg-white/5 border border-white/20 shadow-sm rounded-xl">
      <span className="text-xl md:text-2xl font-bold text-gray-300">
        {props.number !== undefined && (
          <AnimatedNumber value={props.number} duration={1500} />
        )}
        {props.symbol && <span>{props.symbol}</span>}
        {props.suffix && <span>{props.suffix}</span>}
      </span>
      <span className="text-base md:text-lg text-gray-300">{props.text}</span>
    </div>
  );
}
