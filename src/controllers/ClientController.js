const Client = require('../models/Client')
const Yup = require('yup');


class ClientController {

    async store(request, response) {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email(),
        description: Yup.string(),
        phone: Yup.string(),
        birthday: Yup.date(),
        cpf: Yup.string().required()
      });

      const schemaValid = await schema.isValid(request.body);

      if (!schemaValid) {
        return response.status(401).json({ error: 'Validation Fails!' });
      }

      const { name, email, description, birthday, phone, cpf} = request.body;

      const client = await Client.findOne({ where: { cpf } });


      if (client) {
        return response.status(400).json({ error: 'Client already exist!' });
      }

      const { id } = await Client.create({
        name,
        email,
        description,
        birthday,
        phone,
        cpf
      });

      return response.status(201).json({ id, name, email, phone, birthday, cpf, description });
    }



}

module.exports = new ClientController()
