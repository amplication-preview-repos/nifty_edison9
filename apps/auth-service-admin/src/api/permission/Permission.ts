import { Role } from "../role/Role";

export type Permission = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  roles?: Array<Role>;
  updatedAt: Date;
};
