import { registerEnumType } from '@nestjs/graphql';

//Enum of document type users
export enum DocumentType {
  CITIZENSHIP_CARD = 'Cedula de ciudadania',
  PASSPORT = 'Pasaporte',
  CIVIL_REGISRTRY = 'Registro civil',
  FOREIGNER_CARD = 'Cedula de extranjeria',
  MILITARY_ID = 'Libreta militar',
  IDENTITY_CARD = 'Tarjeta de identidad',
}

registerEnumType(DocumentType, {
  name: 'DocumentType',
  description:
    'Document type allowed in the system [Cedula de ciudadania, Pasaporte, Registro civil, Cedula de extranjeria, Libreta militar, Tarjeta de identidad]',
});
