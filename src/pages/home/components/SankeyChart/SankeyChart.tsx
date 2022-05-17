import Sankey from "components/core/Sankey";
import React, { useEffect, useState } from "react";

const SankeyChart = () => {
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ozlongblack/d3/master/energy.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div className="App">
      <div>
        <button type="button" onClick={() => setEditMode(!editMode)}>
          Edit Mode
        </button>
      </div>
      <Sankey data={data} edit={editMode} />
    </div>
  );
};

export default React.memo(SankeyChart);
