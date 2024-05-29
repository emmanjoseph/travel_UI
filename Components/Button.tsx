import Image from "next/image"

type ButtonProps ={
type:'button'|'submit',
title : string,
icon?:string,
variant:string,
full?:boolean

}
const Button = ({type,title,icon,variant,full}:ButtonProps) => {
  return (
    <div>
      <button type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      >
        {icon && <Image src={icon} alt={title} width={20} height={20} />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
        </button>
    </div>
  )
}

export default Button
