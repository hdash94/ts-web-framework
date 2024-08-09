import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

export interface UserProps {
  id?: string;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>("http://localhost:3000/users");
  public attributes: Attributes<UserProps> = new Attributes<UserProps>({});
}
