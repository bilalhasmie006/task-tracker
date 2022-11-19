import React from 'react'

const addtask = () => {

    // const [text,setText] = useState('');

    // const [day,setDay] = useState('');

    // const [reminder,setReminder] = useState('');

  return (
  <form action="" className='add-form'>
    <div className='form-control'>
<label htmlFor="">tasks</label>
<input type="text" placeholder='enter name' />
</div>

<div className='form-control'>
<label>day</label>
<input type="text" placeholder='date and time' />
 </div>

 <div className='form-control form-control-check'>
<label>set reminder</label>
<input type="checkbox" />
 </div>

<div>
    <input type="submit" className='btn btn-block' value="submit it"/>
</div>
  </form>
  )
}

export default addtask
