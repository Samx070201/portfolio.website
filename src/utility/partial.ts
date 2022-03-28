export default function partial<TFunc extends (...args: any) => any>(func: TFunc, ...args: unknown[]) {
  return function(this: unknown, ...args2: any[]): ReturnType<TFunc> {
    const allArguments = args.concat(args2);
    
    return func.apply(this, allArguments);
  };
}