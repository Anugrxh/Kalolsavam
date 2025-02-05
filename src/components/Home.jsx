import logo from '../assets/logo.png';

function Home() {
  return (
    <div className="bg-[#F6E7D8] h-screen flex flex-col items-center">
      <img src={logo} className='w-[10vh] mt-[-3vh] ' alt="Logo" />

      <h1 className="text-4xl font-bold text-[#874356] mt-[-3vh]">സകവാഴ്‌വ്</h1>
      <div className="w-full max-w-md ">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-[#874356] ml-5 mr-5 mt-4 text-white p-4 mb-4 rounded-lg">
            <h2 className="text-xl">TEAM A</h2>
            <p>Total Score: <span className="font-semibold">0</span></p>
            <p>Position: <span className="font-semibold">0</span></p>
          </div>
        ))}
      </div>
      <div className="flex justify-around w-full mt-auto mb-4 bg-[#874356] pb-2">
        <div className="p-2 rounded-full mt-4">
          <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.4125 14.7283L29.1081 9.42385V3.29636C29.1081 2.18842 28.2103 1.29053 27.1007 1.29053C25.9937 1.29053 25.0959 2.18842 25.0959 3.29636V5.4117L21.1463 1.46199C19.1936 -0.489649 15.7985 -0.486187 13.8502 1.46553L0.58721 14.7283C-0.195737 15.5128 -0.195737 16.7822 0.58721 17.5654C1.37051 18.3497 2.64236 18.3497 3.42537 17.5654L16.6871 4.30235C17.1192 3.87258 17.8806 3.87258 18.3104 4.30107L31.5744 17.5654C31.9677 17.9576 32.4805 18.1527 32.9931 18.1527C33.5068 18.1527 34.0205 17.9574 34.4126 17.5654C35.1958 16.7822 35.1958 15.5128 34.4125 14.7283Z" fill="white" stroke="white" />
            <path d="M18.1967 8.10991C17.8114 7.7248 17.1875 7.7248 16.8033 8.10991L5.13712 19.7726C4.95293 19.9568 4.84851 20.2081 4.84851 20.4705V28.9768C4.84851 30.9729 6.46697 32.5913 8.46298 32.5913H14.2389V23.6463H20.7599V32.5913H26.5359C28.5318 32.5913 30.1503 30.9729 30.1503 28.9769V20.4705C30.1503 20.2081 30.0468 19.9568 29.8617 19.7726L18.1967 8.10991Z" fill="white" stroke="white" />
          </svg>
        </div>

        <div className="p-2 rounded-full mt-4">
          <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 15.5648C1 23.5998 7.53563 30.1296 15.5618 30.1296C19.2596 30.1296 22.6421 28.7391 25.2148 26.4598L34.4951 35.742C34.6671 35.914 34.8892 36 35.1186 36C35.3479 36 35.57 35.914 35.742 35.742C36.086 35.3979 36.086 34.846 35.742 34.5019L26.4545 25.2197C28.7334 22.6465 30.1237 19.2705 30.1237 15.5648C30.1237 7.5298 23.588 1 15.5618 1C7.53563 1 1 7.5298 1 15.5648ZM28.3679 15.5648C28.3679 22.625 22.6206 28.3735 15.5618 28.3735C8.50307 28.3735 2.75573 22.625 2.75573 15.5648C2.75573 8.50461 8.50307 2.75609 15.5618 2.75609C22.6206 2.75609 28.3679 8.49744 28.3679 15.5648Z" fill="white" strokeWidth="0.4095" />
          </svg>
        </div>
        <div className="p-2 rounded-full mt-4">
          <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.75 4.5H27.25V2.75C27.25 2.28587 27.0656 1.84075 26.7374 1.51256C26.4093 1.18437 25.9641 1 25.5 1C25.0359 1 24.5908 1.18437 24.2626 1.51256C23.9344 1.84075 23.75 2.28587 23.75 2.75V4.5H13.25V2.75C13.25 2.28587 13.0656 1.84075 12.7374 1.51256C12.4092 1.18437 11.9641 1 11.5 1C11.0359 1 10.5908 1.18437 10.2626 1.51256C9.93437 1.84075 9.75 2.28587 9.75 2.75V4.5H6.25C4.85761 4.5 3.52226 5.05312 2.53769 6.03769C1.55312 7.02226 1 8.35761 1 9.75V30.75C1 32.1424 1.55312 33.4777 2.53769 34.4623C3.52226 35.4469 4.85761 36 6.25 36H30.75C32.1424 36 33.4777 35.4469 34.4623 34.4623C35.4469 33.4777 36 32.1424 36 30.75V9.75C36 8.35761 35.4469 7.02226 34.4623 6.03769C33.4777 5.05312 32.1424 4.5 30.75 4.5ZM32.5 30.75C32.5 31.2141 32.3156 31.6593 31.9874 31.9874C31.6593 32.3156 31.2141 32.5 30.75 32.5H6.25C5.78587 32.5 5.34075 32.3156 5.01256 31.9874C4.68437 31.6593 4.5 31.2141 4.5 30.75V18.5H32.5V30.75ZM32.5 15H4.5V9.75C4.5 9.28587 4.68437 8.84075 5.01256 8.51256C5.34075 8.18437 5.78587 8 6.25 8H9.75V9.75C9.75 10.2141 9.93437 10.6592 10.2626 10.9874C10.5908 11.3156 11.0359 11.5 11.5 11.5C11.9641 11.5 12.4092 11.3156 12.7374 10.9874C13.0656 10.6592 13.25 10.2141 13.25 9.75V8H23.75V9.75C23.75 10.2141 23.9344 10.6592 24.2626 10.9874C24.5908 11.3156 25.0359 11.5 25.5 11.5C25.9641 11.5 26.4093 11.3156 26.7374 10.9874C27.0656 10.6592 27.25 10.2141 27.25 9.75V8H30.75C31.2141 8 31.6593 8.18437 31.9874 8.51256C32.3156 8.84075 32.5 9.28587 32.5 9.75V15Z" fill="white" strokeWidth="0.4095" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;
