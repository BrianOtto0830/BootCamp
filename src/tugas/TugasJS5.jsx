import React, { useState } from 'react';
//Soal nomer 1 buat useState buat nampung count lalu buat tombol untuk menambah nilai dari count dan tombol untuk mengurangi nilai dari count
//value dari count tidak boleh kurang dari 0
const Counter = () => {
  const [count, setCount] = useState(0); //tampung variabel count dengan useState

  const handleIncrement = () => setCount(count + 1); //buat fungsi untuk menambahkan nilai count
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1); //buat fungsi untuk mengurangi nilai count jika nilai count lebih dari 0
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">{count}</h1>
      <div className="flex gap-4">
        <button onClick={handleIncrement} className="bg-green-500 text-white px-4 py-2 rounded">
          Tambah
        </button>
        <button onClick={handleDecrement} className="bg-red-500 text-white px-4 py-2 rounded">
          Kurang
        </button>
        
      </div>
    </div>
  );
};

//buat sebuah input untuk password untuk mengecek seberapa baik password yang dimasukkan
const PasswordChecker = () => {
    const [password,setPassword]= useState(""); //simpan variable password kedalam useState
    const handlePasswordChange = (e) => {
        setPassword(e.target.value); //buat fungsi untuk menamngkap perubahan nilai pada variabel e
    };
    
    const getPasswordStrength = () =>
      password.length > 10 ? "Strong" : password.length >=6 ? "Medium" : password.length > 0 ? "Weak" : ""; //buat fungsi untuk mengukur seberapa kuat password
      
    const getStrengthColor = () =>
      password.length > 10 ? "text-green-500" : password.length >=6 ? "text-yellow-500" : password.length > 0 ? "text-red-500" : "";
    //buat fungsi untuk mengubah warna tampilan string yang keluar dengan kondisi tertentu
    return(
      <div className="flex flex-col items-center justify-center gap-4 mt-6">
        <label htmlFor="password" className="text-lg font-medium">Enter Password:</label>
        <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={handlePasswordChange} //panggil fungsi passwordchange untuk mendeteksi perubahan input
            className="border border-gray-300 px-4 py-2 rounded"
            placeholder="Enter your password"
        />
        {/* getstrengcolor disini dipanggil sebagai css dalam classname */}
        <p className={`text-lg font-bold ${getStrengthColor()}`}> 
            {getPasswordStrength()}
        </p>
      </div>
    );
};

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="flex border p-1 max-w-md">
      {/* Gambar */}
      <img
        className="object-cover border border-[#F17910] w-24 h-24"
        src={imageUrl}
        alt="Card Image"
      />
      {/* Judul dan deskripsi */}
      <div className="ml-4 flex flex-col justify-between w-full">
        <h2 className="text-xl font-bold mb-2 border border-[#F17910] p-2 text-[#F17910] w-full">
          {title}
        </h2>
        <p className="text-gray-600 border border-[#F17910] p-2 w-full">
          {description}
        </p>
      </div>
    </div>
  );
};

// Default props jika tidak ada yang diinput
Card.defaultProps = {
  title: "Default Title",
  description: "Default Description",
  imageUrl: "https://placehold.co/100x100",
};


const ComplexCard = ({ userName, institution, comment, timeAgo, imageUrl }) => {
  return (
    <div className="flex border p-2 max-w-md mt-10">
      {/* Gambar pengguna */}
      <img
        className="object-cover border border-[#F17910] w-15 h-15"
        src={imageUrl}
        alt="User Avatar"
      />
      {/* Teks komentar */}
      <div className="ml-4 flex flex-col justify-between w-full">
        <div className="flex items-center">
          <div className="flex space-x-2">
            <h2 className="text-lg font-bold text-blue-500">{userName}</h2>
          </div>
          <span className="text-gray-500 text-sm ml-4">{institution}</span>
        </div>
        
        <p className="text-gray-700">{comment}</p>
        <div className="flex items-center">
          <div className="flex space-x-2">
            <button className="text-blue-500 hover:underline">Like</button>
            <button className="text-blue-500 hover:underline">Reply</button>
          </div>
          <span className="text-gray-500 text-sm ml-4">{timeAgo}</span>
        </div>
      </div>
    </div>
  );
};

// Default props jika tidak ada yang diinput
ComplexCard.defaultProps = {
  userName: "Default User",
  institution: "Default Institution",
  comment: "Default Comment",
  timeAgo: "Just now",
  imageUrl: "https://placehold.co/100x100",
};



export const TugasJS5 = () => {
  return (
    <div>
      TugasJS5
      <div>
        <p>Soal nomer 1</p>
        <Counter />
      </div>
      <div>
        <p>Soal nomer 2</p>
        <PasswordChecker/>
      </div>
      <div>
        <p>task lanjutan nomer 1</p>
        <Card
          title="A Title"
          description="The description goes here"
          imageUrl="https://placehold.co/150x150"
        />
        
      </div>
      <div>
        <p>task lanjutan nomer 2</p>
        <ComplexCard
          userName="Jason Kincaid"
          institution="UCLA"
          comment="I have something insightful to say, as usual."
          timeAgo="2 seconds ago"
          imageUrl="https://placehold.co/100x100"
        />
        
      </div>
    </div>
  );
}