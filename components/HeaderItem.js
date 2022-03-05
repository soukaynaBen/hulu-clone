function HeaderItem({title,Icon}) {
    return (
        <div className='flex flex-col items-center cursor-pointer  group w-12 sm:w-20 hover:text-white'>
            <Icon className="h-8 mb-1 group-hover:text-blue-200  "/>
            <p className=' uppercase tracking-widest invisible  opacity-0 group-hover:opacity-100 group-hover:visible text-blue-200'>{title}</p>
       
        </div>
    )
}

export default HeaderItem;
