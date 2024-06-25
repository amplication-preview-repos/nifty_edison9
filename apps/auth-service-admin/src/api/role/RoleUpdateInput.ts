import { PermissionWhereUniqueInput } from "../permission/PermissionWhereUniqueInput";

export type RoleUpdateInput = {
  description?: string | null;
  name?: string | null;
  permission?: PermissionWhereUniqueInput | null;
};
