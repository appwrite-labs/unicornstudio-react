export type ValidFPS = 15 | 24 | 30 | 60 | 120;

export type ScaleRange = number;

// Raw JSON data structure for Unicorn Studio scenes
export interface UnicornSceneData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  history: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: Record<string, any>;
}

// UnicornScene component types
export interface UnicornSceneProps {
  projectId?: string;
  jsonFilePath?: string;
  rawJson?: UnicornSceneData;
  altText?: string;
  width?: number | string;
  height?: number | string;
  scale?: ScaleRange;
  dpi?: number;
  fps?: ValidFPS;
  ariaLabel?: string;
  className?: string;
  lazyLoad?: boolean;
  production?: boolean;
  placeholder?: string | React.ReactNode;
  placeholderClassName?: string;
  showPlaceholderOnError?: boolean;
  showPlaceholderWhileLoading?: boolean;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export interface UnicornStudioScene {
  element: HTMLElement;
  destroy: () => void;
  resize?: () => void;
  paused?: boolean;
  contains?: (element: HTMLElement | null) => boolean;
}

export interface UnicornSceneConfig {
  elementId?: string;
  element?: HTMLElement;
  scale?: ScaleRange;
  dpi?: number;
  fps?: ValidFPS;
  projectId?: string;
  filePath?: string;
  rawJson?: UnicornSceneData;
  lazyLoad?: boolean;
  fixed?: boolean;
  altText?: string;
  ariaLabel?: string;
  production?: boolean;
  width?: number;
  height?: number;
  interactivity?: {
    mouse?: {
      disableMobile?: boolean;
    };
  };
}

export interface UnicornStudioAPI {
  init: (config: {
    scale: ScaleRange;
    dpi: number;
  }) => Promise<UnicornStudioScene[]>;
  addScene: (config: UnicornSceneConfig) => Promise<UnicornStudioScene>;
  destroy: () => void;
}

export interface UnicornStudioConfig {
  scale: ScaleRange;
  dpi: number;
  fps: ValidFPS;
}

// Global type augmentation
declare global {
  interface Window {
    UnicornStudio?: UnicornStudioAPI;
  }
}
