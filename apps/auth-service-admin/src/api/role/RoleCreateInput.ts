import { PermissionWhereUniqueInput } from "../permission/PermissionWhereUniqueInput";

export type RoleCreateInput = {
  description?: string | null;
  name?: string | null;
  permission?: PermissionWhereUniqueInput | null;
};
