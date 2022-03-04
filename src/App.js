import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries.jsx'
import AddEntryForm from './Components/AddEntry/AddEntryForm.jsx';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker.jsx';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 176, date: '11-24-2021'}])

  function addNewEntry(entry){

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntry={addNewEntry} />
      <EntriesChartTracker parentEntries={entries} />
    </div>
  );
}

export default App;
