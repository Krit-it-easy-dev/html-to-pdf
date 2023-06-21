import { useContext } from "react";
import { State } from "../../context/stateContext";

export default function Center() {
    const {
        name,
        address,
        email,
        phone,
        bankName,
        website,
        clientName,
        clientAddress,
    } = useContext(State);


    return (
        <>
            <div className="mt-1 mb-10 flex items-end justify-end">
                <ul className="flex flex-col w-full text-sm">
                    <ul className="flex w-full pl-12">
                        <li className="p-1 flex-grow">
                            <span className="font-boldml-12">กระผม ดิฉัน............{name}....................</span>
                            <span className="font-bold ml-6">ตำแหน่ง....{address}...................................</span>
                        </li>
                    </ul>

                    <li className="p-1 flex-grow text-sm">
                        <span className="font-boldml-12 ">ขออนุญาติหยุดราชการเพื่อพักผ่อนประจำปี :. มีกำหนด:....{email}...วัน</span>

                        <span className="font-boldml-12 ml-6 ">ตั้งแต่วันที่: ..................{new Date(phone).getDate()}{" "}...........................</span>
                    </li>
                    <li className="p-1 flex-grow text-sm ">
                        <span className="font-boldml-12 ">เดือน............{new Date(phone).toLocaleString("th-TH", { month: "long" })}{" "}.................</span>
                        <span className="font-boldml-12 ml-6 ">พ.ศ. .........{new Date(phone).getFullYear() + 543}.................</span>
                        <span className="font-boldml-12 ml-6">ถึงวันที่...............{new Date(bankName).getDate()}{" "}.</span>
                        <span className="font-boldml-12 ml-6 ">เดือน.........{new Date(bankName).toLocaleString("th-TH", { month: "long" })}{" "}........</span>
                    </li>
                    <li className="p-1 flex-grow text-sm ">
                        <span className="font-boldml-12 ">พศ.........{new Date(phone).getFullYear() + 543}..........</span>
                        <span className="font-boldml-12 ml-12 ">ในระหว่างลานี้ กระผม ดิฉัน จะไปที่จังหวัด.....................{clientName}.............................</span>
                    </li>
                    <li className="p-1 flex-grow text-sm ">
                        <span className="font-boldml-12 ">ในวันที่..........{new Date(website).getDate()}..............</span>
                        <span className="font-boldml-12 ml-6 ">เดือน.......{new Date(website).toLocaleString("th-TH", { month: "long" })}{" "}...........</span> { }
                        <span className="font-boldml-12 ml-0 ">พศ......{new Date(website).getFullYear() + 543}.........</span> { }
                        <span className="font-boldml-12 ml-6">
                            และจะกลับในวันที่... {clientAddress && new Date(clientAddress).toLocaleDateString("th-TH", { day: '2-digit', month: '2-digit', year: 'numeric',  }).replace("/", "-").replace("/", "-")}
                        </span>

                    </li>
                    <header className="flex flex-col items-center justify-center mb-1 mt-10 xl:flex-row xl:justify-between">
                        <div>
                            <h1 className="font-bold uppercase tracking-wide text-1xl mb-3 mt-5">
                                ควรมิควรแล้วแต่จะกรุณา
                            </h1>

                        </div>
                        <span className="font-boldml-12  ">ลงชื่อ...................................................................................................................</span> { }
                    </header>
                </ul>
            </div>

        </>
    );
}