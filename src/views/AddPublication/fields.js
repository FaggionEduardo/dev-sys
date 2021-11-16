export const fields = {
  title: {
    label: "Título",
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
  description: {
    label: "Descrição",
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
