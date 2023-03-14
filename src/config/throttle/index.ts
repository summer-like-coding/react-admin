// 节流 定时器 + 时间戳
// export let throttle = (func: any, delay: number = 500) => {
//   let startTime = Date.now();
//   return (...args: any[]) => {
//     let curTime = Date.now();
//     let interval = delay - (curTime - startTime);
//     if (interval <= 0) {
//       startTime = Date.now();
//       return func(...args);
//     }
//   };
// };


export function throttle(fun:any,delay:number) {
  let timmer:ReturnType<typeof setTimeout> | null= null
  return function () {
    // let context = this
    let args = arguments
    if (timmer) return
    timmer = setTimeout(function () {
      // fun.call(context,args)
      fun()
    },delay)
  }
}