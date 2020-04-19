const Broker = require('../models/Broker')
const Yup = require('yup');


class BrokerController {

    async store(request, response) {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string()
          .email()
          .required(),
        password: Yup.string()
          .min(6)
          .required(),
        creci: Yup.string(),
        phone: Yup.string()
      });

      const schemaValid = await schema.isValid(request.body);

      if (!schemaValid) {
        return response.status(401).json({ error: 'Validation Fails!' });
      }

      const { name, email, password, creci, phone } = request.body;

      const broker = await Broker.findOne({ where: { email } });


      if (broker) {
        return response.status(400).json({ error: 'Broker already exist!' });
      }

      const { id } = await Broker.create({
        name,
        email,
        password,
        creci,
        phone
      });

      return response.status(201).json({ id, name, email, phone, creci });
    }

    async index(request, response) {
      const brokers = await Broker.findAll({
        attributes: ['id', 'name', 'email', 'creci', 'phone' ]
      });


      return response.status(200).json(brokers)

    }

}

module.exports = new BrokerController()
