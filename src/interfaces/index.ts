
export interface IRoutes{
    path:string;
    component:JSX.Element;
    restricted:boolean;
}

export interface IRouteProps{
    component : JSX.Element;
}

export interface ITheme{
    color: {
        first: string;
        second: string;
        third: string;
        fourth: string;
        fifth: string;
        sixth: string;
        seventh: string;
        // eighth: string;
        // ninth: string;
        // tenth: string;
      };
      font: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      fontWeight : {
        primary:string,
        secondary:string,
      }
      breakpoints: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
}

export interface ValueObject{
    id:number, 
    title: string,
    decreption:string
    username: string;
  message: string;
}

export interface IAnnimeProps{
    left?: boolean;
    top?: boolean;
}
export interface ListItemProps {
  isActive?: boolean;
}
