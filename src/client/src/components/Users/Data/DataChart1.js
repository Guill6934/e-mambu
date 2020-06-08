function createData(time, amount) {
  return { time, amount };
}

const datachart1 = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', 1500),
];

const datachart2 = [
  createData('00:00', 0),
  createData('01:00', 20),
  createData('02:00', 20),
  createData('03:00', 0),
  createData('04:00', -20),
  createData('05:00', -20),
  createData('06:00', 0),
  createData('07:00', 20),
  createData('08:00', 20),
];

const datachart3 = [
  createData('00:00', 10),
  createData('01:00', 20),
  createData('02:00', 0),
  createData('03:00', 10),
  createData('04:00', 20),
  createData('05:00', -20),
  createData('06:00', 0),
  createData('07:00', 17),
  createData('08:00', -19),
];

export default datachart1;
export {datachart2, datachart3};