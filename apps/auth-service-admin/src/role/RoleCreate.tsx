import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PermissionTitle } from "../permission/PermissionTitle";

export const RoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="permission.id"
          reference="Permission"
          label="Permission"
        >
          <SelectInput optionText={PermissionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
