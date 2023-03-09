export type ScreenType = {
  id: string;
  name: string;
  type: string;
  value: string;
  onTyping: (key: string) => void;
};
