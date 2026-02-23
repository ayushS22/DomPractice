function generateTable() {
      // Get number of rows and columns from below code
      const numRows = parseInt(document.getElementById('rows').value);
      const numCols = parseInt(document.getElementById('cols').value);

      // Get the container div
      const container = document.getElementById('tableContainer');
      container.innerHTML = ""; // Clear previous table

      // Validate input here
      if (isNaN(numRows) || isNaN(numCols) || numRows <= 0 || numCols <= 0) {
        container.innerHTML = "<p style='color:red;'>Please enter valid numbers greater than 0.</p>";
        return;
      }

      // Create table
      const table = document.createElement('table');

      for (let i = 0; i < numRows; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < numCols; j++) {
          const cell = document.createElement('td');//create td element
          cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
          row.appendChild(cell);
        }

        table.appendChild(row);
      }

      // Append the table to the container
      container.appendChild(table);

    }


