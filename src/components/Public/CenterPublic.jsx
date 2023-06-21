import { useContext } from "react";
import { State } from "../../context/stateContext";


export const CenterPublic = () => {
    const {
        name,
        setName,
        address,
        setAddress,
        email,
        setEmail,
        phone,
        setPhone,
        bankName,
        setBankName,
        website,
        setWebsite,
        clientName,
        setClientName,
        clientAddress,
        setClientAddress,
    } = useContext(State);

    return (
        <>
            <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                    <label htmlFor="name">กระผม-ดิฉัน</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="ชื่อ-นามสกุล"
                        autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="address">ตำแหน่ง</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="ตำแหน่ง"
                        autoComplete="off"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
            </article>
            <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                    <label htmlFor="email">ขออนุญาติหยุดพักผ่อน</label>
                    <input
                        type="number"
                        name="email"
                        id="email"
                        placeholder="มีกำหนด: .วัน.. "
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="phone">ตั้งแต่วันที</label>
                    <input
                        type="date"
                        name="phone"
                        id="phone"
                        placeholder="ตั้งแต่วันที"
                        autoComplete="off"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="bankName">ถึงวันที่</label>
                    <input
                        type="date"
                        name="bankName"
                        id="bankName"
                        placeholder="ตั้งแต่วันที"
                        autoComplete="off"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                    />
                </div>
            </article>

            <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                    <label htmlFor="clientName">ในระหว่างลานี้  จะไปที่ </label>
                    <input
                        type="text"
                        name="clientName"
                        id="clientName"
                        placeholder="จะไปที่ใด.. "
                        autoComplete="off"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="website">ในวันที่</label>
                    <input
                        type="date"
                        name="website"
                        id="website"
                        placeholder="ในวันที่"
                        autoComplete="off"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="clientAddress">และจะกลับในวันที่</label>
                    <input
                        type="date"
                        name="clientAddress"
                        id="clientAddress"
                        placeholder="และจะกลับในวันที่"
                        autoComplete="off"
                        value={clientAddress}
                        onChange={(e) => setClientAddress(e.target.value)}
                    />
                </div>
            </article>
        </>
    )
}

export default CenterPublic