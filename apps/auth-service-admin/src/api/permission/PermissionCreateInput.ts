import { RoleCreateNestedManyWithoutPermissionsInput } from "./RoleCreateNestedManyWithoutPermissionsInput";

export type PermissionCreateInput = {
  description?: string | null;
  name?: string | null;
  roles?: RoleCreateNestedManyWithoutPermissionsInput;
};
