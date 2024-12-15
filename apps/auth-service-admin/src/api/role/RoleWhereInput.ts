import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PermissionWhereUniqueInput } from "../permission/PermissionWhereUniqueInput";

export type RoleWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  permission?: PermissionWhereUniqueInput;
};
