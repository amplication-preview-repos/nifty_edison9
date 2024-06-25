import { RoleUpdateManyWithoutPermissionsInput } from "./RoleUpdateManyWithoutPermissionsInput";

export type PermissionUpdateInput = {
  description?: string | null;
  name?: string | null;
  roles?: RoleUpdateManyWithoutPermissionsInput;
};
