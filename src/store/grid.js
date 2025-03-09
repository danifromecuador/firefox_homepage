export const setRows = (set, rows) => {
  if (rows <= 1) rows = 1
  if (rows >= 6) rows = 6

  return set(() => ({
    rows: rows,
  }))
}

export const setColumns = (set, columns) => {
  if (columns <= 1) columns = 1
  if (columns >= 10) columns = 10

  return set(() => ({
    columns: columns,
  }))
}
