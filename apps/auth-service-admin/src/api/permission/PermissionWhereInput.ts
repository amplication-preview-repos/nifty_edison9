import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoleListRelationFilter } from "../role/RoleListRelationFilter";

export type PermissionWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  roles?: RoleListRelationFilter;
};
