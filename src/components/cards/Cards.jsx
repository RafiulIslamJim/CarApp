const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12 px-4 md:px-12">
    <div className="w-full md:w-[260px] h-[326px] max-w-sm mx-auto p-4 bg-white border rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-lg">Nissan-V</h2>
          <h2 className="text-gray-500">SUV</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512" fill="red">
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
      </div>
  
      {/* Image Section */}
      <img src="src/assets/file2.png" alt="Car Image" className="w-full h-32 object-cover rounded-lg mb-4" />
  
      {/* Features Section */}
      <div className="flex space-x-4 text-gray-500 text-sm mb-4">
        {/* Feature 1: Fuel Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64v192h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V208c-27.6-7.1-48-32.2-48-62V96l-48-48c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3v181.4c0 39.8-32.2 72-72 72s-72-32.2-72-72v-32c0-22.1-17.9-40-40-40h-8V64c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v96h128V80c0-8.8-7.2-16-16-16H112z"/>
          </svg>
          <span>80L</span>
        </div>
  
        {/* Feature 2: Transmission */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M367.2 412.5C335.9 434.9 297.5 448 256 448s-79.9-13.1-111.2-35.5l58-58c15.8 8.6 34 13.5 53.3 13.5s37.4-4.9 53.3-13.5l58 58zm90.7 .8c33.8-43.4 54-98 54-157.3s-20.2-113.9-54-157.3c9-12.5 7.9-30.1-3.4-41.3S425.8 45 413.3 54C369.9 20.2 315.3 0 256 0S142.1 20.2 98.7 54c-12.5-9-30.1-7.9-41.3 3.4S45 86.2 54 98.7C20.2 142.1 0 196.7 0 256s20.2 113.9 54 157.3c-9 12.5-7.9 30.1 3.4 41.3S86.2 467 98.7 458c43.4 33.8 98 54 157.3 54s113.9-20.2 157.3-54c12.5 9 30.1 7.9 41.3-3.4s12.4-28.8 3.4-41.3zm-45.5-46.1l-58-58c8.6-15.8 13.5-34 13.5-53.3s-4.9-37.4-13.5-53.3l58-58C434.9 176.1 448 214.5 448 256s-13.1 79.9-35.5 111.2zM367.2 99.5l-58 58c-15.8-8.6-34-13.5-53.3-13.5s-37.4 4.9-53.3 13.5l-58-58C176.1 77.1 214.5 64 256 64s79.9 13.1 111.2 35.5zM157.5 309.3l-58 58C77.1 335.9 64 297.5 64 256s13.1-79.9 35.5-111.2l58 58c-8.6 15.8-13.5 34-13.5 53.3s4.9 37.4 13.5 53.3zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>
          </svg>
          <span>Manual</span>
        </div>
  
        {/* Feature 3: Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 640 512">
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.5c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7z"/>
          </svg>
          <span>2 People</span>
        </div>
      </div>
  
      {/* Footer Section */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          $80.00<span className="text-sm font-normal text-gray-500">/day</span>
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">Rent Now</button>
      </div>
    </div>
    <div className="w-full md:w-[260px] h-[326px] max-w-sm mx-auto p-4 bg-white border rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-lg">Nissan-V</h2>
          <h2 className="text-gray-500">SUV</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512" fill="red">
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
      </div>
  
      {/* Image Section */}
      <img src="src/assets/file2.png" alt="Car Image" className="w-full h-32 object-cover rounded-lg mb-4" />
  
      {/* Features Section */}
      <div className="flex space-x-4 text-gray-500 text-sm mb-4">
        {/* Feature 1: Fuel Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64v192h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V208c-27.6-7.1-48-32.2-48-62V96l-48-48c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3v181.4c0 39.8-32.2 72-72 72s-72-32.2-72-72v-32c0-22.1-17.9-40-40-40h-8V64c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v96h128V80c0-8.8-7.2-16-16-16H112z"/>
          </svg>
          <span>80L</span>
        </div>
  
        {/* Feature 2: Transmission */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M367.2 412.5C335.9 434.9 297.5 448 256 448s-79.9-13.1-111.2-35.5l58-58c15.8 8.6 34 13.5 53.3 13.5s37.4-4.9 53.3-13.5l58 58zm90.7 .8c33.8-43.4 54-98 54-157.3s-20.2-113.9-54-157.3c9-12.5 7.9-30.1-3.4-41.3S425.8 45 413.3 54C369.9 20.2 315.3 0 256 0S142.1 20.2 98.7 54c-12.5-9-30.1-7.9-41.3 3.4S45 86.2 54 98.7C20.2 142.1 0 196.7 0 256s20.2 113.9 54 157.3c-9 12.5-7.9 30.1 3.4 41.3S86.2 467 98.7 458c43.4 33.8 98 54 157.3 54s113.9-20.2 157.3-54c12.5 9 30.1 7.9 41.3-3.4s12.4-28.8 3.4-41.3zm-45.5-46.1l-58-58c8.6-15.8 13.5-34 13.5-53.3s-4.9-37.4-13.5-53.3l58-58C434.9 176.1 448 214.5 448 256s-13.1 79.9-35.5 111.2zM367.2 99.5l-58 58c-15.8-8.6-34-13.5-53.3-13.5s-37.4 4.9-53.3 13.5l-58-58C176.1 77.1 214.5 64 256 64s79.9 13.1 111.2 35.5zM157.5 309.3l-58 58C77.1 335.9 64 297.5 64 256s13.1-79.9 35.5-111.2l58 58c-8.6 15.8-13.5 34-13.5 53.3s4.9 37.4 13.5 53.3zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>
          </svg>
          <span>Manual</span>
        </div>
  
        {/* Feature 3: Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 640 512">
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.5c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7z"/>
          </svg>
          <span>2 People</span>
        </div>
      </div>
  
      {/* Footer Section */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          $80.00<span className="text-sm font-normal text-gray-500">/day</span>
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">Rent Now</button>
      </div>
    </div>
    <div className="w-full md:w-[260px] h-[326px] max-w-sm mx-auto p-4 bg-white border rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-lg">Nissan-V</h2>
          <h2 className="text-gray-500">SUV</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512" fill="red">
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
      </div>
  
      {/* Image Section */}
      <img src="src/assets/file2.png" alt="Car Image" className="w-full h-32 object-cover rounded-lg mb-4" />
  
      {/* Features Section */}
      <div className="flex space-x-4 text-gray-500 text-sm mb-4">
        {/* Feature 1: Fuel Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64v192h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V208c-27.6-7.1-48-32.2-48-62V96l-48-48c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3v181.4c0 39.8-32.2 72-72 72s-72-32.2-72-72v-32c0-22.1-17.9-40-40-40h-8V64c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v96h128V80c0-8.8-7.2-16-16-16H112z"/>
          </svg>
          <span>80L</span>
        </div>
  
        {/* Feature 2: Transmission */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M367.2 412.5C335.9 434.9 297.5 448 256 448s-79.9-13.1-111.2-35.5l58-58c15.8 8.6 34 13.5 53.3 13.5s37.4-4.9 53.3-13.5l58 58zm90.7 .8c33.8-43.4 54-98 54-157.3s-20.2-113.9-54-157.3c9-12.5 7.9-30.1-3.4-41.3S425.8 45 413.3 54C369.9 20.2 315.3 0 256 0S142.1 20.2 98.7 54c-12.5-9-30.1-7.9-41.3 3.4S45 86.2 54 98.7C20.2 142.1 0 196.7 0 256s20.2 113.9 54 157.3c-9 12.5-7.9 30.1 3.4 41.3S86.2 467 98.7 458c43.4 33.8 98 54 157.3 54s113.9-20.2 157.3-54c12.5 9 30.1 7.9 41.3-3.4s12.4-28.8 3.4-41.3zm-45.5-46.1l-58-58c8.6-15.8 13.5-34 13.5-53.3s-4.9-37.4-13.5-53.3l58-58C434.9 176.1 448 214.5 448 256s-13.1 79.9-35.5 111.2zM367.2 99.5l-58 58c-15.8-8.6-34-13.5-53.3-13.5s-37.4 4.9-53.3 13.5l-58-58C176.1 77.1 214.5 64 256 64s79.9 13.1 111.2 35.5zM157.5 309.3l-58 58C77.1 335.9 64 297.5 64 256s13.1-79.9 35.5-111.2l58 58c-8.6 15.8-13.5 34-13.5 53.3s4.9 37.4 13.5 53.3zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>
          </svg>
          <span>Manual</span>
        </div>
  
        {/* Feature 3: Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 640 512">
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.5c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7z"/>
          </svg>
          <span>2 People</span>
        </div>
      </div>
  
      {/* Footer Section */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          $80.00<span className="text-sm font-normal text-gray-500">/day</span>
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">Rent Now</button>
      </div>
    </div>
    <div className="w-full md:w-[260px] h-[326px] max-w-sm mx-auto p-4 bg-white border rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-lg">Nissan-V</h2>
          <h2 className="text-gray-500">SUV</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512" fill="red">
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
      </div>
  
      {/* Image Section */}
      <img src="src/assets/file2.png" alt="Car Image" className="w-full h-32 object-cover rounded-lg mb-4" />
  
      {/* Features Section */}
      <div className="flex space-x-4 text-gray-500 text-sm mb-4">
        {/* Feature 1: Fuel Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64v192h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V208c-27.6-7.1-48-32.2-48-62V96l-48-48c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3v181.4c0 39.8-32.2 72-72 72s-72-32.2-72-72v-32c0-22.1-17.9-40-40-40h-8V64c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v96h128V80c0-8.8-7.2-16-16-16H112z"/>
          </svg>
          <span>80L</span>
        </div>
  
        {/* Feature 2: Transmission */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M367.2 412.5C335.9 434.9 297.5 448 256 448s-79.9-13.1-111.2-35.5l58-58c15.8 8.6 34 13.5 53.3 13.5s37.4-4.9 53.3-13.5l58 58zm90.7 .8c33.8-43.4 54-98 54-157.3s-20.2-113.9-54-157.3c9-12.5 7.9-30.1-3.4-41.3S425.8 45 413.3 54C369.9 20.2 315.3 0 256 0S142.1 20.2 98.7 54c-12.5-9-30.1-7.9-41.3 3.4S45 86.2 54 98.7C20.2 142.1 0 196.7 0 256s20.2 113.9 54 157.3c-9 12.5-7.9 30.1 3.4 41.3S86.2 467 98.7 458c43.4 33.8 98 54 157.3 54s113.9-20.2 157.3-54c12.5 9 30.1 7.9 41.3-3.4s12.4-28.8 3.4-41.3zm-45.5-46.1l-58-58c8.6-15.8 13.5-34 13.5-53.3s-4.9-37.4-13.5-53.3l58-58C434.9 176.1 448 214.5 448 256s-13.1 79.9-35.5 111.2zM367.2 99.5l-58 58c-15.8-8.6-34-13.5-53.3-13.5s-37.4 4.9-53.3 13.5l-58-58C176.1 77.1 214.5 64 256 64s79.9 13.1 111.2 35.5zM157.5 309.3l-58 58C77.1 335.9 64 297.5 64 256s13.1-79.9 35.5-111.2l58 58c-8.6 15.8-13.5 34-13.5 53.3s4.9 37.4 13.5 53.3zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>
          </svg>
          <span>Manual</span>
        </div>
  
        {/* Feature 3: Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 640 512">
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.5c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7z"/>
          </svg>
          <span>2 People</span>
        </div>
      </div>
  
      {/* Footer Section */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          $80.00<span className="text-sm font-normal text-gray-500">/day</span>
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">Rent Now</button>
      </div>
    </div>
    <div className="w-full md:w-[260px] h-[326px] max-w-sm mx-auto p-4 bg-white border rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-lg">Nissan-V</h2>
          <h2 className="text-gray-500">SUV</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512" fill="red">
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
      </div>
  
      {/* Image Section */}
      <img src="src/assets/file2.png" alt="Car Image" className="w-full h-32 object-cover rounded-lg mb-4" />
  
      {/* Features Section */}
      <div className="flex space-x-4 text-gray-500 text-sm mb-4">
        {/* Feature 1: Fuel Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64v192h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V208c-27.6-7.1-48-32.2-48-62V96l-48-48c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3v181.4c0 39.8-32.2 72-72 72s-72-32.2-72-72v-32c0-22.1-17.9-40-40-40h-8V64c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v96h128V80c0-8.8-7.2-16-16-16H112z"/>
          </svg>
          <span>80L</span>
        </div>
  
        {/* Feature 2: Transmission */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M367.2 412.5C335.9 434.9 297.5 448 256 448s-79.9-13.1-111.2-35.5l58-58c15.8 8.6 34 13.5 53.3 13.5s37.4-4.9 53.3-13.5l58 58zm90.7 .8c33.8-43.4 54-98 54-157.3s-20.2-113.9-54-157.3c9-12.5 7.9-30.1-3.4-41.3S425.8 45 413.3 54C369.9 20.2 315.3 0 256 0S142.1 20.2 98.7 54c-12.5-9-30.1-7.9-41.3 3.4S45 86.2 54 98.7C20.2 142.1 0 196.7 0 256s20.2 113.9 54 157.3c-9 12.5-7.9 30.1 3.4 41.3S86.2 467 98.7 458c43.4 33.8 98 54 157.3 54s113.9-20.2 157.3-54c12.5 9 30.1 7.9 41.3-3.4s12.4-28.8 3.4-41.3zm-45.5-46.1l-58-58c8.6-15.8 13.5-34 13.5-53.3s-4.9-37.4-13.5-53.3l58-58C434.9 176.1 448 214.5 448 256s-13.1 79.9-35.5 111.2zM367.2 99.5l-58 58c-15.8-8.6-34-13.5-53.3-13.5s-37.4 4.9-53.3 13.5l-58-58C176.1 77.1 214.5 64 256 64s79.9 13.1 111.2 35.5zM157.5 309.3l-58 58C77.1 335.9 64 297.5 64 256s13.1-79.9 35.5-111.2l58 58c-8.6 15.8-13.5 34-13.5 53.3s4.9 37.4 13.5 53.3zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>
          </svg>
          <span>Manual</span>
        </div>
  
        {/* Feature 3: Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 640 512">
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.5c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7z"/>
          </svg>
          <span>2 People</span>
        </div>
      </div>
  
      {/* Footer Section */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          $80.00<span className="text-sm font-normal text-gray-500">/day</span>
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">Rent Now</button>
      </div>
    </div>
    <div className="w-full md:w-[260px] h-[326px] max-w-sm mx-auto p-4 bg-white border rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-lg">Nissan-V</h2>
          <h2 className="text-gray-500">SUV</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512" fill="red">
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
      </div>
  
      {/* Image Section */}
      <img src="src/assets/file2.png" alt="Car Image" className="w-full h-32 object-cover rounded-lg mb-4" />
  
      {/* Features Section */}
      <div className="flex space-x-4 text-gray-500 text-sm mb-4">
        {/* Feature 1: Fuel Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64v192h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V208c-27.6-7.1-48-32.2-48-62V96l-48-48c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3v181.4c0 39.8-32.2 72-72 72s-72-32.2-72-72v-32c0-22.1-17.9-40-40-40h-8V64c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v96h128V80c0-8.8-7.2-16-16-16H112z"/>
          </svg>
          <span>80L</span>
        </div>
  
        {/* Feature 2: Transmission */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M367.2 412.5C335.9 434.9 297.5 448 256 448s-79.9-13.1-111.2-35.5l58-58c15.8 8.6 34 13.5 53.3 13.5s37.4-4.9 53.3-13.5l58 58zm90.7 .8c33.8-43.4 54-98 54-157.3s-20.2-113.9-54-157.3c9-12.5 7.9-30.1-3.4-41.3S425.8 45 413.3 54C369.9 20.2 315.3 0 256 0S142.1 20.2 98.7 54c-12.5-9-30.1-7.9-41.3 3.4S45 86.2 54 98.7C20.2 142.1 0 196.7 0 256s20.2 113.9 54 157.3c-9 12.5-7.9 30.1 3.4 41.3S86.2 467 98.7 458c43.4 33.8 98 54 157.3 54s113.9-20.2 157.3-54c12.5 9 30.1 7.9 41.3-3.4s12.4-28.8 3.4-41.3zm-45.5-46.1l-58-58c8.6-15.8 13.5-34 13.5-53.3s-4.9-37.4-13.5-53.3l58-58C434.9 176.1 448 214.5 448 256s-13.1 79.9-35.5 111.2zM367.2 99.5l-58 58c-15.8-8.6-34-13.5-53.3-13.5s-37.4 4.9-53.3 13.5l-58-58C176.1 77.1 214.5 64 256 64s79.9 13.1 111.2 35.5zM157.5 309.3l-58 58C77.1 335.9 64 297.5 64 256s13.1-79.9 35.5-111.2l58 58c-8.6 15.8-13.5 34-13.5 53.3s4.9 37.4 13.5 53.3zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>
          </svg>
          <span>Manual</span>
        </div>
  
        {/* Feature 3: Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 640 512">
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.5c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7z"/>
          </svg>
          <span>2 People</span>
        </div>
      </div>
  
      {/* Footer Section */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          $80.00<span className="text-sm font-normal text-gray-500">/day</span>
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">Rent Now</button>
      </div>
    </div>
    <div className="w-full md:w-[260px] h-[326px] max-w-sm mx-auto p-4 bg-white border rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-lg">Nissan-V</h2>
          <h2 className="text-gray-500">SUV</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512" fill="red">
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
      </div>
  
      {/* Image Section */}
      <img src="src/assets/file2.png" alt="Car Image" className="w-full h-32 object-cover rounded-lg mb-4" />
  
      {/* Features Section */}
      <div className="flex space-x-4 text-gray-500 text-sm mb-4">
        {/* Feature 1: Fuel Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64v192h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V208c-27.6-7.1-48-32.2-48-62V96l-48-48c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3v181.4c0 39.8-32.2 72-72 72s-72-32.2-72-72v-32c0-22.1-17.9-40-40-40h-8V64c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v96h128V80c0-8.8-7.2-16-16-16H112z"/>
          </svg>
          <span>80L</span>
        </div>
  
        {/* Feature 2: Transmission */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M367.2 412.5C335.9 434.9 297.5 448 256 448s-79.9-13.1-111.2-35.5l58-58c15.8 8.6 34 13.5 53.3 13.5s37.4-4.9 53.3-13.5l58 58zm90.7 .8c33.8-43.4 54-98 54-157.3s-20.2-113.9-54-157.3c9-12.5 7.9-30.1-3.4-41.3S425.8 45 413.3 54C369.9 20.2 315.3 0 256 0S142.1 20.2 98.7 54c-12.5-9-30.1-7.9-41.3 3.4S45 86.2 54 98.7C20.2 142.1 0 196.7 0 256s20.2 113.9 54 157.3c-9 12.5-7.9 30.1 3.4 41.3S86.2 467 98.7 458c43.4 33.8 98 54 157.3 54s113.9-20.2 157.3-54c12.5 9 30.1 7.9 41.3-3.4s12.4-28.8 3.4-41.3zm-45.5-46.1l-58-58c8.6-15.8 13.5-34 13.5-53.3s-4.9-37.4-13.5-53.3l58-58C434.9 176.1 448 214.5 448 256s-13.1 79.9-35.5 111.2zM367.2 99.5l-58 58c-15.8-8.6-34-13.5-53.3-13.5s-37.4 4.9-53.3 13.5l-58-58C176.1 77.1 214.5 64 256 64s79.9 13.1 111.2 35.5zM157.5 309.3l-58 58C77.1 335.9 64 297.5 64 256s13.1-79.9 35.5-111.2l58 58c-8.6 15.8-13.5 34-13.5 53.3s4.9 37.4 13.5 53.3zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>
          </svg>
          <span>Manual</span>
        </div>
  
        {/* Feature 3: Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 640 512">
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.5c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7z"/>
          </svg>
          <span>2 People</span>
        </div>
      </div>
  
      {/* Footer Section */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          $80.00<span className="text-sm font-normal text-gray-500">/day</span>
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">Rent Now</button>
      </div>
    </div>
    <div className="w-full md:w-[260px] h-[326px] max-w-sm mx-auto p-4 bg-white border rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-lg">Nissan-V</h2>
          <h2 className="text-gray-500">SUV</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512" fill="red">
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
      </div>
  
      {/* Image Section */}
      <img src="src/assets/file2.png" alt="Car Image" className="w-full h-32 object-cover rounded-lg mb-4" />
  
      {/* Features Section */}
      <div className="flex space-x-4 text-gray-500 text-sm mb-4">
        {/* Feature 1: Fuel Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64v192h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V208c-27.6-7.1-48-32.2-48-62V96l-48-48c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3v181.4c0 39.8-32.2 72-72 72s-72-32.2-72-72v-32c0-22.1-17.9-40-40-40h-8V64c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v96h128V80c0-8.8-7.2-16-16-16H112z"/>
          </svg>
          <span>80L</span>
        </div>
  
        {/* Feature 2: Transmission */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M367.2 412.5C335.9 434.9 297.5 448 256 448s-79.9-13.1-111.2-35.5l58-58c15.8 8.6 34 13.5 53.3 13.5s37.4-4.9 53.3-13.5l58 58zm90.7 .8c33.8-43.4 54-98 54-157.3s-20.2-113.9-54-157.3c9-12.5 7.9-30.1-3.4-41.3S425.8 45 413.3 54C369.9 20.2 315.3 0 256 0S142.1 20.2 98.7 54c-12.5-9-30.1-7.9-41.3 3.4S45 86.2 54 98.7C20.2 142.1 0 196.7 0 256s20.2 113.9 54 157.3c-9 12.5-7.9 30.1 3.4 41.3S86.2 467 98.7 458c43.4 33.8 98 54 157.3 54s113.9-20.2 157.3-54c12.5 9 30.1 7.9 41.3-3.4s12.4-28.8 3.4-41.3zm-45.5-46.1l-58-58c8.6-15.8 13.5-34 13.5-53.3s-4.9-37.4-13.5-53.3l58-58C434.9 176.1 448 214.5 448 256s-13.1 79.9-35.5 111.2zM367.2 99.5l-58 58c-15.8-8.6-34-13.5-53.3-13.5s-37.4 4.9-53.3 13.5l-58-58C176.1 77.1 214.5 64 256 64s79.9 13.1 111.2 35.5zM157.5 309.3l-58 58C77.1 335.9 64 297.5 64 256s13.1-79.9 35.5-111.2l58 58c-8.6 15.8-13.5 34-13.5 53.3s4.9 37.4 13.5 53.3zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>
          </svg>
          <span>Manual</span>
        </div>
  
        {/* Feature 3: Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 640 512">
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.5c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7z"/>
          </svg>
          <span>2 People</span>
        </div>
      </div>
  
      {/* Footer Section */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          $80.00<span className="text-sm font-normal text-gray-500">/day</span>
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">Rent Now</button>
      </div>
    </div>
    <div className="w-full md:w-[260px] h-[326px] max-w-sm mx-auto p-4 bg-white border rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-lg">Nissan-V</h2>
          <h2 className="text-gray-500">SUV</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512" fill="red">
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
      </div>
  
      {/* Image Section */}
      <img src="src/assets/file2.png" alt="Car Image" className="w-full h-32 object-cover rounded-lg mb-4" />
  
      {/* Features Section */}
      <div className="flex space-x-4 text-gray-500 text-sm mb-4">
        {/* Feature 1: Fuel Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64v192h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V208c-27.6-7.1-48-32.2-48-62V96l-48-48c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3v181.4c0 39.8-32.2 72-72 72s-72-32.2-72-72v-32c0-22.1-17.9-40-40-40h-8V64c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v96h128V80c0-8.8-7.2-16-16-16H112z"/>
          </svg>
          <span>80L</span>
        </div>
  
        {/* Feature 2: Transmission */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M367.2 412.5C335.9 434.9 297.5 448 256 448s-79.9-13.1-111.2-35.5l58-58c15.8 8.6 34 13.5 53.3 13.5s37.4-4.9 53.3-13.5l58 58zm90.7 .8c33.8-43.4 54-98 54-157.3s-20.2-113.9-54-157.3c9-12.5 7.9-30.1-3.4-41.3S425.8 45 413.3 54C369.9 20.2 315.3 0 256 0S142.1 20.2 98.7 54c-12.5-9-30.1-7.9-41.3 3.4S45 86.2 54 98.7C20.2 142.1 0 196.7 0 256s20.2 113.9 54 157.3c-9 12.5-7.9 30.1 3.4 41.3S86.2 467 98.7 458c43.4 33.8 98 54 157.3 54s113.9-20.2 157.3-54c12.5 9 30.1 7.9 41.3-3.4s12.4-28.8 3.4-41.3zm-45.5-46.1l-58-58c8.6-15.8 13.5-34 13.5-53.3s-4.9-37.4-13.5-53.3l58-58C434.9 176.1 448 214.5 448 256s-13.1 79.9-35.5 111.2zM367.2 99.5l-58 58c-15.8-8.6-34-13.5-53.3-13.5s-37.4 4.9-53.3 13.5l-58-58C176.1 77.1 214.5 64 256 64s79.9 13.1 111.2 35.5zM157.5 309.3l-58 58C77.1 335.9 64 297.5 64 256s13.1-79.9 35.5-111.2l58 58c-8.6 15.8-13.5 34-13.5 53.3s4.9 37.4 13.5 53.3zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>
          </svg>
          <span>Manual</span>
        </div>
  
        {/* Feature 3: Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 640 512">
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.5c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7z"/>
          </svg>
          <span>2 People</span>
        </div>
      </div>
  
      {/* Footer Section */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          $80.00<span className="text-sm font-normal text-gray-500">/day</span>
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">Rent Now</button>
      </div>
    </div>
    <div className="w-full md:w-[260px] h-[326px] max-w-sm mx-auto p-4 bg-white border rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-lg">Nissan-V</h2>
          <h2 className="text-gray-500">SUV</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512" fill="red">
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
      </div>
  
      {/* Image Section */}
      <img src="src/assets/file2.png" alt="Car Image" className="w-full h-32 object-cover rounded-lg mb-4" />
  
      {/* Features Section */}
      <div className="flex space-x-4 text-gray-500 text-sm mb-4">
        {/* Feature 1: Fuel Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64v192h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V208c-27.6-7.1-48-32.2-48-62V96l-48-48c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3v181.4c0 39.8-32.2 72-72 72s-72-32.2-72-72v-32c0-22.1-17.9-40-40-40h-8V64c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v96h128V80c0-8.8-7.2-16-16-16H112z"/>
          </svg>
          <span>80L</span>
        </div>
  
        {/* Feature 2: Transmission */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M367.2 412.5C335.9 434.9 297.5 448 256 448s-79.9-13.1-111.2-35.5l58-58c15.8 8.6 34 13.5 53.3 13.5s37.4-4.9 53.3-13.5l58 58zm90.7 .8c33.8-43.4 54-98 54-157.3s-20.2-113.9-54-157.3c9-12.5 7.9-30.1-3.4-41.3S425.8 45 413.3 54C369.9 20.2 315.3 0 256 0S142.1 20.2 98.7 54c-12.5-9-30.1-7.9-41.3 3.4S45 86.2 54 98.7C20.2 142.1 0 196.7 0 256s20.2 113.9 54 157.3c-9 12.5-7.9 30.1 3.4 41.3S86.2 467 98.7 458c43.4 33.8 98 54 157.3 54s113.9-20.2 157.3-54c12.5 9 30.1 7.9 41.3-3.4s12.4-28.8 3.4-41.3zm-45.5-46.1l-58-58c8.6-15.8 13.5-34 13.5-53.3s-4.9-37.4-13.5-53.3l58-58C434.9 176.1 448 214.5 448 256s-13.1 79.9-35.5 111.2zM367.2 99.5l-58 58c-15.8-8.6-34-13.5-53.3-13.5s-37.4 4.9-53.3 13.5l-58-58C176.1 77.1 214.5 64 256 64s79.9 13.1 111.2 35.5zM157.5 309.3l-58 58C77.1 335.9 64 297.5 64 256s13.1-79.9 35.5-111.2l58 58c-8.6 15.8-13.5 34-13.5 53.3s4.9 37.4 13.5 53.3zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>
          </svg>
          <span>Manual</span>
        </div>
  
        {/* Feature 3: Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 640 512">
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.5c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7z"/>
          </svg>
          <span>2 People</span>
        </div>
      </div>
  
      {/* Footer Section */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          $80.00<span className="text-sm font-normal text-gray-500">/day</span>
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">Rent Now</button>
      </div>
    </div>
    <div className="w-full md:w-[260px] h-[326px] max-w-sm mx-auto p-4 bg-white border rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-lg">Nissan-V</h2>
          <h2 className="text-gray-500">SUV</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512" fill="red">
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
      </div>
  
      {/* Image Section */}
      <img src="src/assets/file2.png" alt="Car Image" className="w-full h-32 object-cover rounded-lg mb-4" />
  
      {/* Features Section */}
      <div className="flex space-x-4 text-gray-500 text-sm mb-4">
        {/* Feature 1: Fuel Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64v192h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V208c-27.6-7.1-48-32.2-48-62V96l-48-48c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3v181.4c0 39.8-32.2 72-72 72s-72-32.2-72-72v-32c0-22.1-17.9-40-40-40h-8V64c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v96h128V80c0-8.8-7.2-16-16-16H112z"/>
          </svg>
          <span>80L</span>
        </div>
  
        {/* Feature 2: Transmission */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M367.2 412.5C335.9 434.9 297.5 448 256 448s-79.9-13.1-111.2-35.5l58-58c15.8 8.6 34 13.5 53.3 13.5s37.4-4.9 53.3-13.5l58 58zm90.7 .8c33.8-43.4 54-98 54-157.3s-20.2-113.9-54-157.3c9-12.5 7.9-30.1-3.4-41.3S425.8 45 413.3 54C369.9 20.2 315.3 0 256 0S142.1 20.2 98.7 54c-12.5-9-30.1-7.9-41.3 3.4S45 86.2 54 98.7C20.2 142.1 0 196.7 0 256s20.2 113.9 54 157.3c-9 12.5-7.9 30.1 3.4 41.3S86.2 467 98.7 458c43.4 33.8 98 54 157.3 54s113.9-20.2 157.3-54c12.5 9 30.1 7.9 41.3-3.4s12.4-28.8 3.4-41.3zm-45.5-46.1l-58-58c8.6-15.8 13.5-34 13.5-53.3s-4.9-37.4-13.5-53.3l58-58C434.9 176.1 448 214.5 448 256s-13.1 79.9-35.5 111.2zM367.2 99.5l-58 58c-15.8-8.6-34-13.5-53.3-13.5s-37.4 4.9-53.3 13.5l-58-58C176.1 77.1 214.5 64 256 64s79.9 13.1 111.2 35.5zM157.5 309.3l-58 58C77.1 335.9 64 297.5 64 256s13.1-79.9 35.5-111.2l58 58c-8.6 15.8-13.5 34-13.5 53.3s4.9 37.4 13.5 53.3zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>
          </svg>
          <span>Manual</span>
        </div>
  
        {/* Feature 3: Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 640 512">
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.5c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7z"/>
          </svg>
          <span>2 People</span>
        </div>
      </div>
  
      {/* Footer Section */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          $80.00<span className="text-sm font-normal text-gray-500">/day</span>
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">Rent Now</button>
      </div>
    </div>
    <div className="w-full md:w-[260px] h-[326px] max-w-sm mx-auto p-4 bg-white border rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-lg">Nissan-V</h2>
          <h2 className="text-gray-500">SUV</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512" fill="red">
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
      </div>
  
      {/* Image Section */}
      <img src="src/assets/file2.png" alt="Car Image" className="w-full h-32 object-cover rounded-lg mb-4" />
  
      {/* Features Section */}
      <div className="flex space-x-4 text-gray-500 text-sm mb-4">
        {/* Feature 1: Fuel Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64v192h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V208c-27.6-7.1-48-32.2-48-62V96l-48-48c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3v181.4c0 39.8-32.2 72-72 72s-72-32.2-72-72v-32c0-22.1-17.9-40-40-40h-8V64c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v96h128V80c0-8.8-7.2-16-16-16H112z"/>
          </svg>
          <span>80L</span>
        </div>
  
        {/* Feature 2: Transmission */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 512 512">
            <path d="M367.2 412.5C335.9 434.9 297.5 448 256 448s-79.9-13.1-111.2-35.5l58-58c15.8 8.6 34 13.5 53.3 13.5s37.4-4.9 53.3-13.5l58 58zm90.7 .8c33.8-43.4 54-98 54-157.3s-20.2-113.9-54-157.3c9-12.5 7.9-30.1-3.4-41.3S425.8 45 413.3 54C369.9 20.2 315.3 0 256 0S142.1 20.2 98.7 54c-12.5-9-30.1-7.9-41.3 3.4S45 86.2 54 98.7C20.2 142.1 0 196.7 0 256s20.2 113.9 54 157.3c-9 12.5-7.9 30.1 3.4 41.3S86.2 467 98.7 458c43.4 33.8 98 54 157.3 54s113.9-20.2 157.3-54c12.5 9 30.1 7.9 41.3-3.4s12.4-28.8 3.4-41.3zm-45.5-46.1l-58-58c8.6-15.8 13.5-34 13.5-53.3s-4.9-37.4-13.5-53.3l58-58C434.9 176.1 448 214.5 448 256s-13.1 79.9-35.5 111.2zM367.2 99.5l-58 58c-15.8-8.6-34-13.5-53.3-13.5s-37.4 4.9-53.3 13.5l-58-58C176.1 77.1 214.5 64 256 64s79.9 13.1 111.2 35.5zM157.5 309.3l-58 58C77.1 335.9 64 297.5 64 256s13.1-79.9 35.5-111.2l58 58c-8.6 15.8-13.5 34-13.5 53.3s4.9 37.4 13.5 53.3zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>
          </svg>
          <span>Manual</span>
        </div>
  
        {/* Feature 3: Capacity */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="gray" viewBox="0 0 640 512">
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.5c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7z"/>
          </svg>
          <span>2 People</span>
        </div>
      </div>
  
      {/* Footer Section */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          $80.00<span className="text-sm font-normal text-gray-500">/day</span>
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">Rent Now</button>
      </div>
    </div>

    <div className="col-span-full flex justify-center mt-6 mb-16">
    <button className="px-4 py-3 text-white text-xl bg-blue-500 rounded-lg">Show more car</button>
    </div>
  </div>
  
  
  )
}

export default Cards
