import React from 'react';
import PersonalInformationUser from './PersonalInformationUser';

const data = {
  personalInfo: { title: 'Cuenta Personal', otherInfo: [['DNI:', 78451235], ['Ponte', 'Ana']] },
  infopersonal : [
    { label: 'Nombre Completo :'},
    { label: 'Fecha de Nacimiento :'},
    { label: 'Tipo de Documento :' },
    { label: 'Número de Documento :'},
    { label: 'Ocupación :'},
    { label: 'Profesión o Cargo :'},
    { label: 'Correo Electrónico :'},
    { label: 'Celular / Fijo :'},
    { label: 'Ubigeo DNI :'},
    { label: 'Fecha de Emisión :'}
  ]
}

const PersonalInformation = () => (
  <div className="personal-information">
    <h3>Perfil</h3>
    <PersonalInformationUser info={data.infopersonal}/>
  </div>
)

export default PersonalInformation;