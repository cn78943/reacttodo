import React from 'react'

export default function Form({value, setValue, handleSubmit}) {

    const handleChange = (e) => {
        // console.log('e',e.target.value);
        // this.setState({ value: e.target.value });
    
        // 함수형 컴포넌트 변환
        setValue(e.target.value);
      }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex pt-2'>
                <input className='w-full px-3 py-2 mr-4 tetx-gray-500 border rounded shadow' type="text" name="value" placeholder="type new todo" value={value} onChange={handleChange} />
                <input className='p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200' type="submit" value="입력" />
            </form>
        </div>
    )
}
