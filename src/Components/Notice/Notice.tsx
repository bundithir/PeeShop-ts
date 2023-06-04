type style = string

const notify:style = "underline font-semibold hover:text-slate-600 hover:decoration-slate-600"
const Header:style = 'text-4xl font-bold uppercase mb-[1rem]'


const Noctice = () =>{
    return(
        <div className="w-[90%] mx-auto py-[3rem]">
            <p className={Header}>Noctice</p>
            <div>
                <a href="#" className={notify}>• โปรดระวังการแอบอ้างชื่อ ผ่านทางเว็บไซต์ Line หรือโซเชียลมีเดียต่างๆ รวมทั้ง SMS และ MMS ที่มิใช่ช่องทางการติดต่ออย่างเป็นทางการ</a>
            </div>
            <div>
                <a href="#" className={notify}>• ลูกค้าอาจได้รับสินค้าภายใน 2-5 วัน เนื่องจากมีออเดอร์จำนวนมาก</a>
            </div>
        </div>
    )
}

export default Noctice