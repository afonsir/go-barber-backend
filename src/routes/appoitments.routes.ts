import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { startOfHour, parseISO, isEqual } from 'date-fns';

const appoitmentsRouter = Router();

const appointments = [];

appoitmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const appointment = {
    id: uuid(),
    provider,
    date: parsedDate
  };

  appointments.push(appointment);

  return response.json(appointment);
});

export default appoitmentsRouter;
