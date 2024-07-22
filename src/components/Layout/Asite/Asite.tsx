import { Link } from 'react-router-dom';
interface Section {
  title: string;
  path: string;
  // content: React.ReactNode;
}
const sections: Section[] = [
  {
    title: 'Home',
    path: '/',
   
  },
  {
    title: 'introduction',
    path: 'introduction',
  },
  {
    title: 'Button',
    path: 'Button',
  },
];
const Asite = () => {
  return (
    <aside className="w-64 bg-white p-4 max-h-screen shadow-lg h-full border ">
    <nav>
    {sections.map((section) => (
          <Link key={section.path} to={section.path} className="block py-2  font-semibold">
            {section.title}
          </Link>
        ))}
    </nav>
  </aside>
  )
}

export default Asite