import React from 'react'

function AddContact() {
    return (
        <div className='ui main'>
            <h2> Add Contact</h2>
            <form className=' ui form'>
                <div className='field'>
                    <label>Name</label>
                    <input type='text' name='name' placeholder='name'>
                    </input>
                    <label>Email</label>
                    <input type='text' name='email' placeholder='enter eamil address'>
                    </input>
                </div>
                <button className='ui button blue'>Add</button>
            </form>
        </div>
    )
}

export default AddContact