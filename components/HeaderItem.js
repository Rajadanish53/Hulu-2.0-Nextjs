function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-12 hover:text-white headerp">
      <Icon className="h-8 mb-1 bouncing" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
    </div>
  );
}

export default HeaderItem;
