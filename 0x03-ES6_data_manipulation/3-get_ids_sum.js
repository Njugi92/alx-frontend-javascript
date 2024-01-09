const getStudentIdsSum = (students) => students.reduce((myVal, car) => myVal + car.id, 0);

export default getStudentIdsSum;
