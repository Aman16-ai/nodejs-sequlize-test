const getPagination = (page, size) => {
  const limit = size !== 0 ? size : 3;
  const offset = page !== 0 ? (page - 1) * limit : 0;
  return { limit, offset };
};

const getPaginationData = (data, page, limit) => {
  const { count: totalItems, rows: Employees } = data;
  const currentPage = page ? page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems: Employees, totalPages, currentPage };
};
