import emoji from '../image/emoji/민호.png'
const Minho = () => {
  return (
    <div className='flex mt-8 pl-2'>
      <img className='w-48 rounded-full' src={emoji} />
      <div className='flex flex-col my-auto ml-12'>
        <p className='text-2xl font-bold mb-2'>장민호 (24)</p>
        <p className='font-bold italic'>
          "자기계발에 대한 끊임없는 욕구를 가지고 노력하겠습니다"
        </p>
        <p className='pt-2 pl-0.5 text-gray-700 font-semibold'>
          Backend-Engineer
        </p>
        <div className='flex items-center mt-4'>
          <img
            className='w-4 h-4 mr-1.5 mt-1.5'
            src='https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png'
          />
          <a
            href='https://github.com/MinhoJJang'
            className='mt-2 text-[13px] text-blue-800'
          >
            https://github.com/MinhoJJang
          </a>
        </div>
        <div className='flex items-center'>
          <img
            className='w-4 h-3 mr-1.5 mt-3'
            src='https://static-00.iconduck.com/assets.00/mail-icon-512x419-289bpxr2.png'
          />
          <p className='mt-2 text-[13px] text-gray-800'>
            ahchjang@gachon.ac.kr
          </p>
        </div>
      </div>
    </div>
  )
}

export default Minho
