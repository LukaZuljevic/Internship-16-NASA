type Routes = {
  [key: string]: string;
};

export const ROUTES: Routes = {
  HOME: "/",
  APOD: "/APOD",
  APOD_ITEM: "/APOD/:date",
};
