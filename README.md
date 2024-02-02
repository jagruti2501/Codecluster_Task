# React Data Visualization App

This is a straightforward React application that uses Plotly.js to illustrate a data visualisation capability. The programme has a bar chart visualisation and a data table with checkboxes. By selecting or unchecking rows in the data table, users can interact with it. The selected rows cause the bar chart to update dynamically.

## Features

- Data table with pagination and a search bar for filtering.
- Checkbox in each row of the data table for row selection.
- Bar chart visualization using Plotly.js.
- Real-time updates to the bar chart as checkboxes are checked or unchecked.
- Lazy loading of data to fetch only the displayed data in the table.

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.

### Dependencies
npm install axios
npm install react-plotly.js

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-data-visualization.git
   cd react-data-visualization

2. open the Project file.
3. Install Dependencies.

   


###Rendering Issues 
In my case React server is running on port 5000 and the JSON fetching API is on port 8000, you may also encounter CORS (Cross-Origin Resource Sharing) issues.

To resolve this,
1. json-server --watch db.json --port 8000

2. Also, you can either configure your API server to allow requests from your React development server or set up a proxy for your React app.
   
