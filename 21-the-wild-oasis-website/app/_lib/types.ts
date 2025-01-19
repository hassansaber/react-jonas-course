export type CabinType = {
  id?: number;
  created_at?: Date;
  name?: string;
  maxCapacity?: number;
  regularPrice?: number;
  discount?: number;
  description?: string;
  image?: string;
};

export type GuestType = {
  id?: number;
  created_at?: Date;
  fullName?: string;
  email?: string;
  nationalID?: string;
  nationality?: string;
  countryFlag?: string;
};

export type BookingType = {
  id?: number;
  created_at?: Date;
  startDate?: Date;
  endDate?: Date;
  numNights?: number;
  numGuests?: number;
  cabinPrice?: number;
  extrasPrice?: number;
  totalPrice?: number;
  status?: string;
  hasBreakfast?: boolean;
  isPaid?: boolean;
  observations?: string;
  cabinId?: number;
  guestId?: number;
};

export type SettingsType = {
  id?: number;
  created_at?: Date;
  minBookingLength?: number;
  maxBookingLength?: number;
  maxGuestsPerBooking?: number;
  breakfastPrice?: number;
};

export type CountryType = {
  name?: string;
  flag?: string;
};
