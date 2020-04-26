import requester from "../requester";
export default {
  get(cep) {
    return requester
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(({ data }) => {
        const { bairro, cep, localidade, logradouro, uf } = data;
        return {
          postalCode: cep.replace(/-/g, ""),
          city: localidade,
          province: uf, //estado
          neighborhood: bairro,
          street: logradouro,
        };
      });
  },
};
