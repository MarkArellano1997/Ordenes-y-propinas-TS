import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item:MenuItem) => void
}

export default function MenuItem({item, addItem}:MenuItemProps) {
    const {name, price} = item
  return (
    <button className="border-2 border-teal-400 w-full hover:bg-teal-200 p-2 flex justify-between"
    onClick={()=>addItem(item)}>
      <p>{name}</p>
      <p className="font-black">${price}</p>
    </button>
  )
}
