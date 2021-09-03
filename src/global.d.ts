declare module '*.scss' {
  const content: {
    primaryColor: string;
    backgroundColor: string;
    separatorColor: string;
    linkHoverColor: string;
    sideBorderColor: string;
    padding: string;
    white: string;
    namePadding: string;
    nameMargin: string;
    blockNameSize: string;
    bigFontSize: string;
    normalFontSize: string;
    smallFontSize: string;
    [className: string]: string;
  };
  export = content;
}
