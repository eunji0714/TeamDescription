import '../src/index.css'
import Jooyeon from './profile/jooyeon'
import logo from './image/logo.png'
import Member from './member'
import { useState } from 'react'
import Eunji from './profile/eunji'
import Minseong from './profile/minseong'
import Yeongchan from './profile/yeongchan'
import Minho from './profile/minho'
import Gahyeon from './profile/gahyeon'

function App() {
  const [visibleComponent, setVisibleComponent] = useState('Jooyeon')

  const handleComponentVisibility = (componentName) => {
    setVisibleComponent(componentName)
  }

  return (
    <div className='mx-auto mt-7 container mb-16 w-[700px] '>
      <div className='flex'>
        <img src={logo} />
      </div>
      <div>
        <p className='text-xl font-bold ml-4 mb-7'>About us</p>
        <div className='pl-10 py-9 bg-[#FFF7D5] rounded-[20px]'>
          <p className='font-semibold text-xl mb-5'>
            마지막까지 완벽하게 !
            <br />: 끝까지 해내는 우리의 다짐
          </p>
          <p className='text-sm font-semibold text-gray-600'>
            안녕하세요. 카카오엔터프라이즈 SW 아카데미 4기 sem;colon 팀입니다.
            <br />
            코드의 마지막에 세미콜론을 찍듯이, 시작한 일을 끝까지 완성합니다.
          </p>
        </div>
      </div>
      <p className='text-xl font-bold ml-4 mt-16 mb-7'>Team Member</p>
      <div className='pl-10 pt-3 pb-9 bg-[#FFEA93] rounded-[20px]'>
        <Member onComponentClick={handleComponentVisibility} />
        {visibleComponent === 'Jooyeon' && <Jooyeon />}
        {visibleComponent === 'Eunji' && <Eunji />}
        {visibleComponent === 'Minseong' && <Minseong />}
        {visibleComponent === 'Yeongchan' && <Yeongchan />}
        {visibleComponent === 'Minho' && <Minho />}
        {visibleComponent === 'Gahyeon' && <Gahyeon />}
      </div>
    </div>
  )
}

export default App
