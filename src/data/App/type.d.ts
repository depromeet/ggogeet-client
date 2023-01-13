export interface DefaultMetaTagProps {
  title: string;
  description: string;
  image: {
    src: string;
    width?: string;
    height?: string;
  };
  url: string;
  favicon: string;
  appleIconTouch?: string;
  type: "website" | undefined;
  locale: "ko_KR" | undefined;
  siteName: string;
}
