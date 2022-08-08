import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['RRR', 'Bahubali','Thor','Avengers','Ratatouille','Jai Bhim','Iron man 2'];

export default function Details() {
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  return (
    <div>
      <div id='title'>BooK MY SHoW</div>
     
      <div id='item'>
      <div id='mname'>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie name" />}
      />
        </div>

        <div id='date'>
        <input type="date" id='datee'/>
        </div>

      <div id='time'>  
      <Autocomplete
      id="disabled-options-demo"
      options={timeSlots}
      getOptionDisabled={(option) =>
        option === timeSlots[0] || option === timeSlots[2]
      }
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie time" />}
    />
    </div>
    </div>
<div id='count'>
  <input type='number' id='counts' placeholder='Add Seats'/>
</div>
<div id='fle'>
<div id='flex'>
<div id='flex1'>
  <div>A</div>
  </div>
<div id='flex2'>
  <div><i class="bi bi-1-square"></i></div>
  <div><i class="bi bi-2-square"></i></div>
  <div><i class="bi bi-3-square"></i></div>
  <div><i class="bi bi-4-square"></i></div>
  </div>
<div id='flex3'>
  <div><i class="bi bi-5-square"></i></div>
  <div><i class="bi bi-6-square"></i></div>
  <div><i class="bi bi-7-square"></i></div>
  <div><i class="bi bi-8-square"></i></div>
  <div><i class="bi bi-9-square"></i></div>
  </div>

</div>

<div id='flex'>
<div id='flex1'>
  <div>B</div>
  </div>
<div id='flex2'>
  <div><i class="bi bi-1-square"></i></div>
  <div><i class="bi bi-2-square"></i></div>
  <div><i class="bi bi-3-square"></i></div>
  <div><i class="bi bi-4-square"></i></div>
  </div>
<div id='flex3'>
  <div><i class="bi bi-5-square"></i></div>
  <div><i class="bi bi-6-square"></i></div>
  <div><i class="bi bi-7-square"></i></div>
  <div><i class="bi bi-8-square"></i></div>
  <div><i class="bi bi-9-square"></i></div>
  </div>

</div>

<div id='flex'>
<div id='flex1'>
  <div>C</div>
  </div>
<div id='flex2'>
  <div><i class="bi bi-1-square"></i></div>
  <div><i class="bi bi-2-square"></i></div>
  <div><i class="bi bi-3-square"></i></div>
  <div><i class="bi bi-4-square"></i></div>
  </div>
<div id='flex3'>
  <div><i class="bi bi-5-square"></i></div>
  <div><i class="bi bi-6-square"></i></div>
  <div><i class="bi bi-7-square"></i></div>
  <div><i class="bi bi-8-square"></i></div>
  <div><i class="bi bi-9-square"></i></div>
  </div>

</div>

<div id='flex'>
<div id='flex1'>
  <div>D</div>
  </div>
<div id='flex2'>
  <div><i class="bi bi-1-square"></i></div>
  <div><i class="bi bi-2-square"></i></div>
  <div><i class="bi bi-3-square"></i></div>
  <div><i class="bi bi-4-square"></i></div>
  </div>
<div id='flex3'>
  <div><i class="bi bi-5-square"></i></div>
  <div><i class="bi bi-6-square"></i></div>
  <div><i class="bi bi-7-square"></i></div>
  <div><i class="bi bi-8-square"></i></div>
  <div><i class="bi bi-9-square"></i></div>
  </div>

</div>

<div id='flex'>
<div id='flex1'>
  <div>E</div>
  </div>
<div id='flex2'>
  <div><i class="bi bi-1-square"></i></div>
  <div><i class="bi bi-2-square"></i></div>
  <div><i class="bi bi-3-square"></i></div>
  <div><i class="bi bi-4-square"></i></div>
  </div>
<div id='flex3'>
  <div><i class="bi bi-5-square"></i></div>
  <div><i class="bi bi-6-square"></i></div>
  <div><i class="bi bi-7-square"></i></div>
  <div><i class="bi bi-8-square"></i></div>
  <div><i class="bi bi-9-square"></i></div>
  </div>

</div>

<div id='flex'>
<div id='flex1'>
  <div>F</div>
  </div>
<div id='flex2'>
  <div><i class="bi bi-1-square"></i></div>
  <div><i class="bi bi-2-square"></i></div>
  <div><i class="bi bi-3-square"></i></div>
  <div><i class="bi bi-4-square"></i></div>
  </div>
<div id='flex3'>
  <div><i class="bi bi-5-square"></i></div>
  <div><i class="bi bi-6-square"></i></div>
  <div><i class="bi bi-7-square"></i></div>
  <div><i class="bi bi-8-square"></i></div>
  <div><i class="bi bi-9-square"></i></div>
  </div>

</div>

<div id='flex'>
<div id='flex1'>
  <div>G</div>
  </div>
<div id='flex2'>
  <div><i class="bi bi-1-square"></i></div>
  <div><i class="bi bi-2-square"></i></div>
  <div><i class="bi bi-3-square"></i></div>
  <div><i class="bi bi-4-square"></i></div>
  </div>
<div id='flex3'>
  <div><i class="bi bi-5-square"></i></div>
  <div><i class="bi bi-6-square"></i></div>
  <div><i class="bi bi-7-square"></i></div>
  <div><i class="bi bi-8-square"></i></div>
  <div><i class="bi bi-9-square"></i></div>
  </div>

</div>

<div id='flex'>
<div id='flex1'>
  <div>H</div>
  </div>
<div id='flex2'>
  <div><i class="bi bi-1-square"></i></div>
  <div><i class="bi bi-2-square"></i></div>
  <div><i class="bi bi-3-square"></i></div>
  <div><i class="bi bi-4-square"></i></div>
  </div>
<div id='flex3'>
  <div><i class="bi bi-5-square"></i></div>
  <div><i class="bi bi-6-square"></i></div>
  <div><i class="bi bi-7-square"></i></div>
  <div><i class="bi bi-8-square"></i></div>
  <div><i class="bi bi-9-square"></i></div>
  </div>

</div>

<div id='flex'>
<div id='flex1'>
  <div>I</div>
  </div>
<div id='flex2'>
  <div><i class="bi bi-1-square"></i></div>
  <div><i class="bi bi-2-square"></i></div>
  <div><i class="bi bi-3-square"></i></div>
  <div><i class="bi bi-4-square"></i></div>
  </div>
<div id='flex3'>
  <div><i class="bi bi-5-square"></i></div>
  <div><i class="bi bi-6-square"></i></div>
  <div><i class="bi bi-7-square"></i></div>
  <div><i class="bi bi-8-square"></i></div>
  <div><i class="bi bi-9-square"></i></div>
  </div>

</div>

<div id='flex'>
<div id='flex1'>
  <div>J</div>
  </div>
<div id='flex2'>
  <div><i class="bi bi-1-square"></i></div>
  <div><i class="bi bi-2-square"></i></div>
  <div><i class="bi bi-3-square"></i></div>
  <div><i class="bi bi-4-square"></i></div>
  </div>
<div id='flex3'>
  <div><i class="bi bi-5-square"></i></div>
  <div><i class="bi bi-6-square"></i></div>
  <div><i class="bi bi-7-square"></i></div>
  <div><i class="bi bi-8-square"></i></div>
  <div><i class="bi bi-9-square"></i></div>
  </div>

</div>
</div>

    </div>
  )
}

const timeSlots = Array.from(new Array(12 * 2)).map(
  (_, index) =>
    `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${
      index % 2 === 0 ? '00' : '30'
    }`,
);