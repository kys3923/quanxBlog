import axios from 'axios'
import { useState } from 'react'
import { MdRemoveCircle } from 'react-icons/md'

const DashboardRegister = (props) => {

  const [ submitForm, setSubmitForm ] = useState({
    title: '',
    description: '',
    dueDate: '',
  })
  const [ tagInput, setTagInput ] = useState('')
  const [ tags, setTags ] = useState([])

  const changeHander = (e) => {
    setSubmitForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const tagInputChangeHandler = (e) => {
    setTagInput(e.target.value)
  }

  const AddTagHandler = (e) => {
    e.preventDefault()

    let duplicatedTag = tags.find(tag => tag.tag === tagInput) 

    if(duplicatedTag) {
      return
    } else {
      let newObj = {
        tag: tagInput
      }
  
      setTags((prev) => ([
        ...prev,
        newObj
      ]))
  
      setTagInput('')
    }
  }

  const deleteTagHandler = (e, enteredTag) => {
    let newTags = tags
    let newArry = newTags.filter(findingTags => findingTags.tag !== enteredTag)
    setTags(newArry)
  } 

  const { title, description, dueDate } = submitForm

  const registerHanlder = (e) => {
    e.preventDefault()

    // validate
    if( title === '') {
      return 
    }

    let submitData = {
      title: title,
      dueDate: dueDate,
      tags: tags,
      description: description
    }

    const requestToAPI = async () => {
      try {
        const request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos/register`, submitData)
        if(request.data.success) {
          console.log(request.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    requestToAPI()
  }

  const inputTextStyles = 'w-full max-w-lg rounded-md text-sm py-1 px-4'
  const titleStyles = 'text-xs text-slate-700'
  const bosStyles1 = 'flex flex-col gap-1'

  return (
    <div className='flex flex-row justify-center items-center w-full h-[100vh] bg-blue-100'>
      <div className='w-full max-w-lg flex flex-col items-center shadow-lg p-12 gap-8 bg-slate-400/30 rounded-md'>
        <div>
          <p className='text-2xl font-bold text-blue-500'>Register Todos</p>
        </div>
        <div className='flex flex-col gap-4 w-full px-12'>
          <div className={bosStyles1}>
            <p className={titleStyles}>Todo Title*</p>
            <input type='text' value={title} name='title' onChange={changeHander} className={inputTextStyles} />
          </div>
          <div className={bosStyles1}>
            <p className={titleStyles}>Todo Due</p>
            <input type='date' value={dueDate} name='dueDate' onChange={changeHander} className={inputTextStyles} />
          </div>
          <div className={bosStyles1}>
            <p className={titleStyles}>Tag</p>
            <form className='w-full flex flex-row' onSubmit={AddTagHandler}>
              <input type='text' value={tagInput} onChange={tagInputChangeHandler} className='w-full rounded-l-md text-sm py-1 px-4' />
              <button type='submit' className='truncate text-xs w-24 bg-blue-500 rounded-r-md text-white hover:bg-blue-300'>Add Tag</button>
            </form>
            <div className='flex flex-row gap-1'>
              {tags.length > 0 && tags.map((tag, i) => {
                return <div
                  key={i + 100}
                  className='px-2 py-1 text-xs bg-white rounded-full flex flex-row gap-1'
                >
                  <p>{tag.tag}</p>
                  <MdRemoveCircle className='w-4 h-4 text-blue-500 hover:cursor-pointer hover:text-blue-300' onClick={(e) => deleteTagHandler(e, tag.tag)}/>
                </div>
              })}
            </div>
          </div>
          <div className={bosStyles1}>
            <p className={titleStyles}>Todo Description</p>
            <textarea rows={3} value={description} name='description' onChange={changeHander} className={inputTextStyles} />
          </div>
          <div className='flex justify-center'>
            <button className='bg-blue-500 w-full text-white py-2 rounded-md hover:bg-blue-300' onClick={registerHanlder}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardRegister;