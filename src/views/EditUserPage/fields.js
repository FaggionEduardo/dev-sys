export const fields = {
  firstName: {
    label: "Nome",
    type: "text",
    value: "",
    rules: {
      required: "Este campo é obrigatório",
      minLength: {
        value: 3,
        message: "Mínimo de 3 caracteres",
      },
    },
  },
  lastName: {
    label: "Sobrenome",
    type: "text",
    value: "",
    rules: {
      required: "Este campo é obrigatório",
      minLength: {
        value: 3,
        message: "Mínimo de 3 caracteres",
      },
    },
  },
  username: {
    label: "Usuário",
    type: "text",
    value: "",
    rules: {
      required: "Este campo é obrigatório",
      minLength: {
        value: 3,
        message: "Mínimo de 3 caracteres",
      },
    },
  },
};

export default fields;
