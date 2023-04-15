export type MenuItem = {
  name: string;
  href: string;
  items?: MenuItem[];
};
//note: will fix this. this is temp menu item structure yay
const menu: MenuItem[] = [
  {
    name: "Dashboard",
    href: "/",
  },
  //   {
  //     name: "ChatBot",
  //     href: "/chat",
  //     items: [
  //       {
  //         name: "Chat",
  //         href: "chat",
  //       },
  //     ],
  //   },
  {
    name: "ChatBot",
    href: "/chat/chatbot",
  },
];
export default menu;
