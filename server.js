const express = require("express");

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'Apple', lastName: 'Appy' },
    { id: 2, firstName: 'Orange', lastName: 'Ore' },
    { id: 3, firstName: 'Mango', lastName: 'Mangos' }
  ];

  res.json(customers);
})

const port = 5000;

app.listen(port, () => console.log(`Server started on Port ${port}`));