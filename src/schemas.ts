import { z } from "zod";

export const NameAgeCitySchema = z.tuple([
  z.string(),           
  z.coerce.number(),    
  z.string()            
]).transform(arr => ({
  name: arr[0],
  age: arr[1],
  city: arr[2]
}));


