import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PermissionTitle } from "../permission/PermissionTitle";

export const RoleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
