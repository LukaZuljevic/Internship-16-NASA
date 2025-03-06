type Routes = {
  [key: string]: string;
};

export const ROUTES: Routes = {
  HOME: "/",
  APOD: "/APOD",
  APOD_ITEM: "/APOD/:date",
  MARS_ROVER_PHOTOS: "/mars-rover",
  MARS_ROVER_PHOTO_DETAILS: "/mars-rover/:id",
  NEO: "/NEO",
  EARTH: "/Earth-imagery",
};
