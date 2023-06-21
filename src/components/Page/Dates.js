import { useContext } from "react";
import { State } from "../../context/stateContext";

export default function Dates() {
  const { invoiceNumber, invoiceDate, dueDate } = useContext(State);

  return (
    <>
      <article className="mt-10 mb-14 flex items-end justify-end">
        <ul>
          <li className="p-1">
            <span className="font-bold">เขียนที่:</span> {invoiceNumber}
          </li>
          <li className="p-1">
            {invoiceDate && (
              <p className="pl-6">
                วันที่... {new Date(invoiceDate).getDate()}{" "}
                ...เดือน .. {new Date(invoiceDate).toLocaleString("th-TH", { month: "long" })}{" "}
                ..พ.ศ... {new Date(invoiceDate).getFullYear() + 543}
              </p>
            )}
          </li>
        </ul>
      </article>




      <div className="mt-1 mb-10 flex items-end justify-end">
        <ul className="flex flex-col w-full">
          <li className="p-1 flex-grow">
            <span className="font-bold">เรื่อง: ขอลาพักร้อนประจำปี</span>
          </li>
          <li className="p-1 flex-grow">
            <span className="font-bold">เรียน:</span> {dueDate}
          </li>
        </ul>
      </div>


    </>
  );
}
