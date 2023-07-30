type style = string

const notify:style = "underline font-semibold hover:text-slate-600 hover:decoration-slate-600"
const Header:style = 'text-4xl font-bold uppercase mb-[1rem]'


const Noctice = () =>{
    return(
        <div className="w-[90%] mx-auto py-[3rem]">
            <p className={Header}>Noctice</p>
            <div>
                <a href="#" className={notify}>• Please beware of impersonating company name through fake website, line, or social media including SMS and MMS which is not an official communication channel.</a>
            </div>
        </div>
    )
}

export default Noctice