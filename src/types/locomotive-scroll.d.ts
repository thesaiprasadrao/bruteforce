declare module "locomotive-scroll" {
  export interface LocomotiveScrollOptions {
    el: HTMLElement;
    smooth?: boolean;
    multiplier?: number;
    smartphone?: { smooth?: boolean };
    tablet?: { smooth?: boolean };
    lerp?: number;
    getDirection?: boolean;
    getSpeed?: boolean;
    reloadOnContextChange?: boolean;
    easing?: string;
  }

  export interface LocomotiveScrollInstance {
    update(): void;
    destroy(): void;
    start(): void;
    stop(): void;
    scrollTo(
      target: number | string | HTMLElement,
      options?: { offset?: number; duration?: number; easing?: string }
    ): void;
  }

  const LocomotiveScroll: {
    new (options: LocomotiveScrollOptions): LocomotiveScrollInstance;
  };
  export default LocomotiveScroll;
}
