export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'twitter' | 'tiktok';
  url: string;
}

export interface ActionButton {
  label: string;
  action: () => void;
}
