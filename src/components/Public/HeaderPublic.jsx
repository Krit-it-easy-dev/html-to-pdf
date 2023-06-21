import { useContext } from "react";
import { State } from "../../context/stateContext";

export const HeaderPublic = () => {
    const {
        invoiceNumber,
        setInvoiceNumber,
        invoiceDate,
        setInvoiceDate,
        dueDate,
        setDueDate,

    } = useContext(State);

    return (
        <article className="md:grid grid-cols-3 gap-10">
            <div className="flex flex-col">
                <label htmlFor="invoiceNumber">เขียนที่</label>
                <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="หนังสือฉบับนี้เขียนที่"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="invoiceDate">วันที่</label>
                <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder=" Date Time"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="dueDate">เรียน</label>
                <input
                    type="text"
                    name="dueDate"
                    id="dueDate"
                    placeholder="เรียนท่าน..."
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
            </div>
        </article>
    );
}

export default HeaderPublic;