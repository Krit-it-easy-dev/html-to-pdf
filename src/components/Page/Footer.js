
export default function Footer() {


  return (
    <>
      <div className="mt-1 mb-10 flex items-end justify-end border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-col w-full text-sm">
          <ul className="flex w-full pl-12">
            <li className="p-1 flex-grow">
              <span className="font-boldml-12">ในปีงบประมาณที่แล้วตั้งแต่วันที่ ๑ ตค..................................</span>
              <span className="font-boldml-12 ml-12">ถึง ๓o กย....................................................................</span>
            </li>
          </ul>

          <li className="p-1 flex-grow text-sm">
            <span className="font-boldml-12 ">ได้ลาพักร้อนป่ะจำปีรวม..................................วันทำการ</span> { }
            <span className="font-boldml-12 ml-6 ">เหลือวันพักผ่อนสะสม..............................................................วันทำการ</span> { }
          </li>
          <li className="p-1 flex-grow text-sm ">
            <span className="font-boldml-12">ในปีงบประมาณนี้................................วันทำการ</span>
            <span className="font-boldml-12 ml-12 ">ได้ลาพักผ่อนประจำปีมาแล้ว......................................................................</span> { }

          </li>
          <li className="p-1 flex-grow text-sm ">
            <span className="font-boldml-12 ml-0 ">.................วันทำการ</span> { }
            <span className="font-boldml-12 ml-6 ">ทั้งครั้งนี้รวมเป็น............................วันทำการ</span> { }
            <span className="font-boldml-12 ml-6 ">เหลือเวลาพักผ่อน....................................วันทำการ</span> { }
          </li>
          <header className="flex flex-col items-center justify-center mb-1 mt-10 xl:flex-row xl:justify-between">
          
            <span className="font-boldml-12  ">(ลงชื่อ)......................................................................................................(เจ้าหน้าที่ตรวจสอบ)</span> { }
            <span className="font-boldml-12  ">ตำแหน่ง......................................................................................................</span> { }
            <span className="font-boldml-12  ">...................../......................../....................</span> { }
          </header>
        </ul>
      </div>
    </>
  );
}


// <footer className="footer border-t-2 border-gray-300 pt-5">
// <ul className="flex flex-wrap items-center justify-center">
//   <li>
//     <span className="font-bold">Your name:</span> {name}
//   </li>
//   <li>
//     <span className="font-bold">Your email:</span> {email}
//   </li>
//   <li>
//     <span className="font-bold">Phone number:</span> {phone}
//   </li>
//   <li>
//     <span className="font-bold">Bank:</span> {bankName}
//   </li>
//   <li>
//     <span className="font-bold">Account holder:</span> {name}
//   </li>
//   <li>
//     <span className="font-bold">Account number:</span> {bankAccount}
//   </li>
//   <li>
//     <span className="font-bold">Website:</span>{" "}
//     <a href={website} target="_blank" rel="noopenner noreferrer">
//       {website}
//     </a>
//   </li>
// </ul>
// </footer>

// <p className="text-center px-5 mt-8 text-xs ">
// Invoicer is built by{" "}
// <a
//   href="https://tsbsankara.com"
//   target="_blank"
//   rel="noreferrer"
//   className="underline"
// >
//   Thomas Sankara
// </a>
// </p>