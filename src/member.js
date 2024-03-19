import { useState } from 'react'

const Member = ({ onComponentClick }) => {
  const [activeComponent, setActiveComponent] = useState('Jooyeon')

  const handleComponentClick = (componentName) => {
    setActiveComponent(componentName)
    onComponentClick(componentName)
  }

  return (
    <div className='text-sm font-medium border-b text-center text-gray-500 border-gray-200 dark:text-gray-400'>
      <ul className='flex flex-wrap -mb-px'>
        <li className='me-2'>
          <button
            className={`inline-block px-4 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
              activeComponent === 'Jooyeon' ? 'text-black border-gray-600' : ''
            }`}
            onClick={() => handleComponentClick('Jooyeon')}
          >
            이주연
          </button>
        </li>
        <li className='me-2'>
          <button
            className={`inline-block px-4 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
              activeComponent === 'Eunji' ? 'text-black border-gray-600' : ''
            }`}
            onClick={() => handleComponentClick('Eunji')}
          >
            신은지
          </button>
        </li>
        <li className='me-2'>
          <button
            className={`inline-block px-4 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
              activeComponent === 'Minseong' ? 'text-black border-gray-600' : ''
            }`}
            onClick={() => handleComponentClick('Minseong')}
          >
            {' '}
            김민성
          </button>
        </li>
        <li className='me-2'>
          <button
            className={`inline-block px-4 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
              activeComponent === 'Yeongchan'
                ? 'text-black border-gray-600'
                : ''
            }`}
            onClick={() => handleComponentClick('Yeongchan')}
          >
            이영찬
          </button>
        </li>
        <li className='me-2'>
          <button
            className={`inline-block px-4 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
              activeComponent === 'Minho' ? 'text-black border-gray-600' : ''
            }`}
            onClick={() => handleComponentClick('Minho')}
          >
            장민호
          </button>
        </li>
        <li className='me-2'>
          <button
            className={`inline-block px-4 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
              activeComponent === 'Gahyeon' ? 'text-black border-gray-600' : ''
            }`}
            onClick={() => handleComponentClick('Gahyeon')}
          >
            김가현
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Member
