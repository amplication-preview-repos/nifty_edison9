import { SortOrder } from "../../util/SortOrder";

export type RoleOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  permissionId?: SortOrder;
  updatedAt?: SortOrder;
};
